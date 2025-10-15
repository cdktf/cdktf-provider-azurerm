# `dataProtectionBackupInstancePostgresql` Submodule <a name="`dataProtectionBackupInstancePostgresql` Submodule" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupInstancePostgresql <a name="DataProtectionBackupInstancePostgresql" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql azurerm_data_protection_backup_instance_postgresql}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_instance_postgresql

dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backup_policy_id: str,
  database_id: str,
  location: str,
  name: str,
  vault_id: str,
  database_credential_key_vault_secret_id: str = None,
  id: str = None,
  timeouts: DataProtectionBackupInstancePostgresqlTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.backupPolicyId">backup_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#backup_policy_id DataProtectionBackupInstancePostgresql#backup_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#database_id DataProtectionBackupInstancePostgresql#database_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#location DataProtectionBackupInstancePostgresql#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#name DataProtectionBackupInstancePostgresql#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#vault_id DataProtectionBackupInstancePostgresql#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.databaseCredentialKeyVaultSecretId">database_credential_key_vault_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#database_credential_key_vault_secret_id DataProtectionBackupInstancePostgresql#database_credential_key_vault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#id DataProtectionBackupInstancePostgresql#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts">DataProtectionBackupInstancePostgresqlTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backup_policy_id`<sup>Required</sup> <a name="backup_policy_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.backupPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#backup_policy_id DataProtectionBackupInstancePostgresql#backup_policy_id}.

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.databaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#database_id DataProtectionBackupInstancePostgresql#database_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#location DataProtectionBackupInstancePostgresql#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#name DataProtectionBackupInstancePostgresql#name}.

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.vaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#vault_id DataProtectionBackupInstancePostgresql#vault_id}.

---

##### `database_credential_key_vault_secret_id`<sup>Optional</sup> <a name="database_credential_key_vault_secret_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.databaseCredentialKeyVaultSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#database_credential_key_vault_secret_id DataProtectionBackupInstancePostgresql#database_credential_key_vault_secret_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#id DataProtectionBackupInstancePostgresql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts">DataProtectionBackupInstancePostgresqlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#timeouts DataProtectionBackupInstancePostgresql#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetDatabaseCredentialKeyVaultSecretId">reset_database_credential_key_vault_secret_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#create DataProtectionBackupInstancePostgresql#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#delete DataProtectionBackupInstancePostgresql#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#read DataProtectionBackupInstancePostgresql#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#update DataProtectionBackupInstancePostgresql#update}.

---

##### `reset_database_credential_key_vault_secret_id` <a name="reset_database_credential_key_vault_secret_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetDatabaseCredentialKeyVaultSecretId"></a>

```python
def reset_database_credential_key_vault_secret_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataProtectionBackupInstancePostgresql resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_instance_postgresql

dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_instance_postgresql

dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_instance_postgresql

dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_instance_postgresql

dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataProtectionBackupInstancePostgresql resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataProtectionBackupInstancePostgresql to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataProtectionBackupInstancePostgresql that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupInstancePostgresql to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference">DataProtectionBackupInstancePostgresqlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.backupPolicyIdInput">backup_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseCredentialKeyVaultSecretIdInput">database_credential_key_vault_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseIdInput">database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts">DataProtectionBackupInstancePostgresqlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.vaultIdInput">vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.backupPolicyId">backup_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseCredentialKeyVaultSecretId">database_credential_key_vault_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.timeouts"></a>

```python
timeouts: DataProtectionBackupInstancePostgresqlTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference">DataProtectionBackupInstancePostgresqlTimeoutsOutputReference</a>

---

##### `backup_policy_id_input`<sup>Optional</sup> <a name="backup_policy_id_input" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.backupPolicyIdInput"></a>

```python
backup_policy_id_input: str
```

- *Type:* str

---

##### `database_credential_key_vault_secret_id_input`<sup>Optional</sup> <a name="database_credential_key_vault_secret_id_input" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseCredentialKeyVaultSecretIdInput"></a>

