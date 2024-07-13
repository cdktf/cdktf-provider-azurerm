# `virtualMachineGalleryApplicationAssignment` Submodule <a name="`virtualMachineGalleryApplicationAssignment` Submodule" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineGalleryApplicationAssignment <a name="VirtualMachineGalleryApplicationAssignment" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment azurerm_virtual_machine_gallery_application_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_gallery_application_assignment

virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gallery_application_version_id: str,
  virtual_machine_id: str,
  configuration_blob_uri: str = None,
  id: str = None,
  order: typing.Union[int, float] = None,
  tag: str = None,
  timeouts: VirtualMachineGalleryApplicationAssignmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.galleryApplicationVersionId">gallery_application_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#gallery_application_version_id VirtualMachineGalleryApplicationAssignment#gallery_application_version_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#virtual_machine_id VirtualMachineGalleryApplicationAssignment#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.configurationBlobUri">configuration_blob_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#configuration_blob_uri VirtualMachineGalleryApplicationAssignment#configuration_blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#id VirtualMachineGalleryApplicationAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.order">order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#order VirtualMachineGalleryApplicationAssignment#order}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.tag">tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#tag VirtualMachineGalleryApplicationAssignment#tag}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeouts">VirtualMachineGalleryApplicationAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gallery_application_version_id`<sup>Required</sup> <a name="gallery_application_version_id" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.galleryApplicationVersionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#gallery_application_version_id VirtualMachineGalleryApplicationAssignment#gallery_application_version_id}.

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.virtualMachineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#virtual_machine_id VirtualMachineGalleryApplicationAssignment#virtual_machine_id}.

---

##### `configuration_blob_uri`<sup>Optional</sup> <a name="configuration_blob_uri" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.configurationBlobUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#configuration_blob_uri VirtualMachineGalleryApplicationAssignment#configuration_blob_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#id VirtualMachineGalleryApplicationAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.order"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#order VirtualMachineGalleryApplicationAssignment#order}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.tag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#tag VirtualMachineGalleryApplicationAssignment#tag}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeouts">VirtualMachineGalleryApplicationAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#timeouts VirtualMachineGalleryApplicationAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.resetConfigurationBlobUri">reset_configuration_blob_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.resetTag">reset_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#create VirtualMachineGalleryApplicationAssignment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#delete VirtualMachineGalleryApplicationAssignment#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#read VirtualMachineGalleryApplicationAssignment#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#update VirtualMachineGalleryApplicationAssignment#update}.

---

##### `reset_configuration_blob_uri` <a name="reset_configuration_blob_uri" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.resetConfigurationBlobUri"></a>

```python
def reset_configuration_blob_uri() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.resetTag"></a>

```python
def reset_tag() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VirtualMachineGalleryApplicationAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_gallery_application_assignment

virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_gallery_application_assignment

virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_gallery_application_assignment

virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_gallery_application_assignment

virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VirtualMachineGalleryApplicationAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VirtualMachineGalleryApplicationAssignment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VirtualMachineGalleryApplicationAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineGalleryApplicationAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference">VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.configurationBlobUriInput">configuration_blob_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.galleryApplicationVersionIdInput">gallery_application_version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.orderInput">order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeouts">VirtualMachineGalleryApplicationAssignmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.virtualMachineIdInput">virtual_machine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.configurationBlobUri">configuration_blob_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.galleryApplicationVersionId">gallery_application_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.timeouts"></a>

```python
timeouts: VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference">VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference</a>

---

##### `configuration_blob_uri_input`<sup>Optional</sup> <a name="configuration_blob_uri_input" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.configurationBlobUriInput"></a>

```python
configuration_blob_uri_input: str
```

- *Type:* str

---

##### `gallery_application_version_id_input`<sup>Optional</sup> <a name="gallery_application_version_id_input" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.galleryApplicationVersionIdInput"></a>

```python
gallery_application_version_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.orderInput"></a>

