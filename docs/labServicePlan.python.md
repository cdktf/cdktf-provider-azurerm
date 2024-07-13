# `labServicePlan` Submodule <a name="`labServicePlan` Submodule" id="@cdktf/provider-azurerm.labServicePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LabServicePlan <a name="LabServicePlan" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan azurerm_lab_service_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_plan

labServicePlan.LabServicePlan(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allowed_regions: typing.List[str],
  location: str,
  name: str,
  resource_group_name: str,
  default_auto_shutdown: LabServicePlanDefaultAutoShutdown = None,
  default_connection: LabServicePlanDefaultConnection = None,
  default_network_subnet_id: str = None,
  id: str = None,
  shared_gallery_id: str = None,
  support: LabServicePlanSupport = None,
  tags: typing.Mapping[str] = None,
  timeouts: LabServicePlanTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.allowedRegions">allowed_regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#allowed_regions LabServicePlan#allowed_regions}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#location LabServicePlan#location}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#name LabServicePlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#resource_group_name LabServicePlan#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.defaultAutoShutdown">default_auto_shutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a></code> | default_auto_shutdown block. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.defaultConnection">default_connection</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a></code> | default_connection block. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.defaultNetworkSubnetId">default_network_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#default_network_subnet_id LabServicePlan#default_network_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#id LabServicePlan#id}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.sharedGalleryId">shared_gallery_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#shared_gallery_id LabServicePlan#shared_gallery_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.support">support</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a></code> | support block. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#tags LabServicePlan#tags}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_regions`<sup>Required</sup> <a name="allowed_regions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.allowedRegions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#allowed_regions LabServicePlan#allowed_regions}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#location LabServicePlan#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#name LabServicePlan#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#resource_group_name LabServicePlan#resource_group_name}.

---

##### `default_auto_shutdown`<sup>Optional</sup> <a name="default_auto_shutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.defaultAutoShutdown"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a>

default_auto_shutdown block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#default_auto_shutdown LabServicePlan#default_auto_shutdown}

---

##### `default_connection`<sup>Optional</sup> <a name="default_connection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.defaultConnection"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a>

default_connection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#default_connection LabServicePlan#default_connection}

---

##### `default_network_subnet_id`<sup>Optional</sup> <a name="default_network_subnet_id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.defaultNetworkSubnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#default_network_subnet_id LabServicePlan#default_network_subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#id LabServicePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shared_gallery_id`<sup>Optional</sup> <a name="shared_gallery_id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.sharedGalleryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#shared_gallery_id LabServicePlan#shared_gallery_id}.

---

##### `support`<sup>Optional</sup> <a name="support" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.support"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a>

support block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#support LabServicePlan#support}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#tags LabServicePlan#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#timeouts LabServicePlan#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultAutoShutdown">put_default_auto_shutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultConnection">put_default_connection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putSupport">put_support</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultAutoShutdown">reset_default_auto_shutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultConnection">reset_default_connection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultNetworkSubnetId">reset_default_network_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetSharedGalleryId">reset_shared_gallery_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetSupport">reset_support</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_default_auto_shutdown` <a name="put_default_auto_shutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultAutoShutdown"></a>

```python
def put_default_auto_shutdown(
  disconnect_delay: str = None,
  idle_delay: str = None,
  no_connect_delay: str = None,
  shutdown_on_idle: str = None
) -> None
```

###### `disconnect_delay`<sup>Optional</sup> <a name="disconnect_delay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultAutoShutdown.parameter.disconnectDelay"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#disconnect_delay LabServicePlan#disconnect_delay}.

---

###### `idle_delay`<sup>Optional</sup> <a name="idle_delay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultAutoShutdown.parameter.idleDelay"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#idle_delay LabServicePlan#idle_delay}.

---

###### `no_connect_delay`<sup>Optional</sup> <a name="no_connect_delay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultAutoShutdown.parameter.noConnectDelay"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#no_connect_delay LabServicePlan#no_connect_delay}.

---

###### `shutdown_on_idle`<sup>Optional</sup> <a name="shutdown_on_idle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultAutoShutdown.parameter.shutdownOnIdle"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#shutdown_on_idle LabServicePlan#shutdown_on_idle}.

---

##### `put_default_connection` <a name="put_default_connection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultConnection"></a>

```python
def put_default_connection(
  client_rdp_access: str = None,
  client_ssh_access: str = None,
  web_rdp_access: str = None,
  web_ssh_access: str = None
) -> None
```

###### `client_rdp_access`<sup>Optional</sup> <a name="client_rdp_access" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultConnection.parameter.clientRdpAccess"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#client_rdp_access LabServicePlan#client_rdp_access}.

---

###### `client_ssh_access`<sup>Optional</sup> <a name="client_ssh_access" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultConnection.parameter.clientSshAccess"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#client_ssh_access LabServicePlan#client_ssh_access}.

---

###### `web_rdp_access`<sup>Optional</sup> <a name="web_rdp_access" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultConnection.parameter.webRdpAccess"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#web_rdp_access LabServicePlan#web_rdp_access}.

---

###### `web_ssh_access`<sup>Optional</sup> <a name="web_ssh_access" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultConnection.parameter.webSshAccess"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#web_ssh_access LabServicePlan#web_ssh_access}.

---

##### `put_support` <a name="put_support" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putSupport"></a>

```python
def put_support(
  email: str = None,
  instructions: str = None,
  phone: str = None,
  url: str = None
) -> None
```

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putSupport.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#email LabServicePlan#email}.

---

###### `instructions`<sup>Optional</sup> <a name="instructions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putSupport.parameter.instructions"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#instructions LabServicePlan#instructions}.

---

###### `phone`<sup>Optional</sup> <a name="phone" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putSupport.parameter.phone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#phone LabServicePlan#phone}.

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putSupport.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#url LabServicePlan#url}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#create LabServicePlan#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#delete LabServicePlan#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#read LabServicePlan#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#update LabServicePlan#update}.

---

##### `reset_default_auto_shutdown` <a name="reset_default_auto_shutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultAutoShutdown"></a>

```python
def reset_default_auto_shutdown() -> None
```

##### `reset_default_connection` <a name="reset_default_connection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultConnection"></a>

```python
def reset_default_connection() -> None
```

##### `reset_default_network_subnet_id` <a name="reset_default_network_subnet_id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultNetworkSubnetId"></a>

```python
def reset_default_network_subnet_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_shared_gallery_id` <a name="reset_shared_gallery_id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetSharedGalleryId"></a>

```python
def reset_shared_gallery_id() -> None
```

##### `reset_support` <a name="reset_support" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetSupport"></a>

```python
def reset_support() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LabServicePlan resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_plan

labServicePlan.LabServicePlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_plan

labServicePlan.LabServicePlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_plan

labServicePlan.LabServicePlan.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_plan

labServicePlan.LabServicePlan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LabServicePlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LabServicePlan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LabServicePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LabServicePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultAutoShutdown">default_auto_shutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference">LabServicePlanDefaultAutoShutdownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultConnection">default_connection</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference">LabServicePlanDefaultConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.support">support</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference">LabServicePlanSupportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference">LabServicePlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.allowedRegionsInput">allowed_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultAutoShutdownInput">default_auto_shutdown_input</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultConnectionInput">default_connection_input</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultNetworkSubnetIdInput">default_network_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.sharedGalleryIdInput">shared_gallery_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.supportInput">support_input</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.allowedRegions">allowed_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultNetworkSubnetId">default_network_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.sharedGalleryId">shared_gallery_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_auto_shutdown`<sup>Required</sup> <a name="default_auto_shutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultAutoShutdown"></a>

```python
default_auto_shutdown: LabServicePlanDefaultAutoShutdownOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference">LabServicePlanDefaultAutoShutdownOutputReference</a>

---

##### `default_connection`<sup>Required</sup> <a name="default_connection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultConnection"></a>

```python
default_connection: LabServicePlanDefaultConnectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference">LabServicePlanDefaultConnectionOutputReference</a>

---

##### `support`<sup>Required</sup> <a name="support" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.support"></a>

```python
support: LabServicePlanSupportOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference">LabServicePlanSupportOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.timeouts"></a>

```python
timeouts: LabServicePlanTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference">LabServicePlanTimeoutsOutputReference</a>

---

##### `allowed_regions_input`<sup>Optional</sup> <a name="allowed_regions_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.allowedRegionsInput"></a>

```python
allowed_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_auto_shutdown_input`<sup>Optional</sup> <a name="default_auto_shutdown_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultAutoShutdownInput"></a>

```python
default_auto_shutdown_input: LabServicePlanDefaultAutoShutdown
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a>

---

##### `default_connection_input`<sup>Optional</sup> <a name="default_connection_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultConnectionInput"></a>

```python
default_connection_input: LabServicePlanDefaultConnection
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a>

---

##### `default_network_subnet_id_input`<sup>Optional</sup> <a name="default_network_subnet_id_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultNetworkSubnetIdInput"></a>

```python
default_network_subnet_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `shared_gallery_id_input`<sup>Optional</sup> <a name="shared_gallery_id_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.sharedGalleryIdInput"></a>

```python
shared_gallery_id_input: str
```

- *Type:* str

---

##### `support_input`<sup>Optional</sup> <a name="support_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.supportInput"></a>

```python
support_input: LabServicePlanSupport
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LabServicePlanTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a>]

