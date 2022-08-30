<script lang="ts">
  let obj = {
    child: {
      title: "hello!",
    },
  };

  let child: typeof obj.child;
  $: child = obj.child;
  $: title = child?.title ?? "Yo!";
</script>

{child}{title}
