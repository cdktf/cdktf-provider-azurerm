# `azurerm_synapse_sql_pool_extended_auditing_policy`

Refer to the Terraform Registory for docs: [`azurerm_synapse_sql_pool_extended_auditing_policy`](https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy).

# `synapseSqlPoolExtendedAuditingPolicy` Submodule <a name="`synapseSqlPoolExtendedAuditingPolicy` Submodule" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseSqlPoolExtendedAuditingPolicy <a name="SynapseSqlPoolExtendedAuditingPolicy" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy azurerm_synapse_sql_pool_extended_auditing_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_sql_pool_extended_auditing_policy

synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  sql_pool_id: str,
  id: str = None,
  log_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  retention_in_days: typing.Union[int, float] = None,
  storage_account_access_key: str = None,
  storage_account_access_key_is_secondary: typing.Union[bool, IResolvable] = None,
  storage_endpoint: str = None,
  timeouts: SynapseSqlPoolExtendedAuditingPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.sqlPoolId">sql_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#sql_pool_id SynapseSqlPoolExtendedAuditingPolicy#sql_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#id SynapseSqlPoolExtendedAuditingPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.logMonitoringEnabled">log_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#log_monitoring_enabled SynapseSqlPoolExtendedAuditingPolicy#log_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#retention_in_days SynapseSqlPoolExtendedAuditingPolicy#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#storage_account_access_key SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.storageAccountAccessKeyIsSecondary">storage_account_access_key_is_secondary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#storage_account_access_key_is_secondary SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key_is_secondary}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#storage_endpoint SynapseSqlPoolExtendedAuditingPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts">SynapseSqlPoolExtendedAuditingPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `sql_pool_id`<sup>Required</sup> <a name="sql_pool_id" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.sqlPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#sql_pool_id SynapseSqlPoolExtendedAuditingPolicy#sql_pool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#id SynapseSqlPoolExtendedAuditingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_monitoring_enabled`<sup>Optional</sup> <a name="log_monitoring_enabled" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.logMonitoringEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#log_monitoring_enabled SynapseSqlPoolExtendedAuditingPolicy#log_monitoring_enabled}.

---

##### `retention_in_days`<sup>Optional</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.retentionInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#retention_in_days SynapseSqlPoolExtendedAuditingPolicy#retention_in_days}.

---

##### `storage_account_access_key`<sup>Optional</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.storageAccountAccessKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#storage_account_access_key SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key}.

---

##### `storage_account_access_key_is_secondary`<sup>Optional</sup> <a name="storage_account_access_key_is_secondary" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.storageAccountAccessKeyIsSecondary"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#storage_account_access_key_is_secondary SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key_is_secondary}.

---

##### `storage_endpoint`<sup>Optional</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.storageEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#storage_endpoint SynapseSqlPoolExtendedAuditingPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts">SynapseSqlPoolExtendedAuditingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#timeouts SynapseSqlPoolExtendedAuditingPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetLogMonitoringEnabled">reset_log_monitoring_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetRetentionInDays">reset_retention_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetStorageAccountAccessKey">reset_storage_account_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary">reset_storage_account_access_key_is_secondary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetStorageEndpoint">reset_storage_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#create SynapseSqlPoolExtendedAuditingPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#delete SynapseSqlPoolExtendedAuditingPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#read SynapseSqlPoolExtendedAuditingPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#update SynapseSqlPoolExtendedAuditingPolicy#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_monitoring_enabled` <a name="reset_log_monitoring_enabled" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetLogMonitoringEnabled"></a>

```python
def reset_log_monitoring_enabled() -> None
```

##### `reset_retention_in_days` <a name="reset_retention_in_days" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetRetentionInDays"></a>

```python
def reset_retention_in_days() -> None
```

##### `reset_storage_account_access_key` <a name="reset_storage_account_access_key" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetStorageAccountAccessKey"></a>

```python
def reset_storage_account_access_key() -> None
```

##### `reset_storage_account_access_key_is_secondary` <a name="reset_storage_account_access_key_is_secondary" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary"></a>

```python
def reset_storage_account_access_key_is_secondary() -> None
```

##### `reset_storage_endpoint` <a name="reset_storage_endpoint" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetStorageEndpoint"></a>

```python
def reset_storage_endpoint() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_sql_pool_extended_auditing_policy

synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_sql_pool_extended_auditing_policy

synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_sql_pool_extended_auditing_policy

synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference">SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.logMonitoringEnabledInput">log_monitoring_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.retentionInDaysInput">retention_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.sqlPoolIdInput">sql_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKeyInput">storage_account_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput">storage_account_access_key_is_secondary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageEndpointInput">storage_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts">SynapseSqlPoolExtendedAuditingPolicyTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.logMonitoringEnabled">log_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.sqlPoolId">sql_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary">storage_account_access_key_is_secondary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.timeouts"></a>

```python
timeouts: SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference">SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_monitoring_enabled_input`<sup>Optional</sup> <a name="log_monitoring_enabled_input" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.logMonitoringEnabledInput"></a>

```python
log_monitoring_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_in_days_input`<sup>Optional</sup> <a name="retention_in_days_input" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.retentionInDaysInput"></a>

