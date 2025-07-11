# `stackHciMarketplaceGalleryImage` Submodule <a name="`stackHciMarketplaceGalleryImage` Submodule" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackHciMarketplaceGalleryImage <a name="StackHciMarketplaceGalleryImage" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image azurerm_stack_hci_marketplace_gallery_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_marketplace_gallery_image

stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_location_id: str,
  hyperv_generation: str,
  identifier: StackHciMarketplaceGalleryImageIdentifier,
  location: str,
  name: str,
  os_type: str,
  resource_group_name: str,
  version: str,
  id: str = None,
  storage_path_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: StackHciMarketplaceGalleryImageTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.customLocationId">custom_location_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#custom_location_id StackHciMarketplaceGalleryImage#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.hypervGeneration">hyperv_generation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#hyperv_generation StackHciMarketplaceGalleryImage#hyperv_generation}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.identifier">identifier</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a></code> | identifier block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#location StackHciMarketplaceGalleryImage#location}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#name StackHciMarketplaceGalleryImage#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.osType">os_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#os_type StackHciMarketplaceGalleryImage#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#resource_group_name StackHciMarketplaceGalleryImage#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#version StackHciMarketplaceGalleryImage#version}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#id StackHciMarketplaceGalleryImage#id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.storagePathId">storage_path_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#storage_path_id StackHciMarketplaceGalleryImage#storage_path_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#tags StackHciMarketplaceGalleryImage#tags}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts">StackHciMarketplaceGalleryImageTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_location_id`<sup>Required</sup> <a name="custom_location_id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.customLocationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#custom_location_id StackHciMarketplaceGalleryImage#custom_location_id}.

---

##### `hyperv_generation`<sup>Required</sup> <a name="hyperv_generation" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.hypervGeneration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#hyperv_generation StackHciMarketplaceGalleryImage#hyperv_generation}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.identifier"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a>

identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#identifier StackHciMarketplaceGalleryImage#identifier}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#location StackHciMarketplaceGalleryImage#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#name StackHciMarketplaceGalleryImage#name}.

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.osType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#os_type StackHciMarketplaceGalleryImage#os_type}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#resource_group_name StackHciMarketplaceGalleryImage#resource_group_name}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#version StackHciMarketplaceGalleryImage#version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#id StackHciMarketplaceGalleryImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storage_path_id`<sup>Optional</sup> <a name="storage_path_id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.storagePathId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#storage_path_id StackHciMarketplaceGalleryImage#storage_path_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#tags StackHciMarketplaceGalleryImage#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts">StackHciMarketplaceGalleryImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#timeouts StackHciMarketplaceGalleryImage#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putIdentifier">put_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetStoragePathId">reset_storage_path_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identifier` <a name="put_identifier" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putIdentifier"></a>

```python
def put_identifier(
  offer: str,
  publisher: str,
  sku: str
) -> None
```

###### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putIdentifier.parameter.offer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#offer StackHciMarketplaceGalleryImage#offer}.

---

###### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putIdentifier.parameter.publisher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#publisher StackHciMarketplaceGalleryImage#publisher}.

---

###### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putIdentifier.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#sku StackHciMarketplaceGalleryImage#sku}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#create StackHciMarketplaceGalleryImage#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#delete StackHciMarketplaceGalleryImage#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#read StackHciMarketplaceGalleryImage#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#update StackHciMarketplaceGalleryImage#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_storage_path_id` <a name="reset_storage_path_id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetStoragePathId"></a>

```python
def reset_storage_path_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StackHciMarketplaceGalleryImage resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_marketplace_gallery_image

stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_marketplace_gallery_image

stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_marketplace_gallery_image

stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_marketplace_gallery_image

stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StackHciMarketplaceGalleryImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StackHciMarketplaceGalleryImage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StackHciMarketplaceGalleryImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StackHciMarketplaceGalleryImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.identifier">identifier</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference">StackHciMarketplaceGalleryImageIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference">StackHciMarketplaceGalleryImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.customLocationIdInput">custom_location_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.hypervGenerationInput">hyperv_generation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.identifierInput">identifier_input</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.osTypeInput">os_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.storagePathIdInput">storage_path_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts">StackHciMarketplaceGalleryImageTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.customLocationId">custom_location_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.hypervGeneration">hyperv_generation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.osType">os_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.storagePathId">storage_path_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.identifier"></a>

```python
identifier: StackHciMarketplaceGalleryImageIdentifierOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference">StackHciMarketplaceGalleryImageIdentifierOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.timeouts"></a>

```python
timeouts: StackHciMarketplaceGalleryImageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference">StackHciMarketplaceGalleryImageTimeoutsOutputReference</a>

---

##### `custom_location_id_input`<sup>Optional</sup> <a name="custom_location_id_input" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.customLocationIdInput"></a>

```python
custom_location_id_input: str
```

- *Type:* str

---

##### `hyperv_generation_input`<sup>Optional</sup> <a name="hyperv_generation_input" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.hypervGenerationInput"></a>

```python
hyperv_generation_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.identifierInput"></a>

```python
identifier_input: StackHciMarketplaceGalleryImageIdentifier
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `os_type_input`<sup>Optional</sup> <a name="os_type_input" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.osTypeInput"></a>

```python
os_type_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `storage_path_id_input`<sup>Optional</sup> <a name="storage_path_id_input" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.storagePathIdInput"></a>

