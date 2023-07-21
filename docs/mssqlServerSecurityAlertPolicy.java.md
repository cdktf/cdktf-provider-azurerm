# `azurerm_mssql_server_security_alert_policy`

Refer to the Terraform Registory for docs: [`azurerm_mssql_server_security_alert_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy).

# `mssqlServerSecurityAlertPolicy` Submodule <a name="`mssqlServerSecurityAlertPolicy` Submodule" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlServerSecurityAlertPolicy <a name="MssqlServerSecurityAlertPolicy" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy azurerm_mssql_server_security_alert_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_server_security_alert_policy.MssqlServerSecurityAlertPolicy;

MssqlServerSecurityAlertPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .resourceGroupName(java.lang.String)
    .serverName(java.lang.String)
    .state(java.lang.String)
//  .disabledAlerts(java.util.List<java.lang.String>)
//  .emailAccountAdmins(java.lang.Boolean)
//  .emailAccountAdmins(IResolvable)
//  .emailAddresses(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .retentionDays(java.lang.Number)
//  .storageAccountAccessKey(java.lang.String)
//  .storageEndpoint(java.lang.String)
//  .timeouts(MssqlServerSecurityAlertPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#resource_group_name MssqlServerSecurityAlertPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#server_name MssqlServerSecurityAlertPolicy#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#state MssqlServerSecurityAlertPolicy#state}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.disabledAlerts">disabledAlerts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#disabled_alerts MssqlServerSecurityAlertPolicy#disabled_alerts}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.emailAccountAdmins">emailAccountAdmins</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#email_account_admins MssqlServerSecurityAlertPolicy#email_account_admins}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#email_addresses MssqlServerSecurityAlertPolicy#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#id MssqlServerSecurityAlertPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#retention_days MssqlServerSecurityAlertPolicy#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#storage_account_access_key MssqlServerSecurityAlertPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.storageEndpoint">storageEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#storage_endpoint MssqlServerSecurityAlertPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts">MssqlServerSecurityAlertPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#resource_group_name MssqlServerSecurityAlertPolicy#resource_group_name}.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.serverName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#server_name MssqlServerSecurityAlertPolicy#server_name}.

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#state MssqlServerSecurityAlertPolicy#state}.

---

##### `disabledAlerts`<sup>Optional</sup> <a name="disabledAlerts" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.disabledAlerts"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#disabled_alerts MssqlServerSecurityAlertPolicy#disabled_alerts}.

---

##### `emailAccountAdmins`<sup>Optional</sup> <a name="emailAccountAdmins" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.emailAccountAdmins"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#email_account_admins MssqlServerSecurityAlertPolicy#email_account_admins}.

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.emailAddresses"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#email_addresses MssqlServerSecurityAlertPolicy#email_addresses}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#id MssqlServerSecurityAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.retentionDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#retention_days MssqlServerSecurityAlertPolicy#retention_days}.

---

##### `storageAccountAccessKey`<sup>Optional</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.storageAccountAccessKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#storage_account_access_key MssqlServerSecurityAlertPolicy#storage_account_access_key}.

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.storageEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#storage_endpoint MssqlServerSecurityAlertPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts">MssqlServerSecurityAlertPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#timeouts MssqlServerSecurityAlertPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetDisabledAlerts">resetDisabledAlerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetEmailAccountAdmins">resetEmailAccountAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetStorageAccountAccessKey">resetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetStorageEndpoint">resetStorageEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.putTimeouts"></a>

```java
public void putTimeouts(MssqlServerSecurityAlertPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts">MssqlServerSecurityAlertPolicyTimeouts</a>

---

##### `resetDisabledAlerts` <a name="resetDisabledAlerts" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetDisabledAlerts"></a>

```java
public void resetDisabledAlerts()
```

##### `resetEmailAccountAdmins` <a name="resetEmailAccountAdmins" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetEmailAccountAdmins"></a>

```java
public void resetEmailAccountAdmins()
```

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetEmailAddresses"></a>

```java
public void resetEmailAddresses()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetRetentionDays"></a>

```java
public void resetRetentionDays()
```

##### `resetStorageAccountAccessKey` <a name="resetStorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetStorageAccountAccessKey"></a>

```java
public void resetStorageAccountAccessKey()
```

##### `resetStorageEndpoint` <a name="resetStorageEndpoint" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetStorageEndpoint"></a>

```java
public void resetStorageEndpoint()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_server_security_alert_policy.MssqlServerSecurityAlertPolicy;

MssqlServerSecurityAlertPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_server_security_alert_policy.MssqlServerSecurityAlertPolicy;

MssqlServerSecurityAlertPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_server_security_alert_policy.MssqlServerSecurityAlertPolicy;

MssqlServerSecurityAlertPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference">MssqlServerSecurityAlertPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.disabledAlertsInput">disabledAlertsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAccountAdminsInput">emailAccountAdminsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAddressesInput">emailAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.retentionDaysInput">retentionDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageAccountAccessKeyInput">storageAccountAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageEndpointInput">storageEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts">MssqlServerSecurityAlertPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.disabledAlerts">disabledAlerts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAccountAdmins">emailAccountAdmins</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageEndpoint">storageEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.timeouts"></a>

```java
public MssqlServerSecurityAlertPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference">MssqlServerSecurityAlertPolicyTimeoutsOutputReference</a>

---

##### `disabledAlertsInput`<sup>Optional</sup> <a name="disabledAlertsInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.disabledAlertsInput"></a>

```java
public java.util.List<java.lang.String> getDisabledAlertsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailAccountAdminsInput`<sup>Optional</sup> <a name="emailAccountAdminsInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAccountAdminsInput"></a>

```java
public java.lang.Object getEmailAccountAdminsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAddressesInput"></a>

```java
public java.util.List<java.lang.String> getEmailAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.retentionDaysInput"></a>

```java
public java.lang.Number getRetentionDaysInput();
```

- *Type:* java.lang.Number

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `storageAccountAccessKeyInput`<sup>Optional</sup> <a name="storageAccountAccessKeyInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageAccountAccessKeyInput"></a>

```java
public java.lang.String getStorageAccountAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `storageEndpointInput`<sup>Optional</sup> <a name="storageEndpointInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageEndpointInput"></a>

```java
public java.lang.String getStorageEndpointInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts">MssqlServerSecurityAlertPolicyTimeouts</a>

---

##### `disabledAlerts`<sup>Required</sup> <a name="disabledAlerts" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.disabledAlerts"></a>

```java
public java.util.List<java.lang.String> getDisabledAlerts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailAccountAdmins`<sup>Required</sup> <a name="emailAccountAdmins" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAccountAdmins"></a>

```java
public java.lang.Object getEmailAccountAdmins();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageAccountAccessKey"></a>

```java
public java.lang.String getStorageAccountAccessKey();
```

- *Type:* java.lang.String

---

##### `storageEndpoint`<sup>Required</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageEndpoint"></a>

```java
public java.lang.String getStorageEndpoint();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlServerSecurityAlertPolicyConfig <a name="MssqlServerSecurityAlertPolicyConfig" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_server_security_alert_policy.MssqlServerSecurityAlertPolicyConfig;

MssqlServerSecurityAlertPolicyConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .resourceGroupName(java.lang.String)
    .serverName(java.lang.String)
    .state(java.lang.String)
//  .disabledAlerts(java.util.List<java.lang.String>)
//  .emailAccountAdmins(java.lang.Boolean)
//  .emailAccountAdmins(IResolvable)
//  .emailAddresses(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .retentionDays(java.lang.Number)
//  .storageAccountAccessKey(java.lang.String)
//  .storageEndpoint(java.lang.String)
//  .timeouts(MssqlServerSecurityAlertPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#resource_group_name MssqlServerSecurityAlertPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#server_name MssqlServerSecurityAlertPolicy#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#state MssqlServerSecurityAlertPolicy#state}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.disabledAlerts">disabledAlerts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#disabled_alerts MssqlServerSecurityAlertPolicy#disabled_alerts}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.emailAccountAdmins">emailAccountAdmins</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#email_account_admins MssqlServerSecurityAlertPolicy#email_account_admins}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#email_addresses MssqlServerSecurityAlertPolicy#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#id MssqlServerSecurityAlertPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#retention_days MssqlServerSecurityAlertPolicy#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#storage_account_access_key MssqlServerSecurityAlertPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.storageEndpoint">storageEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#storage_endpoint MssqlServerSecurityAlertPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts">MssqlServerSecurityAlertPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#resource_group_name MssqlServerSecurityAlertPolicy#resource_group_name}.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#server_name MssqlServerSecurityAlertPolicy#server_name}.

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#state MssqlServerSecurityAlertPolicy#state}.

---

##### `disabledAlerts`<sup>Optional</sup> <a name="disabledAlerts" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.disabledAlerts"></a>

```java
public java.util.List<java.lang.String> getDisabledAlerts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#disabled_alerts MssqlServerSecurityAlertPolicy#disabled_alerts}.

---

##### `emailAccountAdmins`<sup>Optional</sup> <a name="emailAccountAdmins" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.emailAccountAdmins"></a>

```java
public java.lang.Object getEmailAccountAdmins();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#email_account_admins MssqlServerSecurityAlertPolicy#email_account_admins}.

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#email_addresses MssqlServerSecurityAlertPolicy#email_addresses}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#id MssqlServerSecurityAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#retention_days MssqlServerSecurityAlertPolicy#retention_days}.

---

##### `storageAccountAccessKey`<sup>Optional</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.storageAccountAccessKey"></a>

```java
public java.lang.String getStorageAccountAccessKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#storage_account_access_key MssqlServerSecurityAlertPolicy#storage_account_access_key}.

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.storageEndpoint"></a>

```java
public java.lang.String getStorageEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#storage_endpoint MssqlServerSecurityAlertPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.timeouts"></a>

```java
public MssqlServerSecurityAlertPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts">MssqlServerSecurityAlertPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#timeouts MssqlServerSecurityAlertPolicy#timeouts}

---

### MssqlServerSecurityAlertPolicyTimeouts <a name="MssqlServerSecurityAlertPolicyTimeouts" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_server_security_alert_policy.MssqlServerSecurityAlertPolicyTimeouts;

MssqlServerSecurityAlertPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#create MssqlServerSecurityAlertPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#delete MssqlServerSecurityAlertPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#read MssqlServerSecurityAlertPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#update MssqlServerSecurityAlertPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#create MssqlServerSecurityAlertPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#delete MssqlServerSecurityAlertPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#read MssqlServerSecurityAlertPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mssql_server_security_alert_policy#update MssqlServerSecurityAlertPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlServerSecurityAlertPolicyTimeoutsOutputReference <a name="MssqlServerSecurityAlertPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_server_security_alert_policy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference;

new MssqlServerSecurityAlertPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts">MssqlServerSecurityAlertPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts">MssqlServerSecurityAlertPolicyTimeouts</a>

---