```python
retention_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sql_pool_id_input`<sup>Optional</sup> <a name="sql_pool_id_input" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.sqlPoolIdInput"></a>

```python
sql_pool_id_input: str
```

- *Type:* str

---

##### `storage_account_access_key_input`<sup>Optional</sup> <a name="storage_account_access_key_input" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKeyInput"></a>

```python
storage_account_access_key_input: str
```

- *Type:* str

---

##### `storage_account_access_key_is_secondary_input`<sup>Optional</sup> <a name="storage_account_access_key_is_secondary_input" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput"></a>

```python
storage_account_access_key_is_secondary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_endpoint_input`<sup>Optional</sup> <a name="storage_endpoint_input" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageEndpointInput"></a>

```python
storage_endpoint_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[SynapseSqlPoolExtendedAuditingPolicyTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts">SynapseSqlPoolExtendedAuditingPolicyTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_monitoring_enabled`<sup>Required</sup> <a name="log_monitoring_enabled" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.logMonitoringEnabled"></a>

```python
log_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sql_pool_id`<sup>Required</sup> <a name="sql_pool_id" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.sqlPoolId"></a>

```python
sql_pool_id: str
```

- *Type:* str

---

##### `storage_account_access_key`<sup>Required</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

---

##### `storage_account_access_key_is_secondary`<sup>Required</sup> <a name="storage_account_access_key_is_secondary" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary"></a>

```python
storage_account_access_key_is_secondary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_endpoint`<sup>Required</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageEndpoint"></a>

```python
storage_endpoint: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseSqlPoolExtendedAuditingPolicyConfig <a name="SynapseSqlPoolExtendedAuditingPolicyConfig" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_sql_pool_extended_auditing_policy

synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  sql_pool_id: str,
  id: str = None,
  log_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  retention_in_days: typing.Union[int, float] = None,
  storage_account_access_key: str = None,
  storage_account_access_key_is_secondary: typing.Union[bool, IResolvable] = None,
  storage_endpoint: str = None,
  timeouts: SynapseSqlPoolExtendedAuditingPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.sqlPoolId">sql_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#sql_pool_id SynapseSqlPoolExtendedAuditingPolicy#sql_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#id SynapseSqlPoolExtendedAuditingPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.logMonitoringEnabled">log_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#log_monitoring_enabled SynapseSqlPoolExtendedAuditingPolicy#log_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#retention_in_days SynapseSqlPoolExtendedAuditingPolicy#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#storage_account_access_key SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary">storage_account_access_key_is_secondary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#storage_account_access_key_is_secondary SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key_is_secondary}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#storage_endpoint SynapseSqlPoolExtendedAuditingPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts">SynapseSqlPoolExtendedAuditingPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `sql_pool_id`<sup>Required</sup> <a name="sql_pool_id" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.sqlPoolId"></a>

```python
sql_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#sql_pool_id SynapseSqlPoolExtendedAuditingPolicy#sql_pool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#id SynapseSqlPoolExtendedAuditingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_monitoring_enabled`<sup>Optional</sup> <a name="log_monitoring_enabled" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.logMonitoringEnabled"></a>

```python
log_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#log_monitoring_enabled SynapseSqlPoolExtendedAuditingPolicy#log_monitoring_enabled}.

---

##### `retention_in_days`<sup>Optional</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#retention_in_days SynapseSqlPoolExtendedAuditingPolicy#retention_in_days}.

---

##### `storage_account_access_key`<sup>Optional</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#storage_account_access_key SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key}.

---

##### `storage_account_access_key_is_secondary`<sup>Optional</sup> <a name="storage_account_access_key_is_secondary" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary"></a>

```python
storage_account_access_key_is_secondary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#storage_account_access_key_is_secondary SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key_is_secondary}.

---

##### `storage_endpoint`<sup>Optional</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.storageEndpoint"></a>

```python
storage_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#storage_endpoint SynapseSqlPoolExtendedAuditingPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.timeouts"></a>

```python
timeouts: SynapseSqlPoolExtendedAuditingPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts">SynapseSqlPoolExtendedAuditingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#timeouts SynapseSqlPoolExtendedAuditingPolicy#timeouts}

---

### SynapseSqlPoolExtendedAuditingPolicyTimeouts <a name="SynapseSqlPoolExtendedAuditingPolicyTimeouts" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_sql_pool_extended_auditing_policy

synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#create SynapseSqlPoolExtendedAuditingPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#delete SynapseSqlPoolExtendedAuditingPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#read SynapseSqlPoolExtendedAuditingPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#update SynapseSqlPoolExtendedAuditingPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#create SynapseSqlPoolExtendedAuditingPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#delete SynapseSqlPoolExtendedAuditingPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#read SynapseSqlPoolExtendedAuditingPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy#update SynapseSqlPoolExtendedAuditingPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference <a name="SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_sql_pool_extended_auditing_policy

synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts">SynapseSqlPoolExtendedAuditingPolicyTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SynapseSqlPoolExtendedAuditingPolicyTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts">SynapseSqlPoolExtendedAuditingPolicyTimeouts</a>, cdktf.IResolvable]

---