```python
database_credential_key_vault_secret_id_input: str
```

- *Type:* str

---

##### `database_id_input`<sup>Optional</sup> <a name="database_id_input" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseIdInput"></a>

```python
database_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataProtectionBackupInstancePostgresqlTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts">DataProtectionBackupInstancePostgresqlTimeouts</a>

---

##### `vault_id_input`<sup>Optional</sup> <a name="vault_id_input" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.vaultIdInput"></a>

```python
vault_id_input: str
```

- *Type:* str

---

##### `backup_policy_id`<sup>Required</sup> <a name="backup_policy_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.backupPolicyId"></a>

```python
backup_policy_id: str
```

- *Type:* str

---

##### `database_credential_key_vault_secret_id`<sup>Required</sup> <a name="database_credential_key_vault_secret_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseCredentialKeyVaultSecretId"></a>

```python
database_credential_key_vault_secret_id: str
```

- *Type:* str

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupInstancePostgresqlConfig <a name="DataProtectionBackupInstancePostgresqlConfig" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_instance_postgresql

dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backup_policy_id: str,
  database_id: str,
  location: str,
  name: str,
  vault_id: str,
  database_credential_key_vault_secret_id: str = None,
  id: str = None,
  timeouts: DataProtectionBackupInstancePostgresqlTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.backupPolicyId">backup_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#backup_policy_id DataProtectionBackupInstancePostgresql#backup_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#database_id DataProtectionBackupInstancePostgresql#database_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#location DataProtectionBackupInstancePostgresql#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#name DataProtectionBackupInstancePostgresql#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#vault_id DataProtectionBackupInstancePostgresql#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.databaseCredentialKeyVaultSecretId">database_credential_key_vault_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#database_credential_key_vault_secret_id DataProtectionBackupInstancePostgresql#database_credential_key_vault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#id DataProtectionBackupInstancePostgresql#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts">DataProtectionBackupInstancePostgresqlTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backup_policy_id`<sup>Required</sup> <a name="backup_policy_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.backupPolicyId"></a>

```python
backup_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#backup_policy_id DataProtectionBackupInstancePostgresql#backup_policy_id}.

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#database_id DataProtectionBackupInstancePostgresql#database_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#location DataProtectionBackupInstancePostgresql#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#name DataProtectionBackupInstancePostgresql#name}.

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#vault_id DataProtectionBackupInstancePostgresql#vault_id}.

---

##### `database_credential_key_vault_secret_id`<sup>Optional</sup> <a name="database_credential_key_vault_secret_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.databaseCredentialKeyVaultSecretId"></a>

```python
database_credential_key_vault_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#database_credential_key_vault_secret_id DataProtectionBackupInstancePostgresql#database_credential_key_vault_secret_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#id DataProtectionBackupInstancePostgresql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.timeouts"></a>

```python
timeouts: DataProtectionBackupInstancePostgresqlTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts">DataProtectionBackupInstancePostgresqlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#timeouts DataProtectionBackupInstancePostgresql#timeouts}

---

### DataProtectionBackupInstancePostgresqlTimeouts <a name="DataProtectionBackupInstancePostgresqlTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_instance_postgresql

dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#create DataProtectionBackupInstancePostgresql#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#delete DataProtectionBackupInstancePostgresql#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#read DataProtectionBackupInstancePostgresql#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#update DataProtectionBackupInstancePostgresql#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#create DataProtectionBackupInstancePostgresql#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#delete DataProtectionBackupInstancePostgresql#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#read DataProtectionBackupInstancePostgresql#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_postgresql#update DataProtectionBackupInstancePostgresql#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupInstancePostgresqlTimeoutsOutputReference <a name="DataProtectionBackupInstancePostgresqlTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_instance_postgresql

dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts">DataProtectionBackupInstancePostgresqlTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataProtectionBackupInstancePostgresqlTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts">DataProtectionBackupInstancePostgresqlTimeouts</a>

---



