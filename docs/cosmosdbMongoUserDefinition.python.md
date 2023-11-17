# `azurerm_cosmosdb_mongo_user_definition`

Refer to the Terraform Registory for docs: [`azurerm_cosmosdb_mongo_user_definition`](https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition).

# `cosmosdbMongoUserDefinition` Submodule <a name="`cosmosdbMongoUserDefinition` Submodule" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbMongoUserDefinition <a name="CosmosdbMongoUserDefinition" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition azurerm_cosmosdb_mongo_user_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_user_definition

cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition(
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
  password: str,
  username: str,
  id: str = None,
  inherited_role_names: typing.List[str] = None,
  timeouts: CosmosdbMongoUserDefinitionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.cosmosMongoDatabaseId">cosmos_mongo_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#cosmos_mongo_database_id CosmosdbMongoUserDefinition#cosmos_mongo_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#password CosmosdbMongoUserDefinition#password}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#username CosmosdbMongoUserDefinition#username}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#id CosmosdbMongoUserDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.inheritedRoleNames">inherited_role_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#inherited_role_names CosmosdbMongoUserDefinition#inherited_role_names}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts">CosmosdbMongoUserDefinitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cosmos_mongo_database_id`<sup>Required</sup> <a name="cosmos_mongo_database_id" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.cosmosMongoDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#cosmos_mongo_database_id CosmosdbMongoUserDefinition#cosmos_mongo_database_id}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#password CosmosdbMongoUserDefinition#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#username CosmosdbMongoUserDefinition#username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#id CosmosdbMongoUserDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inherited_role_names`<sup>Optional</sup> <a name="inherited_role_names" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.inheritedRoleNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#inherited_role_names CosmosdbMongoUserDefinition#inherited_role_names}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts">CosmosdbMongoUserDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#timeouts CosmosdbMongoUserDefinition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.resetInheritedRoleNames">reset_inherited_role_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#create CosmosdbMongoUserDefinition#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#delete CosmosdbMongoUserDefinition#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#read CosmosdbMongoUserDefinition#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#update CosmosdbMongoUserDefinition#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inherited_role_names` <a name="reset_inherited_role_names" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.resetInheritedRoleNames"></a>

```python
def reset_inherited_role_names() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CosmosdbMongoUserDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_user_definition

cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_user_definition

cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_user_definition

cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_user_definition

cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CosmosdbMongoUserDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CosmosdbMongoUserDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CosmosdbMongoUserDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CosmosdbMongoUserDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference">CosmosdbMongoUserDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.cosmosMongoDatabaseIdInput">cosmos_mongo_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.inheritedRoleNamesInput">inherited_role_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts">CosmosdbMongoUserDefinitionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.cosmosMongoDatabaseId">cosmos_mongo_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.inheritedRoleNames">inherited_role_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.timeouts"></a>

```python
timeouts: CosmosdbMongoUserDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference">CosmosdbMongoUserDefinitionTimeoutsOutputReference</a>

---

##### `cosmos_mongo_database_id_input`<sup>Optional</sup> <a name="cosmos_mongo_database_id_input" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.cosmosMongoDatabaseIdInput"></a>

```python
cosmos_mongo_database_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inherited_role_names_input`<sup>Optional</sup> <a name="inherited_role_names_input" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.inheritedRoleNamesInput"></a>

```python
inherited_role_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CosmosdbMongoUserDefinitionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts">CosmosdbMongoUserDefinitionTimeouts</a>]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `cosmos_mongo_database_id`<sup>Required</sup> <a name="cosmos_mongo_database_id" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.cosmosMongoDatabaseId"></a>

```python
cosmos_mongo_database_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inherited_role_names`<sup>Required</sup> <a name="inherited_role_names" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.inheritedRoleNames"></a>

```python
inherited_role_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbMongoUserDefinitionConfig <a name="CosmosdbMongoUserDefinitionConfig" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_user_definition

cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cosmos_mongo_database_id: str,
  password: str,
  username: str,
  id: str = None,
  inherited_role_names: typing.List[str] = None,
  timeouts: CosmosdbMongoUserDefinitionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.cosmosMongoDatabaseId">cosmos_mongo_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#cosmos_mongo_database_id CosmosdbMongoUserDefinition#cosmos_mongo_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#password CosmosdbMongoUserDefinition#password}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#username CosmosdbMongoUserDefinition#username}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#id CosmosdbMongoUserDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.inheritedRoleNames">inherited_role_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#inherited_role_names CosmosdbMongoUserDefinition#inherited_role_names}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts">CosmosdbMongoUserDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cosmos_mongo_database_id`<sup>Required</sup> <a name="cosmos_mongo_database_id" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.cosmosMongoDatabaseId"></a>

```python
cosmos_mongo_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#cosmos_mongo_database_id CosmosdbMongoUserDefinition#cosmos_mongo_database_id}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#password CosmosdbMongoUserDefinition#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#username CosmosdbMongoUserDefinition#username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#id CosmosdbMongoUserDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inherited_role_names`<sup>Optional</sup> <a name="inherited_role_names" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.inheritedRoleNames"></a>

```python
inherited_role_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#inherited_role_names CosmosdbMongoUserDefinition#inherited_role_names}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.timeouts"></a>

```python
timeouts: CosmosdbMongoUserDefinitionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts">CosmosdbMongoUserDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#timeouts CosmosdbMongoUserDefinition#timeouts}

---

### CosmosdbMongoUserDefinitionTimeouts <a name="CosmosdbMongoUserDefinitionTimeouts" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_user_definition

cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#create CosmosdbMongoUserDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#delete CosmosdbMongoUserDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#read CosmosdbMongoUserDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#update CosmosdbMongoUserDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#create CosmosdbMongoUserDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#delete CosmosdbMongoUserDefinition#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#read CosmosdbMongoUserDefinition#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cosmosdb_mongo_user_definition#update CosmosdbMongoUserDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbMongoUserDefinitionTimeoutsOutputReference <a name="CosmosdbMongoUserDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_user_definition

cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts">CosmosdbMongoUserDefinitionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CosmosdbMongoUserDefinitionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts">CosmosdbMongoUserDefinitionTimeouts</a>]

---



