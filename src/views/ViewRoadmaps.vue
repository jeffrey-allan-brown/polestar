<template>
  <div class="flex flex-col flex-grow">
    <div class="flex items-center flex-shrink-0 h-16 bg-white border-b border-gray-300 px-4">
      <div>
        <h1 class="text-2xl font-regular leading-none">{{ selectedMenuItem.name }}</h1>
        <span class="text-sm font-light leading-none">from {{ currentWorkspace.name }}</span>
      </div>
    </div>
    <div class="flex flex-grow overflow-auto w-full">
      Roadmaps  
    </div>
    <div class="h-12 bg-white px-4 pb-4">
      <div class="flex items-center border-2 border-gray-300 rounded-sm p-1">
        <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </button>
        <textarea class="flex-grow text-sm px-3 border-l border-gray-300 ml-1" style="resize: none;" placeholder="Message council-of-elrond" cols="" rows="1"></textarea>
        <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
        </button>
        <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
          <span class="leading-none w-4 h-4 -mt-px">@</span>
        </button>
        <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd" />
          </svg>
        </button>
        <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
          </svg>
        </button>
        <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
          <svg class="h-4 w-4 transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
// import components //
import RoadmapTile from '../components/roadmaps/RoadmapTile.vue';

export default ({
  name: 'ViewRoadmaps',
  data: () => ({
    
  }),
  components: {
    RoadmapTile
  },
  computed: {
    currentWorkspace: function() {
      return this.$store.getters['workspace/getCurrentWorkspace'];
    },
    selectedMenuItem: function() {
      return this.$store.getters['application/getSelectedMenuItem'];
    },
    userJourneys: function() {
      return this.$store.getters['journey/getUserJourneys'];
    },
    userWorkspaces: function() {
      return this.$store.getters['workspace/getUserWorkspaces'];
    }
  },
  methods: {
    
  }
})
</script>