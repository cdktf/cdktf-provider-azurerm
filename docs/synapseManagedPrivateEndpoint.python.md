# `azurerm_synapse_managed_private_endpoint`

Refer to the Terraform Registory for docs: [`azurerm_synapse_managed_private_endpoint`](https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint).

# `synapseManagedPrivateEndpoint` Submodule <a name="`synapseManagedPrivateEndpoint` Submodule" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseManagedPrivateEndpoint <a name="SynapseManagedPrivateEndpoint" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint azurerm_synapse_managed_private_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_managed_private_endpoint

synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  subresource_name: str,
  synapse_workspace_id: str,
  target_resource_id: str,
  id: str = None,
  timeouts: SynapseManagedPrivateEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#name SynapseManagedPrivateEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.subresourceName">subresource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#subresource_name SynapseManagedPrivateEndpoint#subresource_name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.synapseWorkspaceId">synapse_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#synapse_workspace_id SynapseManagedPrivateEndpoint#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.targetResourceId">target_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#target_resource_id SynapseManagedPrivateEndpoint#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#id SynapseManagedPrivateEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeouts">SynapseManagedPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#name SynapseManagedPrivateEndpoint#name}.

---

##### `subresource_name`<sup>Required</sup> <a name="subresource_name" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.subresourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#subresource_name SynapseManagedPrivateEndpoint#subresource_name}.

---

##### `synapse_workspace_id`<sup>Required</sup> <a name="synapse_workspace_id" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.synapseWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#synapse_workspace_id SynapseManagedPrivateEndpoint#synapse_workspace_id}.

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.targetResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#target_resource_id SynapseManagedPrivateEndpoint#target_resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#id SynapseManagedPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeouts">SynapseManagedPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#timeouts SynapseManagedPrivateEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#create SynapseManagedPrivateEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#delete SynapseManagedPrivateEndpoint#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#read SynapseManagedPrivateEndpoint#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SynapseManagedPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_managed_private_endpoint

synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_managed_private_endpoint

synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_managed_private_endpoint

synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_managed_private_endpoint

synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SynapseManagedPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SynapseManagedPrivateEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SynapseManagedPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SynapseManagedPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference">SynapseManagedPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.subresourceNameInput">subresource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.synapseWorkspaceIdInput">synapse_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.targetResourceIdInput">target_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeouts">SynapseManagedPrivateEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.subresourceName">subresource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.synapseWorkspaceId">synapse_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.timeouts"></a>

```python
timeouts: SynapseManagedPrivateEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference">SynapseManagedPrivateEndpointTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `subresource_name_input`<sup>Optional</sup> <a name="subresource_name_input" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.subresourceNameInput"></a>

```python
subresource_name_input: str
```

- *Type:* str

---

##### `synapse_workspace_id_input`<sup>Optional</sup> <a name="synapse_workspace_id_input" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.synapseWorkspaceIdInput"></a>

```python
synapse_workspace_id_input: str
```

- *Type:* str

---

##### `target_resource_id_input`<sup>Optional</sup> <a name="target_resource_id_input" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.targetResourceIdInput"></a>

```python
target_resource_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SynapseManagedPrivateEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeouts">SynapseManagedPrivateEndpointTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `subresource_name`<sup>Required</sup> <a name="subresource_name" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.subresourceName"></a>

```python
subresource_name: str
```

- *Type:* str

---

##### `synapse_workspace_id`<sup>Required</sup> <a name="synapse_workspace_id" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.synapseWorkspaceId"></a>

```python
synapse_workspace_id: str
```

- *Type:* str

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseManagedPrivateEndpointConfig <a name="SynapseManagedPrivateEndpointConfig" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_managed_private_endpoint

synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  subresource_name: str,
  synapse_workspace_id: str,
  target_resource_id: str,
  id: str = None,
  timeouts: SynapseManagedPrivateEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#name SynapseManagedPrivateEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.subresourceName">subresource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#subresource_name SynapseManagedPrivateEndpoint#subresource_name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.synapseWorkspaceId">synapse_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#synapse_workspace_id SynapseManagedPrivateEndpoint#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#target_resource_id SynapseManagedPrivateEndpoint#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#id SynapseManagedPrivateEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeouts">SynapseManagedPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#name SynapseManagedPrivateEndpoint#name}.

---

##### `subresource_name`<sup>Required</sup> <a name="subresource_name" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.subresourceName"></a>

```python
subresource_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#subresource_name SynapseManagedPrivateEndpoint#subresource_name}.

---

##### `synapse_workspace_id`<sup>Required</sup> <a name="synapse_workspace_id" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.synapseWorkspaceId"></a>

```python
synapse_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#synapse_workspace_id SynapseManagedPrivateEndpoint#synapse_workspace_id}.

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#target_resource_id SynapseManagedPrivateEndpoint#target_resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#id SynapseManagedPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointConfig.property.timeouts"></a>

```python
timeouts: SynapseManagedPrivateEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeouts">SynapseManagedPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#timeouts SynapseManagedPrivateEndpoint#timeouts}

---

### SynapseManagedPrivateEndpointTimeouts <a name="SynapseManagedPrivateEndpointTimeouts" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_managed_private_endpoint

synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#create SynapseManagedPrivateEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#delete SynapseManagedPrivateEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#read SynapseManagedPrivateEndpoint#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#create SynapseManagedPrivateEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#delete SynapseManagedPrivateEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_managed_private_endpoint#read SynapseManagedPrivateEndpoint#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseManagedPrivateEndpointTimeoutsOutputReference <a name="SynapseManagedPrivateEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_managed_private_endpoint

synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeouts">SynapseManagedPrivateEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SynapseManagedPrivateEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseManagedPrivateEndpoint.SynapseManagedPrivateEndpointTimeouts">SynapseManagedPrivateEndpointTimeouts</a>]

---



