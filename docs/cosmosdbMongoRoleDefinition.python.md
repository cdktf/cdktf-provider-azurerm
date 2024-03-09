# `cosmosdbMongoRoleDefinition` Submodule <a name="`cosmosdbMongoRoleDefinition` Submodule" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbMongoRoleDefinition <a name="CosmosdbMongoRoleDefinition" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition azurerm_cosmosdb_mongo_role_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_role_definition

cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cosmos_mongo_database_id: str,
  role_name: str,
  id: str = None,
  inherited_role_names: typing.List[str] = None,
  privilege: typing.Union[IResolvable, typing.List[CosmosdbMongoRoleDefinitionPrivilege]] = None,
  timeouts: CosmosdbMongoRoleDefinitionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.cosmosMongoDatabaseId">cosmos_mongo_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#cosmos_mongo_database_id CosmosdbMongoRoleDefinition#cosmos_mongo_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.roleName">role_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#role_name CosmosdbMongoRoleDefinition#role_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#id CosmosdbMongoRoleDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.inheritedRoleNames">inherited_role_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#inherited_role_names CosmosdbMongoRoleDefinition#inherited_role_names}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.privilege">privilege</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilege">CosmosdbMongoRoleDefinitionPrivilege</a>]]</code> | privilege block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeouts">CosmosdbMongoRoleDefinitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cosmos_mongo_database_id`<sup>Required</sup> <a name="cosmos_mongo_database_id" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.cosmosMongoDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#cosmos_mongo_database_id CosmosdbMongoRoleDefinition#cosmos_mongo_database_id}.

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.roleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#role_name CosmosdbMongoRoleDefinition#role_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#id CosmosdbMongoRoleDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inherited_role_names`<sup>Optional</sup> <a name="inherited_role_names" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.inheritedRoleNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#inherited_role_names CosmosdbMongoRoleDefinition#inherited_role_names}.

---

##### `privilege`<sup>Optional</sup> <a name="privilege" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.privilege"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilege">CosmosdbMongoRoleDefinitionPrivilege</a>]]

privilege block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#privilege CosmosdbMongoRoleDefinition#privilege}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeouts">CosmosdbMongoRoleDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#timeouts CosmosdbMongoRoleDefinition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.putPrivilege">put_privilege</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.resetInheritedRoleNames">reset_inherited_role_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.resetPrivilege">reset_privilege</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_privilege` <a name="put_privilege" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.putPrivilege"></a>

```python
def put_privilege(
  value: typing.Union[IResolvable, typing.List[CosmosdbMongoRoleDefinitionPrivilege]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.putPrivilege.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilege">CosmosdbMongoRoleDefinitionPrivilege</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#create CosmosdbMongoRoleDefinition#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#delete CosmosdbMongoRoleDefinition#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#read CosmosdbMongoRoleDefinition#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#update CosmosdbMongoRoleDefinition#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inherited_role_names` <a name="reset_inherited_role_names" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.resetInheritedRoleNames"></a>

```python
def reset_inherited_role_names() -> None
```

##### `reset_privilege` <a name="reset_privilege" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.resetPrivilege"></a>

```python
def reset_privilege() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CosmosdbMongoRoleDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_role_definition

cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_role_definition

cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_role_definition

cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_role_definition

cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CosmosdbMongoRoleDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CosmosdbMongoRoleDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CosmosdbMongoRoleDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CosmosdbMongoRoleDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.privilege">privilege</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList">CosmosdbMongoRoleDefinitionPrivilegeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference">CosmosdbMongoRoleDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.cosmosMongoDatabaseIdInput">cosmos_mongo_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.inheritedRoleNamesInput">inherited_role_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.privilegeInput">privilege_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilege">CosmosdbMongoRoleDefinitionPrivilege</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeouts">CosmosdbMongoRoleDefinitionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.cosmosMongoDatabaseId">cosmos_mongo_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.inheritedRoleNames">inherited_role_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `privilege`<sup>Required</sup> <a name="privilege" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.privilege"></a>

```python
privilege: CosmosdbMongoRoleDefinitionPrivilegeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList">CosmosdbMongoRoleDefinitionPrivilegeList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.timeouts"></a>

