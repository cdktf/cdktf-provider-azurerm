# `synapseWorkspaceSqlAadAdmin` Submodule <a name="`synapseWorkspaceSqlAadAdmin` Submodule" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseWorkspaceSqlAadAdmin <a name="SynapseWorkspaceSqlAadAdmin" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin azurerm_synapse_workspace_sql_aad_admin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_sql_aad_admin

synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  login: str,
  object_id: str,
  synapse_workspace_id: str,
  tenant_id: str,
  id: str = None,
  timeouts: SynapseWorkspaceSqlAadAdminTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.login">login</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#login SynapseWorkspaceSqlAadAdmin#login}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#object_id SynapseWorkspaceSqlAadAdmin#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.synapseWorkspaceId">synapse_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#synapse_workspace_id SynapseWorkspaceSqlAadAdmin#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#tenant_id SynapseWorkspaceSqlAadAdmin#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#id SynapseWorkspaceSqlAadAdmin#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts">SynapseWorkspaceSqlAadAdminTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.login"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#login SynapseWorkspaceSqlAadAdmin#login}.

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.objectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#object_id SynapseWorkspaceSqlAadAdmin#object_id}.

---

##### `synapse_workspace_id`<sup>Required</sup> <a name="synapse_workspace_id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.synapseWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#synapse_workspace_id SynapseWorkspaceSqlAadAdmin#synapse_workspace_id}.

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#tenant_id SynapseWorkspaceSqlAadAdmin#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#id SynapseWorkspaceSqlAadAdmin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts">SynapseWorkspaceSqlAadAdminTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#timeouts SynapseWorkspaceSqlAadAdmin#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#create SynapseWorkspaceSqlAadAdmin#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#delete SynapseWorkspaceSqlAadAdmin#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#read SynapseWorkspaceSqlAadAdmin#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#update SynapseWorkspaceSqlAadAdmin#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SynapseWorkspaceSqlAadAdmin resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_sql_aad_admin

synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_sql_aad_admin

synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_sql_aad_admin

synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_sql_aad_admin

synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SynapseWorkspaceSqlAadAdmin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SynapseWorkspaceSqlAadAdmin to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SynapseWorkspaceSqlAadAdmin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SynapseWorkspaceSqlAadAdmin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference">SynapseWorkspaceSqlAadAdminTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.loginInput">login_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.synapseWorkspaceIdInput">synapse_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts">SynapseWorkspaceSqlAadAdminTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.login">login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.synapseWorkspaceId">synapse_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.timeouts"></a>

```python
timeouts: SynapseWorkspaceSqlAadAdminTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference">SynapseWorkspaceSqlAadAdminTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `login_input`<sup>Optional</sup> <a name="login_input" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.loginInput"></a>

```python
login_input: str
```

- *Type:* str

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `synapse_workspace_id_input`<sup>Optional</sup> <a name="synapse_workspace_id_input" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.synapseWorkspaceIdInput"></a>

```python
synapse_workspace_id_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SynapseWorkspaceSqlAadAdminTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts">SynapseWorkspaceSqlAadAdminTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.login"></a>

```python
login: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `synapse_workspace_id`<sup>Required</sup> <a name="synapse_workspace_id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.synapseWorkspaceId"></a>

```python
synapse_workspace_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseWorkspaceSqlAadAdminConfig <a name="SynapseWorkspaceSqlAadAdminConfig" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_sql_aad_admin

synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  login: str,
  object_id: str,
  synapse_workspace_id: str,
  tenant_id: str,
  id: str = None,
  timeouts: SynapseWorkspaceSqlAadAdminTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.login">login</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#login SynapseWorkspaceSqlAadAdmin#login}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#object_id SynapseWorkspaceSqlAadAdmin#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.synapseWorkspaceId">synapse_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#synapse_workspace_id SynapseWorkspaceSqlAadAdmin#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#tenant_id SynapseWorkspaceSqlAadAdmin#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#id SynapseWorkspaceSqlAadAdmin#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts">SynapseWorkspaceSqlAadAdminTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.login"></a>

```python
login: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#login SynapseWorkspaceSqlAadAdmin#login}.

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#object_id SynapseWorkspaceSqlAadAdmin#object_id}.

---

##### `synapse_workspace_id`<sup>Required</sup> <a name="synapse_workspace_id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.synapseWorkspaceId"></a>

```python
synapse_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#synapse_workspace_id SynapseWorkspaceSqlAadAdmin#synapse_workspace_id}.

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#tenant_id SynapseWorkspaceSqlAadAdmin#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#id SynapseWorkspaceSqlAadAdmin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.timeouts"></a>

```python
timeouts: SynapseWorkspaceSqlAadAdminTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts">SynapseWorkspaceSqlAadAdminTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#timeouts SynapseWorkspaceSqlAadAdmin#timeouts}

---

### SynapseWorkspaceSqlAadAdminTimeouts <a name="SynapseWorkspaceSqlAadAdminTimeouts" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_sql_aad_admin

synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#create SynapseWorkspaceSqlAadAdmin#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#delete SynapseWorkspaceSqlAadAdmin#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#read SynapseWorkspaceSqlAadAdmin#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#update SynapseWorkspaceSqlAadAdmin#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#create SynapseWorkspaceSqlAadAdmin#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#delete SynapseWorkspaceSqlAadAdmin#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#read SynapseWorkspaceSqlAadAdmin#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/synapse_workspace_sql_aad_admin#update SynapseWorkspaceSqlAadAdmin#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseWorkspaceSqlAadAdminTimeoutsOutputReference <a name="SynapseWorkspaceSqlAadAdminTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_sql_aad_admin

synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts">SynapseWorkspaceSqlAadAdminTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SynapseWorkspaceSqlAadAdminTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts">SynapseWorkspaceSqlAadAdminTimeouts</a>]

---