---

##### `allowed_regions`<sup>Required</sup> <a name="allowed_regions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.allowedRegions"></a>

```python
allowed_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_network_subnet_id`<sup>Required</sup> <a name="default_network_subnet_id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultNetworkSubnetId"></a>

```python
default_network_subnet_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `shared_gallery_id`<sup>Required</sup> <a name="shared_gallery_id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.sharedGalleryId"></a>

```python
shared_gallery_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LabServicePlanConfig <a name="LabServicePlanConfig" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_plan

labServicePlan.LabServicePlanConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allowed_regions: typing.List[str],
  location: str,
  name: str,
  resource_group_name: str,
  default_auto_shutdown: LabServicePlanDefaultAutoShutdown = None,
  default_connection: LabServicePlanDefaultConnection = None,
  default_network_subnet_id: str = None,
  id: str = None,
  shared_gallery_id: str = None,
  support: LabServicePlanSupport = None,
  tags: typing.Mapping[str] = None,
  timeouts: LabServicePlanTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.allowedRegions">allowed_regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#allowed_regions LabServicePlan#allowed_regions}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#location LabServicePlan#location}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#name LabServicePlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#resource_group_name LabServicePlan#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultAutoShutdown">default_auto_shutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a></code> | default_auto_shutdown block. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultConnection">default_connection</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a></code> | default_connection block. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultNetworkSubnetId">default_network_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#default_network_subnet_id LabServicePlan#default_network_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#id LabServicePlan#id}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.sharedGalleryId">shared_gallery_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#shared_gallery_id LabServicePlan#shared_gallery_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.support">support</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a></code> | support block. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#tags LabServicePlan#tags}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_regions`<sup>Required</sup> <a name="allowed_regions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.allowedRegions"></a>

