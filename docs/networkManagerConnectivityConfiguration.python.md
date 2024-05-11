# `networkManagerConnectivityConfiguration` Submodule <a name="`networkManagerConnectivityConfiguration` Submodule" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagerConnectivityConfiguration <a name="NetworkManagerConnectivityConfiguration" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration azurerm_network_manager_connectivity_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_manager_connectivity_configuration

networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  applies_to_group: typing.Union[IResolvable, typing.List[NetworkManagerConnectivityConfigurationAppliesToGroup]],
  connectivity_topology: str,
  name: str,
  network_manager_id: str,
  delete_existing_peering_enabled: typing.Union[bool, IResolvable] = None,
  description: str = None,
  global_mesh_enabled: typing.Union[bool, IResolvable] = None,
  hub: NetworkManagerConnectivityConfigurationHub = None,
  id: str = None,
  timeouts: NetworkManagerConnectivityConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.appliesToGroup">applies_to_group</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup">NetworkManagerConnectivityConfigurationAppliesToGroup</a>]]</code> | applies_to_group block. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.connectivityTopology">connectivity_topology</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#connectivity_topology NetworkManagerConnectivityConfiguration#connectivity_topology}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#name NetworkManagerConnectivityConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.networkManagerId">network_manager_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#network_manager_id NetworkManagerConnectivityConfiguration#network_manager_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.deleteExistingPeeringEnabled">delete_existing_peering_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#delete_existing_peering_enabled NetworkManagerConnectivityConfiguration#delete_existing_peering_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#description NetworkManagerConnectivityConfiguration#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.globalMeshEnabled">global_mesh_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#global_mesh_enabled NetworkManagerConnectivityConfiguration#global_mesh_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.hub">hub</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a></code> | hub block. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#id NetworkManagerConnectivityConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts">NetworkManagerConnectivityConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `applies_to_group`<sup>Required</sup> <a name="applies_to_group" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.appliesToGroup"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup">NetworkManagerConnectivityConfigurationAppliesToGroup</a>]]

applies_to_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#applies_to_group NetworkManagerConnectivityConfiguration#applies_to_group}

---

##### `connectivity_topology`<sup>Required</sup> <a name="connectivity_topology" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.connectivityTopology"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#connectivity_topology NetworkManagerConnectivityConfiguration#connectivity_topology}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#name NetworkManagerConnectivityConfiguration#name}.

---

##### `network_manager_id`<sup>Required</sup> <a name="network_manager_id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.networkManagerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#network_manager_id NetworkManagerConnectivityConfiguration#network_manager_id}.

---

##### `delete_existing_peering_enabled`<sup>Optional</sup> <a name="delete_existing_peering_enabled" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.deleteExistingPeeringEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#delete_existing_peering_enabled NetworkManagerConnectivityConfiguration#delete_existing_peering_enabled}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#description NetworkManagerConnectivityConfiguration#description}.

---

##### `global_mesh_enabled`<sup>Optional</sup> <a name="global_mesh_enabled" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.globalMeshEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#global_mesh_enabled NetworkManagerConnectivityConfiguration#global_mesh_enabled}.

---

##### `hub`<sup>Optional</sup> <a name="hub" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.hub"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a>

hub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#hub NetworkManagerConnectivityConfiguration#hub}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#id NetworkManagerConnectivityConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts">NetworkManagerConnectivityConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#timeouts NetworkManagerConnectivityConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putAppliesToGroup">put_applies_to_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putHub">put_hub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetDeleteExistingPeeringEnabled">reset_delete_existing_peering_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetGlobalMeshEnabled">reset_global_mesh_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetHub">reset_hub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_applies_to_group` <a name="put_applies_to_group" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putAppliesToGroup"></a>

```python
def put_applies_to_group(
  value: typing.Union[IResolvable, typing.List[NetworkManagerConnectivityConfigurationAppliesToGroup]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putAppliesToGroup.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup">NetworkManagerConnectivityConfigurationAppliesToGroup</a>]]

---

##### `put_hub` <a name="put_hub" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putHub"></a>

```python
def put_hub(
  resource_id: str,
  resource_type: str
) -> None
```

###### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putHub.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#resource_id NetworkManagerConnectivityConfiguration#resource_id}.

---

###### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putHub.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#resource_type NetworkManagerConnectivityConfiguration#resource_type}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#create NetworkManagerConnectivityConfiguration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#delete NetworkManagerConnectivityConfiguration#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#read NetworkManagerConnectivityConfiguration#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#update NetworkManagerConnectivityConfiguration#update}.

---

##### `reset_delete_existing_peering_enabled` <a name="reset_delete_existing_peering_enabled" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetDeleteExistingPeeringEnabled"></a>

```python
def reset_delete_existing_peering_enabled() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_global_mesh_enabled` <a name="reset_global_mesh_enabled" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetGlobalMeshEnabled"></a>

```python
def reset_global_mesh_enabled() -> None
```

##### `reset_hub` <a name="reset_hub" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetHub"></a>

```python
def reset_hub() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkManagerConnectivityConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import network_manager_connectivity_configuration

networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import network_manager_connectivity_configuration

networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import network_manager_connectivity_configuration

networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import network_manager_connectivity_configuration

networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkManagerConnectivityConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkManagerConnectivityConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkManagerConnectivityConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkManagerConnectivityConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.appliesToGroup">applies_to_group</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList">NetworkManagerConnectivityConfigurationAppliesToGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.hub">hub</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference">NetworkManagerConnectivityConfigurationHubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference">NetworkManagerConnectivityConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.appliesToGroupInput">applies_to_group_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup">NetworkManagerConnectivityConfigurationAppliesToGroup</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connectivityTopologyInput">connectivity_topology_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.deleteExistingPeeringEnabledInput">delete_existing_peering_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.globalMeshEnabledInput">global_mesh_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.hubInput">hub_input</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.networkManagerIdInput">network_manager_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts">NetworkManagerConnectivityConfigurationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connectivityTopology">connectivity_topology</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.deleteExistingPeeringEnabled">delete_existing_peering_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.globalMeshEnabled">global_mesh_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.networkManagerId">network_manager_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `applies_to_group`<sup>Required</sup> <a name="applies_to_group" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.appliesToGroup"></a>

```python
applies_to_group: NetworkManagerConnectivityConfigurationAppliesToGroupList
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList">NetworkManagerConnectivityConfigurationAppliesToGroupList</a>

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.hub"></a>

```python
hub: NetworkManagerConnectivityConfigurationHubOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference">NetworkManagerConnectivityConfigurationHubOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.timeouts"></a>