```python
storage_path_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StackHciMarketplaceGalleryImageTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts">StackHciMarketplaceGalleryImageTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `custom_location_id`<sup>Required</sup> <a name="custom_location_id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.customLocationId"></a>

```python
custom_location_id: str
```

- *Type:* str

---

##### `hyperv_generation`<sup>Required</sup> <a name="hyperv_generation" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.hypervGeneration"></a>

```python
hyperv_generation: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.osType"></a>

```python
os_type: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `storage_path_id`<sup>Required</sup> <a name="storage_path_id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.storagePathId"></a>

```python
storage_path_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StackHciMarketplaceGalleryImageConfig <a name="StackHciMarketplaceGalleryImageConfig" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_marketplace_gallery_image

stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_location_id: str,
  hyperv_generation: str,
  identifier: StackHciMarketplaceGalleryImageIdentifier,
  location: str,
  name: str,
  os_type: str,
  resource_group_name: str,
  version: str,
  id: str = None,
  storage_path_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: StackHciMarketplaceGalleryImageTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.customLocationId">custom_location_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#custom_location_id StackHciMarketplaceGalleryImage#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.hypervGeneration">hyperv_generation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#hyperv_generation StackHciMarketplaceGalleryImage#hyperv_generation}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.identifier">identifier</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a></code> | identifier block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#location StackHciMarketplaceGalleryImage#location}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#name StackHciMarketplaceGalleryImage#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.osType">os_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#os_type StackHciMarketplaceGalleryImage#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#resource_group_name StackHciMarketplaceGalleryImage#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#version StackHciMarketplaceGalleryImage#version}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#id StackHciMarketplaceGalleryImage#id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.storagePathId">storage_path_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#storage_path_id StackHciMarketplaceGalleryImage#storage_path_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#tags StackHciMarketplaceGalleryImage#tags}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts">StackHciMarketplaceGalleryImageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_location_id`<sup>Required</sup> <a name="custom_location_id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.customLocationId"></a>

```python
custom_location_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#custom_location_id StackHciMarketplaceGalleryImage#custom_location_id}.

---

##### `hyperv_generation`<sup>Required</sup> <a name="hyperv_generation" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.hypervGeneration"></a>

```python
hyperv_generation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#hyperv_generation StackHciMarketplaceGalleryImage#hyperv_generation}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.identifier"></a>

```python
identifier: StackHciMarketplaceGalleryImageIdentifier
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a>

identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#identifier StackHciMarketplaceGalleryImage#identifier}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#location StackHciMarketplaceGalleryImage#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#name StackHciMarketplaceGalleryImage#name}.

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.osType"></a>

```python
os_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#os_type StackHciMarketplaceGalleryImage#os_type}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#resource_group_name StackHciMarketplaceGalleryImage#resource_group_name}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#version StackHciMarketplaceGalleryImage#version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#id StackHciMarketplaceGalleryImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storage_path_id`<sup>Optional</sup> <a name="storage_path_id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.storagePathId"></a>

```python
storage_path_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#storage_path_id StackHciMarketplaceGalleryImage#storage_path_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#tags StackHciMarketplaceGalleryImage#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.timeouts"></a>

```python
timeouts: StackHciMarketplaceGalleryImageTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts">StackHciMarketplaceGalleryImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#timeouts StackHciMarketplaceGalleryImage#timeouts}

---

### StackHciMarketplaceGalleryImageIdentifier <a name="StackHciMarketplaceGalleryImageIdentifier" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_marketplace_gallery_image

stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier(
  offer: str,
  publisher: str,
  sku: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.offer">offer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#offer StackHciMarketplaceGalleryImage#offer}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#publisher StackHciMarketplaceGalleryImage#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#sku StackHciMarketplaceGalleryImage#sku}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.offer"></a>

```python
offer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#offer StackHciMarketplaceGalleryImage#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#publisher StackHciMarketplaceGalleryImage#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#sku StackHciMarketplaceGalleryImage#sku}.

---

### StackHciMarketplaceGalleryImageTimeouts <a name="StackHciMarketplaceGalleryImageTimeouts" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_marketplace_gallery_image

stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#create StackHciMarketplaceGalleryImage#create}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#delete StackHciMarketplaceGalleryImage#delete}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#read StackHciMarketplaceGalleryImage#read}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#update StackHciMarketplaceGalleryImage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#create StackHciMarketplaceGalleryImage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#delete StackHciMarketplaceGalleryImage#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#read StackHciMarketplaceGalleryImage#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/stack_hci_marketplace_gallery_image#update StackHciMarketplaceGalleryImage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackHciMarketplaceGalleryImageIdentifierOutputReference <a name="StackHciMarketplaceGalleryImageIdentifierOutputReference" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_marketplace_gallery_image

stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.offerInput">offer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.offer">offer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `offer_input`<sup>Optional</sup> <a name="offer_input" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.offerInput"></a>

```python
offer_input: str
```

- *Type:* str

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.offer"></a>

```python
offer: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.internalValue"></a>

```python
internal_value: StackHciMarketplaceGalleryImageIdentifier
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a>

---


### StackHciMarketplaceGalleryImageTimeoutsOutputReference <a name="StackHciMarketplaceGalleryImageTimeoutsOutputReference" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_marketplace_gallery_image

stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts">StackHciMarketplaceGalleryImageTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StackHciMarketplaceGalleryImageTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts">StackHciMarketplaceGalleryImageTimeouts</a>]

---