```python
allowed_regions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#allowed_regions LabServicePlan#allowed_regions}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#location LabServicePlan#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#name LabServicePlan#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#resource_group_name LabServicePlan#resource_group_name}.

---

##### `default_auto_shutdown`<sup>Optional</sup> <a name="default_auto_shutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultAutoShutdown"></a>

```python
default_auto_shutdown: LabServicePlanDefaultAutoShutdown
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a>

default_auto_shutdown block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#default_auto_shutdown LabServicePlan#default_auto_shutdown}

---

##### `default_connection`<sup>Optional</sup> <a name="default_connection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultConnection"></a>

```python
default_connection: LabServicePlanDefaultConnection
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a>

default_connection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#default_connection LabServicePlan#default_connection}

---

##### `default_network_subnet_id`<sup>Optional</sup> <a name="default_network_subnet_id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultNetworkSubnetId"></a>

```python
default_network_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#default_network_subnet_id LabServicePlan#default_network_subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#id LabServicePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shared_gallery_id`<sup>Optional</sup> <a name="shared_gallery_id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.sharedGalleryId"></a>

```python
shared_gallery_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#shared_gallery_id LabServicePlan#shared_gallery_id}.

---

##### `support`<sup>Optional</sup> <a name="support" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.support"></a>

```python
support: LabServicePlanSupport
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a>