```python
timeouts: NetworkManagerConnectivityConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference">NetworkManagerConnectivityConfigurationTimeoutsOutputReference</a>

---

##### `applies_to_group_input`<sup>Optional</sup> <a name="applies_to_group_input" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.appliesToGroupInput"></a>

```python
applies_to_group_input: typing.Union[IResolvable, typing.List[NetworkManagerConnectivityConfigurationAppliesToGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup">NetworkManagerConnectivityConfigurationAppliesToGroup</a>]]

---

##### `connectivity_topology_input`<sup>Optional</sup> <a name="connectivity_topology_input" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connectivityTopologyInput"></a>

```python
connectivity_topology_input: str
```

- *Type:* str

---

##### `delete_existing_peering_enabled_input`<sup>Optional</sup> <a name="delete_existing_peering_enabled_input" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.deleteExistingPeeringEnabledInput"></a>

```python
delete_existing_peering_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `global_mesh_enabled_input`<sup>Optional</sup> <a name="global_mesh_enabled_input" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.globalMeshEnabledInput"></a>

```python
global_mesh_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hub_input`<sup>Optional</sup> <a name="hub_input" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.hubInput"></a>

```python
hub_input: NetworkManagerConnectivityConfigurationHub
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_manager_id_input`<sup>Optional</sup> <a name="network_manager_id_input" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.networkManagerIdInput"></a>

```python
network_manager_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkManagerConnectivityConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts">NetworkManagerConnectivityConfigurationTimeouts</a>]

---

##### `connectivity_topology`<sup>Required</sup> <a name="connectivity_topology" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connectivityTopology"></a>

```python
connectivity_topology: str
```

- *Type:* str

---

##### `delete_existing_peering_enabled`<sup>Required</sup> <a name="delete_existing_peering_enabled" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.deleteExistingPeeringEnabled"></a>

```python
delete_existing_peering_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `global_mesh_enabled`<sup>Required</sup> <a name="global_mesh_enabled" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.globalMeshEnabled"></a>

```python
global_mesh_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_manager_id`<sup>Required</sup> <a name="network_manager_id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.networkManagerId"></a>

```python
network_manager_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagerConnectivityConfigurationAppliesToGroup <a name="NetworkManagerConnectivityConfigurationAppliesToGroup" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_manager_connectivity_configuration

networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup(
  group_connectivity: str,
  network_group_id: str,
  global_mesh_enabled: typing.Union[bool, IResolvable] = None,
  use_hub_gateway: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.groupConnectivity">group_connectivity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#group_connectivity NetworkManagerConnectivityConfiguration#group_connectivity}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.networkGroupId">network_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#network_group_id NetworkManagerConnectivityConfiguration#network_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.globalMeshEnabled">global_mesh_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#global_mesh_enabled NetworkManagerConnectivityConfiguration#global_mesh_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.useHubGateway">use_hub_gateway</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#use_hub_gateway NetworkManagerConnectivityConfiguration#use_hub_gateway}. |

---

##### `group_connectivity`<sup>Required</sup> <a name="group_connectivity" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.groupConnectivity"></a>

```python
group_connectivity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#group_connectivity NetworkManagerConnectivityConfiguration#group_connectivity}.

---

##### `network_group_id`<sup>Required</sup> <a name="network_group_id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.networkGroupId"></a>

```python
network_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#network_group_id NetworkManagerConnectivityConfiguration#network_group_id}.

---

##### `global_mesh_enabled`<sup>Optional</sup> <a name="global_mesh_enabled" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.globalMeshEnabled"></a>

```python
global_mesh_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#global_mesh_enabled NetworkManagerConnectivityConfiguration#global_mesh_enabled}.

---

##### `use_hub_gateway`<sup>Optional</sup> <a name="use_hub_gateway" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.useHubGateway"></a>

```python
use_hub_gateway: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#use_hub_gateway NetworkManagerConnectivityConfiguration#use_hub_gateway}.

---

### NetworkManagerConnectivityConfigurationConfig <a name="NetworkManagerConnectivityConfigurationConfig" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_manager_connectivity_configuration

networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  applies_to_group: typing.Union[IResolvable, typing.List[NetworkManagerConnectivityConfigurationAppliesToGroup]],
  connectivity_topology: str,
  name: str,
  network_manager_id: str,
  delete_existing_peering_enabled: typing.Union[bool, IResolvable] = None,
  description: str = None,
  global_mesh_enabled: typing.Union[bool, IResolvable] = None,
  hub: NetworkManagerConnectivityConfigurationHub = None,
  id: str = None,
  timeouts: NetworkManagerConnectivityConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.appliesToGroup">applies_to_group</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup">NetworkManagerConnectivityConfigurationAppliesToGroup</a>]]</code> | applies_to_group block. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.connectivityTopology">connectivity_topology</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#connectivity_topology NetworkManagerConnectivityConfiguration#connectivity_topology}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#name NetworkManagerConnectivityConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.networkManagerId">network_manager_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#network_manager_id NetworkManagerConnectivityConfiguration#network_manager_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.deleteExistingPeeringEnabled">delete_existing_peering_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#delete_existing_peering_enabled NetworkManagerConnectivityConfiguration#delete_existing_peering_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#description NetworkManagerConnectivityConfiguration#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.globalMeshEnabled">global_mesh_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#global_mesh_enabled NetworkManagerConnectivityConfiguration#global_mesh_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.hub">hub</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a></code> | hub block. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#id NetworkManagerConnectivityConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts">NetworkManagerConnectivityConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `applies_to_group`<sup>Required</sup> <a name="applies_to_group" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.appliesToGroup"></a>

```python
applies_to_group: typing.Union[IResolvable, typing.List[NetworkManagerConnectivityConfigurationAppliesToGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup">NetworkManagerConnectivityConfigurationAppliesToGroup</a>]]

applies_to_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#applies_to_group NetworkManagerConnectivityConfiguration#applies_to_group}

---

##### `connectivity_topology`<sup>Required</sup> <a name="connectivity_topology" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.connectivityTopology"></a>

```python
connectivity_topology: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#connectivity_topology NetworkManagerConnectivityConfiguration#connectivity_topology}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#name NetworkManagerConnectivityConfiguration#name}.

---

##### `network_manager_id`<sup>Required</sup> <a name="network_manager_id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.networkManagerId"></a>

```python
network_manager_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#network_manager_id NetworkManagerConnectivityConfiguration#network_manager_id}.

---

##### `delete_existing_peering_enabled`<sup>Optional</sup> <a name="delete_existing_peering_enabled" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.deleteExistingPeeringEnabled"></a>

```python
delete_existing_peering_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#delete_existing_peering_enabled NetworkManagerConnectivityConfiguration#delete_existing_peering_enabled}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#description NetworkManagerConnectivityConfiguration#description}.

---

##### `global_mesh_enabled`<sup>Optional</sup> <a name="global_mesh_enabled" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.globalMeshEnabled"></a>

```python
global_mesh_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#global_mesh_enabled NetworkManagerConnectivityConfiguration#global_mesh_enabled}.

---

##### `hub`<sup>Optional</sup> <a name="hub" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.hub"></a>

```python
hub: NetworkManagerConnectivityConfigurationHub
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a>

hub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#hub NetworkManagerConnectivityConfiguration#hub}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#id NetworkManagerConnectivityConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.timeouts"></a>

```python
timeouts: NetworkManagerConnectivityConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts">NetworkManagerConnectivityConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#timeouts NetworkManagerConnectivityConfiguration#timeouts}

---

### NetworkManagerConnectivityConfigurationHub <a name="NetworkManagerConnectivityConfigurationHub" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_manager_connectivity_configuration

networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub(
  resource_id: str,
  resource_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#resource_id NetworkManagerConnectivityConfiguration#resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#resource_type NetworkManagerConnectivityConfiguration#resource_type}. |

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#resource_id NetworkManagerConnectivityConfiguration#resource_id}.

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#resource_type NetworkManagerConnectivityConfiguration#resource_type}.

---

### NetworkManagerConnectivityConfigurationTimeouts <a name="NetworkManagerConnectivityConfigurationTimeouts" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_manager_connectivity_configuration

networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#create NetworkManagerConnectivityConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#delete NetworkManagerConnectivityConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#read NetworkManagerConnectivityConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#update NetworkManagerConnectivityConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#create NetworkManagerConnectivityConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#delete NetworkManagerConnectivityConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#read NetworkManagerConnectivityConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/network_manager_connectivity_configuration#update NetworkManagerConnectivityConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagerConnectivityConfigurationAppliesToGroupList <a name="NetworkManagerConnectivityConfigurationAppliesToGroupList" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_manager_connectivity_configuration

networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup">NetworkManagerConnectivityConfigurationAppliesToGroup</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkManagerConnectivityConfigurationAppliesToGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup">NetworkManagerConnectivityConfigurationAppliesToGroup</a>]]

---


### NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference <a name="NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_manager_connectivity_configuration

networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resetGlobalMeshEnabled">reset_global_mesh_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resetUseHubGateway">reset_use_hub_gateway</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_global_mesh_enabled` <a name="reset_global_mesh_enabled" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resetGlobalMeshEnabled"></a>

```python
def reset_global_mesh_enabled() -> None
```

##### `reset_use_hub_gateway` <a name="reset_use_hub_gateway" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resetUseHubGateway"></a>

```python
def reset_use_hub_gateway() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.globalMeshEnabledInput">global_mesh_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.groupConnectivityInput">group_connectivity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.networkGroupIdInput">network_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.useHubGatewayInput">use_hub_gateway_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.globalMeshEnabled">global_mesh_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.groupConnectivity">group_connectivity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.networkGroupId">network_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.useHubGateway">use_hub_gateway</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup">NetworkManagerConnectivityConfigurationAppliesToGroup</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `global_mesh_enabled_input`<sup>Optional</sup> <a name="global_mesh_enabled_input" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.globalMeshEnabledInput"></a>

```python
global_mesh_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_connectivity_input`<sup>Optional</sup> <a name="group_connectivity_input" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.groupConnectivityInput"></a>

```python
group_connectivity_input: str
```

- *Type:* str

---

##### `network_group_id_input`<sup>Optional</sup> <a name="network_group_id_input" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.networkGroupIdInput"></a>

```python
network_group_id_input: str
```

- *Type:* str

---

##### `use_hub_gateway_input`<sup>Optional</sup> <a name="use_hub_gateway_input" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.useHubGatewayInput"></a>

```python
use_hub_gateway_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `global_mesh_enabled`<sup>Required</sup> <a name="global_mesh_enabled" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.globalMeshEnabled"></a>

```python
global_mesh_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_connectivity`<sup>Required</sup> <a name="group_connectivity" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.groupConnectivity"></a>

```python
group_connectivity: str
```

- *Type:* str

---

##### `network_group_id`<sup>Required</sup> <a name="network_group_id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.networkGroupId"></a>

```python
network_group_id: str
```

- *Type:* str

---

##### `use_hub_gateway`<sup>Required</sup> <a name="use_hub_gateway" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.useHubGateway"></a>

```python
use_hub_gateway: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkManagerConnectivityConfigurationAppliesToGroup]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup">NetworkManagerConnectivityConfigurationAppliesToGroup</a>]

---


### NetworkManagerConnectivityConfigurationHubOutputReference <a name="NetworkManagerConnectivityConfigurationHubOutputReference" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_manager_connectivity_configuration

networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.internalValue"></a>

```python
internal_value: NetworkManagerConnectivityConfigurationHub
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a>

---


### NetworkManagerConnectivityConfigurationTimeoutsOutputReference <a name="NetworkManagerConnectivityConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_manager_connectivity_configuration

networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts">NetworkManagerConnectivityConfigurationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkManagerConnectivityConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts">NetworkManagerConnectivityConfigurationTimeouts</a>]

---



