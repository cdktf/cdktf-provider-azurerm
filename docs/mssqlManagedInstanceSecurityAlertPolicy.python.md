# `azurerm_mssql_managed_instance_security_alert_policy`

Refer to the Terraform Registory for docs: [`azurerm_mssql_managed_instance_security_alert_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy).

# `mssqlManagedInstanceSecurityAlertPolicy` Submodule <a name="`mssqlManagedInstanceSecurityAlertPolicy` Submodule" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlManagedInstanceSecurityAlertPolicy <a name="MssqlManagedInstanceSecurityAlertPolicy" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy azurerm_mssql_managed_instance_security_alert_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_managed_instance_security_alert_policy

mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_name: str,
  resource_group_name: str,
  disabled_alerts: typing.List[str] = None,
  email_account_admins_enabled: typing.Union[bool, IResolvable] = None,
  email_addresses: typing.List[str] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  retention_days: typing.Union[int, float] = None,
  storage_account_access_key: str = None,
  storage_endpoint: str = None,
  timeouts: MssqlManagedInstanceSecurityAlertPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.managedInstanceName">managed_instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#managed_instance_name MssqlManagedInstanceSecurityAlertPolicy#managed_instance_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#resource_group_name MssqlManagedInstanceSecurityAlertPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.disabledAlerts">disabled_alerts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#disabled_alerts MssqlManagedInstanceSecurityAlertPolicy#disabled_alerts}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.emailAccountAdminsEnabled">email_account_admins_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#email_account_admins_enabled MssqlManagedInstanceSecurityAlertPolicy#email_account_admins_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#email_addresses MssqlManagedInstanceSecurityAlertPolicy#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#enabled MssqlManagedInstanceSecurityAlertPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#id MssqlManagedInstanceSecurityAlertPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#retention_days MssqlManagedInstanceSecurityAlertPolicy#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#storage_account_access_key MssqlManagedInstanceSecurityAlertPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#storage_endpoint MssqlManagedInstanceSecurityAlertPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts">MssqlManagedInstanceSecurityAlertPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_name`<sup>Required</sup> <a name="managed_instance_name" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.managedInstanceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#managed_instance_name MssqlManagedInstanceSecurityAlertPolicy#managed_instance_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#resource_group_name MssqlManagedInstanceSecurityAlertPolicy#resource_group_name}.

---

##### `disabled_alerts`<sup>Optional</sup> <a name="disabled_alerts" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.disabledAlerts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#disabled_alerts MssqlManagedInstanceSecurityAlertPolicy#disabled_alerts}.

---

##### `email_account_admins_enabled`<sup>Optional</sup> <a name="email_account_admins_enabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.emailAccountAdminsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#email_account_admins_enabled MssqlManagedInstanceSecurityAlertPolicy#email_account_admins_enabled}.

---

##### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.emailAddresses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#email_addresses MssqlManagedInstanceSecurityAlertPolicy#email_addresses}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#enabled MssqlManagedInstanceSecurityAlertPolicy#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#id MssqlManagedInstanceSecurityAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_days`<sup>Optional</sup> <a name="retention_days" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.retentionDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#retention_days MssqlManagedInstanceSecurityAlertPolicy#retention_days}.

---

##### `storage_account_access_key`<sup>Optional</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.storageAccountAccessKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#storage_account_access_key MssqlManagedInstanceSecurityAlertPolicy#storage_account_access_key}.

---

##### `storage_endpoint`<sup>Optional</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.storageEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#storage_endpoint MssqlManagedInstanceSecurityAlertPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts">MssqlManagedInstanceSecurityAlertPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#timeouts MssqlManagedInstanceSecurityAlertPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetDisabledAlerts">reset_disabled_alerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetEmailAccountAdminsEnabled">reset_email_account_admins_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetEmailAddresses">reset_email_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetRetentionDays">reset_retention_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetStorageAccountAccessKey">reset_storage_account_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetStorageEndpoint">reset_storage_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#create MssqlManagedInstanceSecurityAlertPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#delete MssqlManagedInstanceSecurityAlertPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#read MssqlManagedInstanceSecurityAlertPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#update MssqlManagedInstanceSecurityAlertPolicy#update}.

---

##### `reset_disabled_alerts` <a name="reset_disabled_alerts" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetDisabledAlerts"></a>

```python
def reset_disabled_alerts() -> None
```

##### `reset_email_account_admins_enabled` <a name="reset_email_account_admins_enabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetEmailAccountAdminsEnabled"></a>

```python
def reset_email_account_admins_enabled() -> None
```

##### `reset_email_addresses` <a name="reset_email_addresses" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetEmailAddresses"></a>

```python
def reset_email_addresses() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_retention_days` <a name="reset_retention_days" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetRetentionDays"></a>

```python
def reset_retention_days() -> None
```

##### `reset_storage_account_access_key` <a name="reset_storage_account_access_key" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetStorageAccountAccessKey"></a>

```python
def reset_storage_account_access_key() -> None
```

##### `reset_storage_endpoint` <a name="reset_storage_endpoint" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetStorageEndpoint"></a>

```python
def reset_storage_endpoint() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_managed_instance_security_alert_policy

mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_managed_instance_security_alert_policy

mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_managed_instance_security_alert_policy

mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference">MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.disabledAlertsInput">disabled_alerts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.emailAccountAdminsEnabledInput">email_account_admins_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.emailAddressesInput">email_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.managedInstanceNameInput">managed_instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.retentionDaysInput">retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.storageAccountAccessKeyInput">storage_account_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.storageEndpointInput">storage_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts">MssqlManagedInstanceSecurityAlertPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.disabledAlerts">disabled_alerts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.emailAccountAdminsEnabled">email_account_admins_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.managedInstanceName">managed_instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.timeouts"></a>

```python
timeouts: MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference">MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference</a>

---

##### `disabled_alerts_input`<sup>Optional</sup> <a name="disabled_alerts_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.disabledAlertsInput"></a>

```python
disabled_alerts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_account_admins_enabled_input`<sup>Optional</sup> <a name="email_account_admins_enabled_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.emailAccountAdminsEnabledInput"></a>

```python
email_account_admins_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_addresses_input`<sup>Optional</sup> <a name="email_addresses_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.emailAddressesInput"></a>

```python
email_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_instance_name_input`<sup>Optional</sup> <a name="managed_instance_name_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.managedInstanceNameInput"></a>

```python
managed_instance_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `retention_days_input`<sup>Optional</sup> <a name="retention_days_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.retentionDaysInput"></a>

```python
retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_access_key_input`<sup>Optional</sup> <a name="storage_account_access_key_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.storageAccountAccessKeyInput"></a>

```python
storage_account_access_key_input: str
```

- *Type:* str

---

##### `storage_endpoint_input`<sup>Optional</sup> <a name="storage_endpoint_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.storageEndpointInput"></a>

```python
storage_endpoint_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MssqlManagedInstanceSecurityAlertPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts">MssqlManagedInstanceSecurityAlertPolicyTimeouts</a>]

---

##### `disabled_alerts`<sup>Required</sup> <a name="disabled_alerts" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.disabledAlerts"></a>

```python
disabled_alerts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_account_admins_enabled`<sup>Required</sup> <a name="email_account_admins_enabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.emailAccountAdminsEnabled"></a>

```python
email_account_admins_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_addresses`<sup>Required</sup> <a name="email_addresses" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_name`<sup>Required</sup> <a name="managed_instance_name" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.managedInstanceName"></a>

```python
managed_instance_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_access_key`<sup>Required</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

---

##### `storage_endpoint`<sup>Required</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.storageEndpoint"></a>

```python
storage_endpoint: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlManagedInstanceSecurityAlertPolicyConfig <a name="MssqlManagedInstanceSecurityAlertPolicyConfig" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_managed_instance_security_alert_policy

mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_name: str,
  resource_group_name: str,
  disabled_alerts: typing.List[str] = None,
  email_account_admins_enabled: typing.Union[bool, IResolvable] = None,
  email_addresses: typing.List[str] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  retention_days: typing.Union[int, float] = None,
  storage_account_access_key: str = None,
  storage_endpoint: str = None,
  timeouts: MssqlManagedInstanceSecurityAlertPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.managedInstanceName">managed_instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#managed_instance_name MssqlManagedInstanceSecurityAlertPolicy#managed_instance_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#resource_group_name MssqlManagedInstanceSecurityAlertPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.disabledAlerts">disabled_alerts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#disabled_alerts MssqlManagedInstanceSecurityAlertPolicy#disabled_alerts}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.emailAccountAdminsEnabled">email_account_admins_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#email_account_admins_enabled MssqlManagedInstanceSecurityAlertPolicy#email_account_admins_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#email_addresses MssqlManagedInstanceSecurityAlertPolicy#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#enabled MssqlManagedInstanceSecurityAlertPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#id MssqlManagedInstanceSecurityAlertPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#retention_days MssqlManagedInstanceSecurityAlertPolicy#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#storage_account_access_key MssqlManagedInstanceSecurityAlertPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#storage_endpoint MssqlManagedInstanceSecurityAlertPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts">MssqlManagedInstanceSecurityAlertPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_name`<sup>Required</sup> <a name="managed_instance_name" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.managedInstanceName"></a>

```python
managed_instance_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#managed_instance_name MssqlManagedInstanceSecurityAlertPolicy#managed_instance_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#resource_group_name MssqlManagedInstanceSecurityAlertPolicy#resource_group_name}.

---

##### `disabled_alerts`<sup>Optional</sup> <a name="disabled_alerts" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.disabledAlerts"></a>

```python
disabled_alerts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#disabled_alerts MssqlManagedInstanceSecurityAlertPolicy#disabled_alerts}.

---

##### `email_account_admins_enabled`<sup>Optional</sup> <a name="email_account_admins_enabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.emailAccountAdminsEnabled"></a>

```python
email_account_admins_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#email_account_admins_enabled MssqlManagedInstanceSecurityAlertPolicy#email_account_admins_enabled}.

---

##### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#email_addresses MssqlManagedInstanceSecurityAlertPolicy#email_addresses}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#enabled MssqlManagedInstanceSecurityAlertPolicy#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#id MssqlManagedInstanceSecurityAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_days`<sup>Optional</sup> <a name="retention_days" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#retention_days MssqlManagedInstanceSecurityAlertPolicy#retention_days}.

---

##### `storage_account_access_key`<sup>Optional</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#storage_account_access_key MssqlManagedInstanceSecurityAlertPolicy#storage_account_access_key}.

---

##### `storage_endpoint`<sup>Optional</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.storageEndpoint"></a>

```python
storage_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#storage_endpoint MssqlManagedInstanceSecurityAlertPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.timeouts"></a>

```python
timeouts: MssqlManagedInstanceSecurityAlertPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts">MssqlManagedInstanceSecurityAlertPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#timeouts MssqlManagedInstanceSecurityAlertPolicy#timeouts}

---

### MssqlManagedInstanceSecurityAlertPolicyTimeouts <a name="MssqlManagedInstanceSecurityAlertPolicyTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_managed_instance_security_alert_policy

mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#create MssqlManagedInstanceSecurityAlertPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#delete MssqlManagedInstanceSecurityAlertPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#read MssqlManagedInstanceSecurityAlertPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#update MssqlManagedInstanceSecurityAlertPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#create MssqlManagedInstanceSecurityAlertPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#delete MssqlManagedInstanceSecurityAlertPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#read MssqlManagedInstanceSecurityAlertPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_managed_instance_security_alert_policy#update MssqlManagedInstanceSecurityAlertPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference <a name="MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_managed_instance_security_alert_policy

mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts">MssqlManagedInstanceSecurityAlertPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MssqlManagedInstanceSecurityAlertPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts">MssqlManagedInstanceSecurityAlertPolicyTimeouts</a>]

---