support block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#support LabServicePlan#support}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#tags LabServicePlan#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.timeouts"></a>

```python
timeouts: LabServicePlanTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#timeouts LabServicePlan#timeouts}

---

### LabServicePlanDefaultAutoShutdown <a name="LabServicePlanDefaultAutoShutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_plan

labServicePlan.LabServicePlanDefaultAutoShutdown(
  disconnect_delay: str = None,
  idle_delay: str = None,
  no_connect_delay: str = None,
  shutdown_on_idle: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.disconnectDelay">disconnect_delay</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#disconnect_delay LabServicePlan#disconnect_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.idleDelay">idle_delay</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#idle_delay LabServicePlan#idle_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.noConnectDelay">no_connect_delay</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#no_connect_delay LabServicePlan#no_connect_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.shutdownOnIdle">shutdown_on_idle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#shutdown_on_idle LabServicePlan#shutdown_on_idle}. |

---

##### `disconnect_delay`<sup>Optional</sup> <a name="disconnect_delay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.disconnectDelay"></a>

```python
disconnect_delay: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#disconnect_delay LabServicePlan#disconnect_delay}.

---

##### `idle_delay`<sup>Optional</sup> <a name="idle_delay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.idleDelay"></a>

```python
idle_delay: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#idle_delay LabServicePlan#idle_delay}.

---

##### `no_connect_delay`<sup>Optional</sup> <a name="no_connect_delay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.noConnectDelay"></a>

```python
no_connect_delay: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#no_connect_delay LabServicePlan#no_connect_delay}.

---

##### `shutdown_on_idle`<sup>Optional</sup> <a name="shutdown_on_idle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.shutdownOnIdle"></a>

```python
shutdown_on_idle: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#shutdown_on_idle LabServicePlan#shutdown_on_idle}.

---

### LabServicePlanDefaultConnection <a name="LabServicePlanDefaultConnection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_plan

labServicePlan.LabServicePlanDefaultConnection(
  client_rdp_access: str = None,
  client_ssh_access: str = None,
  web_rdp_access: str = None,
  web_ssh_access: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.clientRdpAccess">client_rdp_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#client_rdp_access LabServicePlan#client_rdp_access}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.clientSshAccess">client_ssh_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#client_ssh_access LabServicePlan#client_ssh_access}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.webRdpAccess">web_rdp_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#web_rdp_access LabServicePlan#web_rdp_access}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.webSshAccess">web_ssh_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#web_ssh_access LabServicePlan#web_ssh_access}. |

---

##### `client_rdp_access`<sup>Optional</sup> <a name="client_rdp_access" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.clientRdpAccess"></a>

```python
client_rdp_access: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#client_rdp_access LabServicePlan#client_rdp_access}.

---

##### `client_ssh_access`<sup>Optional</sup> <a name="client_ssh_access" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.clientSshAccess"></a>

```python
client_ssh_access: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#client_ssh_access LabServicePlan#client_ssh_access}.

---

##### `web_rdp_access`<sup>Optional</sup> <a name="web_rdp_access" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.webRdpAccess"></a>

```python
web_rdp_access: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#web_rdp_access LabServicePlan#web_rdp_access}.

---

##### `web_ssh_access`<sup>Optional</sup> <a name="web_ssh_access" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.webSshAccess"></a>

