# `cosmosdbSqlRoleDefinition` Submodule <a name="`cosmosdbSqlRoleDefinition` Submodule" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbSqlRoleDefinition <a name="CosmosdbSqlRoleDefinition" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition azurerm_cosmosdb_sql_role_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_sql_role_definition

cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_name: str,
  assignable_scopes: typing.List[str],
  name: str,
  permissions: typing.Union[IResolvable, typing.List[CosmosdbSqlRoleDefinitionPermissions]],
  resource_group_name: str,
  id: str = None,
  role_definition_id: str = None,
  timeouts: CosmosdbSqlRoleDefinitionTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#account_name CosmosdbSqlRoleDefinition#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.assignableScopes">assignable_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#assignable_scopes CosmosdbSqlRoleDefinition#assignable_scopes}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#name CosmosdbSqlRoleDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.permissions">permissions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions">CosmosdbSqlRoleDefinitionPermissions</a>]]</code> | permissions block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#resource_group_name CosmosdbSqlRoleDefinition#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#id CosmosdbSqlRoleDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#role_definition_id CosmosdbSqlRoleDefinition#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts">CosmosdbSqlRoleDefinitionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#type CosmosdbSqlRoleDefinition#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.accountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#account_name CosmosdbSqlRoleDefinition#account_name}.

---

##### `assignable_scopes`<sup>Required</sup> <a name="assignable_scopes" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.assignableScopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#assignable_scopes CosmosdbSqlRoleDefinition#assignable_scopes}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#name CosmosdbSqlRoleDefinition#name}.

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.permissions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions">CosmosdbSqlRoleDefinitionPermissions</a>]]

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#permissions CosmosdbSqlRoleDefinition#permissions}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#resource_group_name CosmosdbSqlRoleDefinition#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#id CosmosdbSqlRoleDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `role_definition_id`<sup>Optional</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.roleDefinitionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#role_definition_id CosmosdbSqlRoleDefinition#role_definition_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts">CosmosdbSqlRoleDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#timeouts CosmosdbSqlRoleDefinition#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#type CosmosdbSqlRoleDefinition#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.putPermissions">put_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.resetRoleDefinitionId">reset_role_definition_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_permissions` <a name="put_permissions" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.putPermissions"></a>

```python
def put_permissions(
  value: typing.Union[IResolvable, typing.List[CosmosdbSqlRoleDefinitionPermissions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.putPermissions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions">CosmosdbSqlRoleDefinitionPermissions</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#create CosmosdbSqlRoleDefinition#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#delete CosmosdbSqlRoleDefinition#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#read CosmosdbSqlRoleDefinition#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#update CosmosdbSqlRoleDefinition#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_role_definition_id` <a name="reset_role_definition_id" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.resetRoleDefinitionId"></a>

```python
def reset_role_definition_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CosmosdbSqlRoleDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_sql_role_definition

cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_sql_role_definition

cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_sql_role_definition

cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_sql_role_definition

cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CosmosdbSqlRoleDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CosmosdbSqlRoleDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CosmosdbSqlRoleDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CosmosdbSqlRoleDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList">CosmosdbSqlRoleDefinitionPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference">CosmosdbSqlRoleDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.accountNameInput">account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.assignableScopesInput">assignable_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.permissionsInput">permissions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions">CosmosdbSqlRoleDefinitionPermissions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.roleDefinitionIdInput">role_definition_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts">CosmosdbSqlRoleDefinitionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.assignableScopes">assignable_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.permissions"></a>

```python
permissions: CosmosdbSqlRoleDefinitionPermissionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList">CosmosdbSqlRoleDefinitionPermissionsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.timeouts"></a>

```python
timeouts: CosmosdbSqlRoleDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference">CosmosdbSqlRoleDefinitionTimeoutsOutputReference</a>

---

##### `account_name_input`<sup>Optional</sup> <a name="account_name_input" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.accountNameInput"></a>

```python
account_name_input: str
```

- *Type:* str

---

##### `assignable_scopes_input`<sup>Optional</sup> <a name="assignable_scopes_input" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.assignableScopesInput"></a>

```python
assignable_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.permissionsInput"></a>

```python
permissions_input: typing.Union[IResolvable, typing.List[CosmosdbSqlRoleDefinitionPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions">CosmosdbSqlRoleDefinitionPermissions</a>]]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `role_definition_id_input`<sup>Optional</sup> <a name="role_definition_id_input" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.roleDefinitionIdInput"></a>

```python
role_definition_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CosmosdbSqlRoleDefinitionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts">CosmosdbSqlRoleDefinitionTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `assignable_scopes`<sup>Required</sup> <a name="assignable_scopes" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.assignableScopes"></a>