```python
timeouts: CosmosdbMongoRoleDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference">CosmosdbMongoRoleDefinitionTimeoutsOutputReference</a>

---

##### `cosmos_mongo_database_id_input`<sup>Optional</sup> <a name="cosmos_mongo_database_id_input" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.cosmosMongoDatabaseIdInput"></a>

```python
cosmos_mongo_database_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inherited_role_names_input`<sup>Optional</sup> <a name="inherited_role_names_input" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.inheritedRoleNamesInput"></a>

```python
inherited_role_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `privilege_input`<sup>Optional</sup> <a name="privilege_input" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.privilegeInput"></a>

```python
privilege_input: typing.Union[IResolvable, typing.List[CosmosdbMongoRoleDefinitionPrivilege]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilege">CosmosdbMongoRoleDefinitionPrivilege</a>]]

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CosmosdbMongoRoleDefinitionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeouts">CosmosdbMongoRoleDefinitionTimeouts</a>]

---

##### `cosmos_mongo_database_id`<sup>Required</sup> <a name="cosmos_mongo_database_id" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.cosmosMongoDatabaseId"></a>

```python
cosmos_mongo_database_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inherited_role_names`<sup>Required</sup> <a name="inherited_role_names" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.inheritedRoleNames"></a>

```python
inherited_role_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbMongoRoleDefinitionConfig <a name="CosmosdbMongoRoleDefinitionConfig" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_role_definition

cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cosmos_mongo_database_id: str,
  role_name: str,
  id: str = None,
  inherited_role_names: typing.List[str] = None,
  privilege: typing.Union[IResolvable, typing.List[CosmosdbMongoRoleDefinitionPrivilege]] = None,
  timeouts: CosmosdbMongoRoleDefinitionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.cosmosMongoDatabaseId">cosmos_mongo_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#cosmos_mongo_database_id CosmosdbMongoRoleDefinition#cosmos_mongo_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.roleName">role_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#role_name CosmosdbMongoRoleDefinition#role_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#id CosmosdbMongoRoleDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.inheritedRoleNames">inherited_role_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#inherited_role_names CosmosdbMongoRoleDefinition#inherited_role_names}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.privilege">privilege</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilege">CosmosdbMongoRoleDefinitionPrivilege</a>]]</code> | privilege block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeouts">CosmosdbMongoRoleDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cosmos_mongo_database_id`<sup>Required</sup> <a name="cosmos_mongo_database_id" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.cosmosMongoDatabaseId"></a>

```python
cosmos_mongo_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#cosmos_mongo_database_id CosmosdbMongoRoleDefinition#cosmos_mongo_database_id}.

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#role_name CosmosdbMongoRoleDefinition#role_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#id CosmosdbMongoRoleDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inherited_role_names`<sup>Optional</sup> <a name="inherited_role_names" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.inheritedRoleNames"></a>