```python
order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VirtualMachineGalleryApplicationAssignmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeouts">VirtualMachineGalleryApplicationAssignmentTimeouts</a>]

---

##### `virtual_machine_id_input`<sup>Optional</sup> <a name="virtual_machine_id_input" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.virtualMachineIdInput"></a>

```python
virtual_machine_id_input: str
```

- *Type:* str

---

##### `configuration_blob_uri`<sup>Required</sup> <a name="configuration_blob_uri" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.configurationBlobUri"></a>

```python
configuration_blob_uri: str
```

- *Type:* str

---

##### `gallery_application_version_id`<sup>Required</sup> <a name="gallery_application_version_id" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.galleryApplicationVersionId"></a>

```python
gallery_application_version_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.virtualMachineId"></a>

```python
virtual_machine_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineGalleryApplicationAssignmentConfig <a name="VirtualMachineGalleryApplicationAssignmentConfig" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_gallery_application_assignment

virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gallery_application_version_id: str,
  virtual_machine_id: str,
  configuration_blob_uri: str = None,
  id: str = None,
  order: typing.Union[int, float] = None,
  tag: str = None,
  timeouts: VirtualMachineGalleryApplicationAssignmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.galleryApplicationVersionId">gallery_application_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#gallery_application_version_id VirtualMachineGalleryApplicationAssignment#gallery_application_version_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#virtual_machine_id VirtualMachineGalleryApplicationAssignment#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.configurationBlobUri">configuration_blob_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#configuration_blob_uri VirtualMachineGalleryApplicationAssignment#configuration_blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#id VirtualMachineGalleryApplicationAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.order">order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#order VirtualMachineGalleryApplicationAssignment#order}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.tag">tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#tag VirtualMachineGalleryApplicationAssignment#tag}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeouts">VirtualMachineGalleryApplicationAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gallery_application_version_id`<sup>Required</sup> <a name="gallery_application_version_id" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.galleryApplicationVersionId"></a>

```python
gallery_application_version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#gallery_application_version_id VirtualMachineGalleryApplicationAssignment#gallery_application_version_id}.

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.virtualMachineId"></a>

```python
virtual_machine_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#virtual_machine_id VirtualMachineGalleryApplicationAssignment#virtual_machine_id}.

---

##### `configuration_blob_uri`<sup>Optional</sup> <a name="configuration_blob_uri" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.configurationBlobUri"></a>

```python
configuration_blob_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#configuration_blob_uri VirtualMachineGalleryApplicationAssignment#configuration_blob_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#id VirtualMachineGalleryApplicationAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#order VirtualMachineGalleryApplicationAssignment#order}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.tag"></a>

```python
tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#tag VirtualMachineGalleryApplicationAssignment#tag}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentConfig.property.timeouts"></a>

```python
timeouts: VirtualMachineGalleryApplicationAssignmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeouts">VirtualMachineGalleryApplicationAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#timeouts VirtualMachineGalleryApplicationAssignment#timeouts}

---

### VirtualMachineGalleryApplicationAssignmentTimeouts <a name="VirtualMachineGalleryApplicationAssignmentTimeouts" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_gallery_application_assignment

virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#create VirtualMachineGalleryApplicationAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#delete VirtualMachineGalleryApplicationAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#read VirtualMachineGalleryApplicationAssignment#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#update VirtualMachineGalleryApplicationAssignment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#create VirtualMachineGalleryApplicationAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#delete VirtualMachineGalleryApplicationAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#read VirtualMachineGalleryApplicationAssignment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_machine_gallery_application_assignment#update VirtualMachineGalleryApplicationAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference <a name="VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_gallery_application_assignment

virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeouts">VirtualMachineGalleryApplicationAssignmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualMachineGalleryApplicationAssignmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineGalleryApplicationAssignment.VirtualMachineGalleryApplicationAssignmentTimeouts">VirtualMachineGalleryApplicationAssignmentTimeouts</a>]

---



