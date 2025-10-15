# `containerRegistryAgentPool` Submodule <a name="`containerRegistryAgentPool` Submodule" id="@cdktf/provider-azurerm.containerRegistryAgentPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistryAgentPool <a name="ContainerRegistryAgentPool" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool azurerm_container_registry_agent_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_agent_pool

containerRegistryAgentPool.ContainerRegistryAgentPool(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  container_registry_name: str,
  location: str,
  name: str,
  resource_group_name: str,
  id: str = None,
  instance_count: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tier: str = None,
  timeouts: ContainerRegistryAgentPoolTimeouts = None,
  virtual_network_subnet_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.containerRegistryName">container_registry_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#container_registry_name ContainerRegistryAgentPool#container_registry_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#location ContainerRegistryAgentPool#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#name ContainerRegistryAgentPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#resource_group_name ContainerRegistryAgentPool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#id ContainerRegistryAgentPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#instance_count ContainerRegistryAgentPool#instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#tags ContainerRegistryAgentPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.tier">tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#tier ContainerRegistryAgentPool#tier}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts">ContainerRegistryAgentPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#virtual_network_subnet_id ContainerRegistryAgentPool#virtual_network_subnet_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `container_registry_name`<sup>Required</sup> <a name="container_registry_name" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.containerRegistryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#container_registry_name ContainerRegistryAgentPool#container_registry_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#location ContainerRegistryAgentPool#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#name ContainerRegistryAgentPool#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#resource_group_name ContainerRegistryAgentPool#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#id ContainerRegistryAgentPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#instance_count ContainerRegistryAgentPool#instance_count}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#tags ContainerRegistryAgentPool#tags}.

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.tier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#tier ContainerRegistryAgentPool#tier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts">ContainerRegistryAgentPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#timeouts ContainerRegistryAgentPool#timeouts}

---

##### `virtual_network_subnet_id`<sup>Optional</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.virtualNetworkSubnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#virtual_network_subnet_id ContainerRegistryAgentPool#virtual_network_subnet_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetInstanceCount">reset_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetTier">reset_tier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetVirtualNetworkSubnetId">reset_virtual_network_subnet_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#create ContainerRegistryAgentPool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#delete ContainerRegistryAgentPool#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#read ContainerRegistryAgentPool#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#update ContainerRegistryAgentPool#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_count` <a name="reset_instance_count" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetInstanceCount"></a>

```python
def reset_instance_count() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tier` <a name="reset_tier" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetTier"></a>

```python
def reset_tier() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_virtual_network_subnet_id` <a name="reset_virtual_network_subnet_id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetVirtualNetworkSubnetId"></a>

```python
def reset_virtual_network_subnet_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ContainerRegistryAgentPool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_agent_pool

containerRegistryAgentPool.ContainerRegistryAgentPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_agent_pool

containerRegistryAgentPool.ContainerRegistryAgentPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_agent_pool

containerRegistryAgentPool.ContainerRegistryAgentPool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_agent_pool

containerRegistryAgentPool.ContainerRegistryAgentPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ContainerRegistryAgentPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContainerRegistryAgentPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContainerRegistryAgentPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerRegistryAgentPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference">ContainerRegistryAgentPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.containerRegistryNameInput">container_registry_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.tierInput">tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts">ContainerRegistryAgentPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.virtualNetworkSubnetIdInput">virtual_network_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.containerRegistryName">container_registry_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.tier">tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.timeouts"></a>

```python
timeouts: ContainerRegistryAgentPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference">ContainerRegistryAgentPoolTimeoutsOutputReference</a>

---

##### `container_registry_name_input`<sup>Optional</sup> <a name="container_registry_name_input" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.containerRegistryNameInput"></a>

```python
container_registry_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tier_input`<sup>Optional</sup> <a name="tier_input" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.tierInput"></a>

```python
tier_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ContainerRegistryAgentPoolTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts">ContainerRegistryAgentPoolTimeouts</a>

---

##### `virtual_network_subnet_id_input`<sup>Optional</sup> <a name="virtual_network_subnet_id_input" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.virtualNetworkSubnetIdInput"></a>

```python
virtual_network_subnet_id_input: str
```

- *Type:* str

---

##### `container_registry_name`<sup>Required</sup> <a name="container_registry_name" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.containerRegistryName"></a>

```python
container_registry_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

##### `virtual_network_subnet_id`<sup>Required</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryAgentPoolConfig <a name="ContainerRegistryAgentPoolConfig" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_agent_pool

containerRegistryAgentPool.ContainerRegistryAgentPoolConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  container_registry_name: str,
  location: str,
  name: str,
  resource_group_name: str,
  id: str = None,
  instance_count: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tier: str = None,
  timeouts: ContainerRegistryAgentPoolTimeouts = None,
  virtual_network_subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.containerRegistryName">container_registry_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#container_registry_name ContainerRegistryAgentPool#container_registry_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#location ContainerRegistryAgentPool#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#name ContainerRegistryAgentPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#resource_group_name ContainerRegistryAgentPool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#id ContainerRegistryAgentPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#instance_count ContainerRegistryAgentPool#instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#tags ContainerRegistryAgentPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.tier">tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#tier ContainerRegistryAgentPool#tier}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts">ContainerRegistryAgentPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#virtual_network_subnet_id ContainerRegistryAgentPool#virtual_network_subnet_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `container_registry_name`<sup>Required</sup> <a name="container_registry_name" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.containerRegistryName"></a>

```python
container_registry_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#container_registry_name ContainerRegistryAgentPool#container_registry_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#location ContainerRegistryAgentPool#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#name ContainerRegistryAgentPool#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#resource_group_name ContainerRegistryAgentPool#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#id ContainerRegistryAgentPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#instance_count ContainerRegistryAgentPool#instance_count}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#tags ContainerRegistryAgentPool#tags}.

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.tier"></a>

```python
tier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#tier ContainerRegistryAgentPool#tier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.timeouts"></a>

```python
timeouts: ContainerRegistryAgentPoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts">ContainerRegistryAgentPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#timeouts ContainerRegistryAgentPool#timeouts}

---

##### `virtual_network_subnet_id`<sup>Optional</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#virtual_network_subnet_id ContainerRegistryAgentPool#virtual_network_subnet_id}.

---

### ContainerRegistryAgentPoolTimeouts <a name="ContainerRegistryAgentPoolTimeouts" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_agent_pool

containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#create ContainerRegistryAgentPool#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#delete ContainerRegistryAgentPool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#read ContainerRegistryAgentPool#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#update ContainerRegistryAgentPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#create ContainerRegistryAgentPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#delete ContainerRegistryAgentPool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#read ContainerRegistryAgentPool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_registry_agent_pool#update ContainerRegistryAgentPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerRegistryAgentPoolTimeoutsOutputReference <a name="ContainerRegistryAgentPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_agent_pool

containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts">ContainerRegistryAgentPoolTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ContainerRegistryAgentPoolTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts">ContainerRegistryAgentPoolTimeouts</a>

---