```python
inherited_role_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#inherited_role_names CosmosdbMongoRoleDefinition#inherited_role_names}.

---

##### `privilege`<sup>Optional</sup> <a name="privilege" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.privilege"></a>

```python
privilege: typing.Union[IResolvable, typing.List[CosmosdbMongoRoleDefinitionPrivilege]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilege">CosmosdbMongoRoleDefinitionPrivilege</a>]]

privilege block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#privilege CosmosdbMongoRoleDefinition#privilege}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionConfig.property.timeouts"></a>

```python
timeouts: CosmosdbMongoRoleDefinitionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeouts">CosmosdbMongoRoleDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#timeouts CosmosdbMongoRoleDefinition#timeouts}

---

### CosmosdbMongoRoleDefinitionPrivilege <a name="CosmosdbMongoRoleDefinitionPrivilege" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilege"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilege.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_role_definition

cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilege(
  actions: typing.List[str],
  resource: CosmosdbMongoRoleDefinitionPrivilegeResource
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilege.property.actions">actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#actions CosmosdbMongoRoleDefinition#actions}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilege.property.resource">resource</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResource">CosmosdbMongoRoleDefinitionPrivilegeResource</a></code> | resource block. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilege.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#actions CosmosdbMongoRoleDefinition#actions}.

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilege.property.resource"></a>

```python
resource: CosmosdbMongoRoleDefinitionPrivilegeResource
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResource">CosmosdbMongoRoleDefinitionPrivilegeResource</a>

resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#resource CosmosdbMongoRoleDefinition#resource}

---

### CosmosdbMongoRoleDefinitionPrivilegeResource <a name="CosmosdbMongoRoleDefinitionPrivilegeResource" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResource.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_role_definition

cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResource(
  collection_name: str = None,
  db_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResource.property.collectionName">collection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#collection_name CosmosdbMongoRoleDefinition#collection_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResource.property.dbName">db_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#db_name CosmosdbMongoRoleDefinition#db_name}. |

---

##### `collection_name`<sup>Optional</sup> <a name="collection_name" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResource.property.collectionName"></a>

```python
collection_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#collection_name CosmosdbMongoRoleDefinition#collection_name}.

---

##### `db_name`<sup>Optional</sup> <a name="db_name" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResource.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#db_name CosmosdbMongoRoleDefinition#db_name}.

---

### CosmosdbMongoRoleDefinitionTimeouts <a name="CosmosdbMongoRoleDefinitionTimeouts" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_role_definition

cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#create CosmosdbMongoRoleDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#delete CosmosdbMongoRoleDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#read CosmosdbMongoRoleDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#update CosmosdbMongoRoleDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#create CosmosdbMongoRoleDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#delete CosmosdbMongoRoleDefinition#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#read CosmosdbMongoRoleDefinition#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#update CosmosdbMongoRoleDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbMongoRoleDefinitionPrivilegeList <a name="CosmosdbMongoRoleDefinitionPrivilegeList" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_role_definition

cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CosmosdbMongoRoleDefinitionPrivilegeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilege">CosmosdbMongoRoleDefinitionPrivilege</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CosmosdbMongoRoleDefinitionPrivilege]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilege">CosmosdbMongoRoleDefinitionPrivilege</a>]]

---


### CosmosdbMongoRoleDefinitionPrivilegeOutputReference <a name="CosmosdbMongoRoleDefinitionPrivilegeOutputReference" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_role_definition

cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.putResource">put_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_resource` <a name="put_resource" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.putResource"></a>

```python
def put_resource(
  collection_name: str = None,
  db_name: str = None
) -> None
```

###### `collection_name`<sup>Optional</sup> <a name="collection_name" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.putResource.parameter.collectionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#collection_name CosmosdbMongoRoleDefinition#collection_name}.

---

###### `db_name`<sup>Optional</sup> <a name="db_name" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.putResource.parameter.dbName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/cosmosdb_mongo_role_definition#db_name CosmosdbMongoRoleDefinition#db_name}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.property.resource">resource</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference">CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.property.resourceInput">resource_input</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResource">CosmosdbMongoRoleDefinitionPrivilegeResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilege">CosmosdbMongoRoleDefinitionPrivilege</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.property.resource"></a>

```python
resource: CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference">CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.property.resourceInput"></a>

```python
resource_input: CosmosdbMongoRoleDefinitionPrivilegeResource
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResource">CosmosdbMongoRoleDefinitionPrivilegeResource</a>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CosmosdbMongoRoleDefinitionPrivilege]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilege">CosmosdbMongoRoleDefinitionPrivilege</a>]

---


### CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference <a name="CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_role_definition

cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.resetCollectionName">reset_collection_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.resetDbName">reset_db_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_collection_name` <a name="reset_collection_name" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.resetCollectionName"></a>

```python
def reset_collection_name() -> None
```

##### `reset_db_name` <a name="reset_db_name" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.resetDbName"></a>

```python
def reset_db_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.property.collectionNameInput">collection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.property.dbNameInput">db_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.property.collectionName">collection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResource">CosmosdbMongoRoleDefinitionPrivilegeResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `collection_name_input`<sup>Optional</sup> <a name="collection_name_input" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.property.collectionNameInput"></a>

```python
collection_name_input: str
```

- *Type:* str

---

##### `db_name_input`<sup>Optional</sup> <a name="db_name_input" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.property.dbNameInput"></a>

```python
db_name_input: str
```

- *Type:* str

---

##### `collection_name`<sup>Required</sup> <a name="collection_name" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.property.collectionName"></a>

```python
collection_name: str
```

- *Type:* str

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResourceOutputReference.property.internalValue"></a>

```python
internal_value: CosmosdbMongoRoleDefinitionPrivilegeResource
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionPrivilegeResource">CosmosdbMongoRoleDefinitionPrivilegeResource</a>

---


### CosmosdbMongoRoleDefinitionTimeoutsOutputReference <a name="CosmosdbMongoRoleDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_role_definition

cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeouts">CosmosdbMongoRoleDefinitionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CosmosdbMongoRoleDefinitionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbMongoRoleDefinition.CosmosdbMongoRoleDefinitionTimeouts">CosmosdbMongoRoleDefinitionTimeouts</a>]

---