```python
assignable_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `role_definition_id`<sup>Required</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.roleDefinitionId"></a>

```python
role_definition_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbSqlRoleDefinitionConfig <a name="CosmosdbSqlRoleDefinitionConfig" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_sql_role_definition

cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_name: str,
  assignable_scopes: typing.List[str],
  name: str,
  permissions: typing.Union[IResolvable, typing.List[CosmosdbSqlRoleDefinitionPermissions]],
  resource_group_name: str,
  id: str = None,
  role_definition_id: str = None,
  timeouts: CosmosdbSqlRoleDefinitionTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#account_name CosmosdbSqlRoleDefinition#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.assignableScopes">assignable_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#assignable_scopes CosmosdbSqlRoleDefinition#assignable_scopes}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#name CosmosdbSqlRoleDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.permissions">permissions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions">CosmosdbSqlRoleDefinitionPermissions</a>]]</code> | permissions block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#resource_group_name CosmosdbSqlRoleDefinition#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#id CosmosdbSqlRoleDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#role_definition_id CosmosdbSqlRoleDefinition#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts">CosmosdbSqlRoleDefinitionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#type CosmosdbSqlRoleDefinition#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#account_name CosmosdbSqlRoleDefinition#account_name}.

---

##### `assignable_scopes`<sup>Required</sup> <a name="assignable_scopes" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.assignableScopes"></a>

```python
assignable_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#assignable_scopes CosmosdbSqlRoleDefinition#assignable_scopes}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#name CosmosdbSqlRoleDefinition#name}.

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.permissions"></a>

```python
permissions: typing.Union[IResolvable, typing.List[CosmosdbSqlRoleDefinitionPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions">CosmosdbSqlRoleDefinitionPermissions</a>]]

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#permissions CosmosdbSqlRoleDefinition#permissions}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#resource_group_name CosmosdbSqlRoleDefinition#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#id CosmosdbSqlRoleDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `role_definition_id`<sup>Optional</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.roleDefinitionId"></a>

```python
role_definition_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#role_definition_id CosmosdbSqlRoleDefinition#role_definition_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.timeouts"></a>

```python
timeouts: CosmosdbSqlRoleDefinitionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts">CosmosdbSqlRoleDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#timeouts CosmosdbSqlRoleDefinition#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#type CosmosdbSqlRoleDefinition#type}.

---

### CosmosdbSqlRoleDefinitionPermissions <a name="CosmosdbSqlRoleDefinitionPermissions" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_sql_role_definition

cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions(
  data_actions: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions.property.dataActions">data_actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#data_actions CosmosdbSqlRoleDefinition#data_actions}. |

---

##### `data_actions`<sup>Required</sup> <a name="data_actions" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions.property.dataActions"></a>

```python
data_actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#data_actions CosmosdbSqlRoleDefinition#data_actions}.

---

### CosmosdbSqlRoleDefinitionTimeouts <a name="CosmosdbSqlRoleDefinitionTimeouts" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_sql_role_definition

cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#create CosmosdbSqlRoleDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#delete CosmosdbSqlRoleDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#read CosmosdbSqlRoleDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#update CosmosdbSqlRoleDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#create CosmosdbSqlRoleDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#delete CosmosdbSqlRoleDefinition#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#read CosmosdbSqlRoleDefinition#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/cosmosdb_sql_role_definition#update CosmosdbSqlRoleDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbSqlRoleDefinitionPermissionsList <a name="CosmosdbSqlRoleDefinitionPermissionsList" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_sql_role_definition

cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CosmosdbSqlRoleDefinitionPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions">CosmosdbSqlRoleDefinitionPermissions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CosmosdbSqlRoleDefinitionPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions">CosmosdbSqlRoleDefinitionPermissions</a>]]

---


### CosmosdbSqlRoleDefinitionPermissionsOutputReference <a name="CosmosdbSqlRoleDefinitionPermissionsOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_sql_role_definition

cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.property.dataActionsInput">data_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.property.dataActions">data_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions">CosmosdbSqlRoleDefinitionPermissions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_actions_input`<sup>Optional</sup> <a name="data_actions_input" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.property.dataActionsInput"></a>

```python
data_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_actions`<sup>Required</sup> <a name="data_actions" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.property.dataActions"></a>

```python
data_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CosmosdbSqlRoleDefinitionPermissions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions">CosmosdbSqlRoleDefinitionPermissions</a>]

---


### CosmosdbSqlRoleDefinitionTimeoutsOutputReference <a name="CosmosdbSqlRoleDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_sql_role_definition

cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts">CosmosdbSqlRoleDefinitionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CosmosdbSqlRoleDefinitionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts">CosmosdbSqlRoleDefinitionTimeouts</a>]

---