```python
web_ssh_access: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#web_ssh_access LabServicePlan#web_ssh_access}.

---

### LabServicePlanSupport <a name="LabServicePlanSupport" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_plan

labServicePlan.LabServicePlanSupport(
  email: str = None,
  instructions: str = None,
  phone: str = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#email LabServicePlan#email}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.instructions">instructions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#instructions LabServicePlan#instructions}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.phone">phone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#phone LabServicePlan#phone}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#url LabServicePlan#url}. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#email LabServicePlan#email}.

---

##### `instructions`<sup>Optional</sup> <a name="instructions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.instructions"></a>

```python
instructions: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#instructions LabServicePlan#instructions}.

---

##### `phone`<sup>Optional</sup> <a name="phone" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.phone"></a>

```python
phone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#phone LabServicePlan#phone}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#url LabServicePlan#url}.

---

### LabServicePlanTimeouts <a name="LabServicePlanTimeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_plan

labServicePlan.LabServicePlanTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#create LabServicePlan#create}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#delete LabServicePlan#delete}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#read LabServicePlan#read}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#update LabServicePlan#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#create LabServicePlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#delete LabServicePlan#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#read LabServicePlan#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/lab_service_plan#update LabServicePlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LabServicePlanDefaultAutoShutdownOutputReference <a name="LabServicePlanDefaultAutoShutdownOutputReference" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_plan

labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetDisconnectDelay">reset_disconnect_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetIdleDelay">reset_idle_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetNoConnectDelay">reset_no_connect_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetShutdownOnIdle">reset_shutdown_on_idle</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disconnect_delay` <a name="reset_disconnect_delay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetDisconnectDelay"></a>

```python
def reset_disconnect_delay() -> None
```

##### `reset_idle_delay` <a name="reset_idle_delay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetIdleDelay"></a>

```python
def reset_idle_delay() -> None
```

##### `reset_no_connect_delay` <a name="reset_no_connect_delay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetNoConnectDelay"></a>

```python
def reset_no_connect_delay() -> None
```

##### `reset_shutdown_on_idle` <a name="reset_shutdown_on_idle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetShutdownOnIdle"></a>

```python
def reset_shutdown_on_idle() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.disconnectDelayInput">disconnect_delay_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.idleDelayInput">idle_delay_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.noConnectDelayInput">no_connect_delay_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.shutdownOnIdleInput">shutdown_on_idle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.disconnectDelay">disconnect_delay</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.idleDelay">idle_delay</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.noConnectDelay">no_connect_delay</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.shutdownOnIdle">shutdown_on_idle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disconnect_delay_input`<sup>Optional</sup> <a name="disconnect_delay_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.disconnectDelayInput"></a>

```python
disconnect_delay_input: str
```

- *Type:* str

---

##### `idle_delay_input`<sup>Optional</sup> <a name="idle_delay_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.idleDelayInput"></a>

```python
idle_delay_input: str
```

- *Type:* str

---

##### `no_connect_delay_input`<sup>Optional</sup> <a name="no_connect_delay_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.noConnectDelayInput"></a>

```python
no_connect_delay_input: str
```

- *Type:* str

---

##### `shutdown_on_idle_input`<sup>Optional</sup> <a name="shutdown_on_idle_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.shutdownOnIdleInput"></a>

```python
shutdown_on_idle_input: str
```

- *Type:* str

---

##### `disconnect_delay`<sup>Required</sup> <a name="disconnect_delay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.disconnectDelay"></a>

```python
disconnect_delay: str
```

- *Type:* str

---

##### `idle_delay`<sup>Required</sup> <a name="idle_delay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.idleDelay"></a>

```python
idle_delay: str
```

- *Type:* str

---

##### `no_connect_delay`<sup>Required</sup> <a name="no_connect_delay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.noConnectDelay"></a>

```python
no_connect_delay: str
```

- *Type:* str

---

##### `shutdown_on_idle`<sup>Required</sup> <a name="shutdown_on_idle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.shutdownOnIdle"></a>

```python
shutdown_on_idle: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.internalValue"></a>

```python
internal_value: LabServicePlanDefaultAutoShutdown
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a>

---


