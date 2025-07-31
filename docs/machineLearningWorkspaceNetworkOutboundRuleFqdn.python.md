# `machineLearningWorkspaceNetworkOutboundRuleFqdn` Submodule <a name="`machineLearningWorkspaceNetworkOutboundRuleFqdn` Submodule" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningWorkspaceNetworkOutboundRuleFqdn <a name="MachineLearningWorkspaceNetworkOutboundRuleFqdn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn azurerm_machine_learning_workspace_network_outbound_rule_fqdn}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_workspace_network_outbound_rule_fqdn

machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_fqdn: str,
  name: str,
  workspace_id: str,
  id: str = None,
  timeouts: MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.destinationFqdn">destination_fqdn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#destination_fqdn MachineLearningWorkspaceNetworkOutboundRuleFqdn#destination_fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#name MachineLearningWorkspaceNetworkOutboundRuleFqdn#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#workspace_id MachineLearningWorkspaceNetworkOutboundRuleFqdn#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#id MachineLearningWorkspaceNetworkOutboundRuleFqdn#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_fqdn`<sup>Required</sup> <a name="destination_fqdn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.destinationFqdn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#destination_fqdn MachineLearningWorkspaceNetworkOutboundRuleFqdn#destination_fqdn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#name MachineLearningWorkspaceNetworkOutboundRuleFqdn#name}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#workspace_id MachineLearningWorkspaceNetworkOutboundRuleFqdn#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#id MachineLearningWorkspaceNetworkOutboundRuleFqdn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#timeouts MachineLearningWorkspaceNetworkOutboundRuleFqdn#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#create MachineLearningWorkspaceNetworkOutboundRuleFqdn#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#delete MachineLearningWorkspaceNetworkOutboundRuleFqdn#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#read MachineLearningWorkspaceNetworkOutboundRuleFqdn#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#update MachineLearningWorkspaceNetworkOutboundRuleFqdn#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MachineLearningWorkspaceNetworkOutboundRuleFqdn resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_workspace_network_outbound_rule_fqdn

machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_workspace_network_outbound_rule_fqdn

machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_workspace_network_outbound_rule_fqdn

machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_workspace_network_outbound_rule_fqdn

machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MachineLearningWorkspaceNetworkOutboundRuleFqdn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MachineLearningWorkspaceNetworkOutboundRuleFqdn to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MachineLearningWorkspaceNetworkOutboundRuleFqdn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MachineLearningWorkspaceNetworkOutboundRuleFqdn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.destinationFqdnInput">destination_fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.destinationFqdn">destination_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.timeouts"></a>

```python
timeouts: MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference</a>

---

##### `destination_fqdn_input`<sup>Optional</sup> <a name="destination_fqdn_input" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.destinationFqdnInput"></a>

```python
destination_fqdn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts</a>]

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `destination_fqdn`<sup>Required</sup> <a name="destination_fqdn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.destinationFqdn"></a>

```python
destination_fqdn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig <a name="MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_workspace_network_outbound_rule_fqdn

machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_fqdn: str,
  name: str,
  workspace_id: str,
  id: str = None,
  timeouts: MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.destinationFqdn">destination_fqdn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#destination_fqdn MachineLearningWorkspaceNetworkOutboundRuleFqdn#destination_fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#name MachineLearningWorkspaceNetworkOutboundRuleFqdn#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#workspace_id MachineLearningWorkspaceNetworkOutboundRuleFqdn#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#id MachineLearningWorkspaceNetworkOutboundRuleFqdn#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_fqdn`<sup>Required</sup> <a name="destination_fqdn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.destinationFqdn"></a>

```python
destination_fqdn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#destination_fqdn MachineLearningWorkspaceNetworkOutboundRuleFqdn#destination_fqdn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#name MachineLearningWorkspaceNetworkOutboundRuleFqdn#name}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#workspace_id MachineLearningWorkspaceNetworkOutboundRuleFqdn#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#id MachineLearningWorkspaceNetworkOutboundRuleFqdn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.timeouts"></a>

```python
timeouts: MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#timeouts MachineLearningWorkspaceNetworkOutboundRuleFqdn#timeouts}

---

### MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts <a name="MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_workspace_network_outbound_rule_fqdn

machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#create MachineLearningWorkspaceNetworkOutboundRuleFqdn#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#delete MachineLearningWorkspaceNetworkOutboundRuleFqdn#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#read MachineLearningWorkspaceNetworkOutboundRuleFqdn#read}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#update MachineLearningWorkspaceNetworkOutboundRuleFqdn#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#create MachineLearningWorkspaceNetworkOutboundRuleFqdn#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#delete MachineLearningWorkspaceNetworkOutboundRuleFqdn#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#read MachineLearningWorkspaceNetworkOutboundRuleFqdn#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#update MachineLearningWorkspaceNetworkOutboundRuleFqdn#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference <a name="MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_workspace_network_outbound_rule_fqdn

machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts</a>]

---