### LabServicePlanDefaultConnectionOutputReference <a name="LabServicePlanDefaultConnectionOutputReference" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_plan

labServicePlan.LabServicePlanDefaultConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetClientRdpAccess">reset_client_rdp_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetClientSshAccess">reset_client_ssh_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetWebRdpAccess">reset_web_rdp_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetWebSshAccess">reset_web_ssh_access</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_rdp_access` <a name="reset_client_rdp_access" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetClientRdpAccess"></a>

```python
def reset_client_rdp_access() -> None
```

##### `reset_client_ssh_access` <a name="reset_client_ssh_access" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetClientSshAccess"></a>

```python
def reset_client_ssh_access() -> None
```

##### `reset_web_rdp_access` <a name="reset_web_rdp_access" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetWebRdpAccess"></a>

```python
def reset_web_rdp_access() -> None
```

##### `reset_web_ssh_access` <a name="reset_web_ssh_access" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetWebSshAccess"></a>

```python
def reset_web_ssh_access() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientRdpAccessInput">client_rdp_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientSshAccessInput">client_ssh_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webRdpAccessInput">web_rdp_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webSshAccessInput">web_ssh_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientRdpAccess">client_rdp_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientSshAccess">client_ssh_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webRdpAccess">web_rdp_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webSshAccess">web_ssh_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_rdp_access_input`<sup>Optional</sup> <a name="client_rdp_access_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientRdpAccessInput"></a>

```python
client_rdp_access_input: str
```

- *Type:* str

---

##### `client_ssh_access_input`<sup>Optional</sup> <a name="client_ssh_access_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientSshAccessInput"></a>

```python
client_ssh_access_input: str
```

- *Type:* str

---

##### `web_rdp_access_input`<sup>Optional</sup> <a name="web_rdp_access_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webRdpAccessInput"></a>

```python
web_rdp_access_input: str
```

- *Type:* str

---

##### `web_ssh_access_input`<sup>Optional</sup> <a name="web_ssh_access_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webSshAccessInput"></a>

```python
web_ssh_access_input: str
```

- *Type:* str

---

##### `client_rdp_access`<sup>Required</sup> <a name="client_rdp_access" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientRdpAccess"></a>

```python
client_rdp_access: str
```

- *Type:* str

---

##### `client_ssh_access`<sup>Required</sup> <a name="client_ssh_access" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientSshAccess"></a>

```python
client_ssh_access: str
```

- *Type:* str

---

##### `web_rdp_access`<sup>Required</sup> <a name="web_rdp_access" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webRdpAccess"></a>

```python
web_rdp_access: str
```

- *Type:* str

---

##### `web_ssh_access`<sup>Required</sup> <a name="web_ssh_access" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webSshAccess"></a>

```python
web_ssh_access: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.internalValue"></a>

```python
internal_value: LabServicePlanDefaultConnection
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a>

---


### LabServicePlanSupportOutputReference <a name="LabServicePlanSupportOutputReference" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_plan

labServicePlan.LabServicePlanSupportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetInstructions">reset_instructions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetPhone">reset_phone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email` <a name="reset_email" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_instructions` <a name="reset_instructions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetInstructions"></a>

```python
def reset_instructions() -> None
```

##### `reset_phone` <a name="reset_phone" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetPhone"></a>

```python
def reset_phone() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.instructionsInput">instructions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.phoneInput">phone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.instructions">instructions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.phone">phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `instructions_input`<sup>Optional</sup> <a name="instructions_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.instructionsInput"></a>

```python
instructions_input: str
```

- *Type:* str

---

##### `phone_input`<sup>Optional</sup> <a name="phone_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.phoneInput"></a>

```python
phone_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.instructions"></a>

```python
instructions: str
```

- *Type:* str

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.phone"></a>

```python
phone: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.internalValue"></a>

```python
internal_value: LabServicePlanSupport
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a>

---


### LabServicePlanTimeoutsOutputReference <a name="LabServicePlanTimeoutsOutputReference" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_plan

labServicePlan.LabServicePlanTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LabServicePlanTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a>]

---



