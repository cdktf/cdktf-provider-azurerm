# `mssqlManagedInstanceSecurityAlertPolicy` Submodule <a name="`mssqlManagedInstanceSecurityAlertPolicy` Submodule" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlManagedInstanceSecurityAlertPolicy <a name="MssqlManagedInstanceSecurityAlertPolicy" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy azurerm_mssql_managed_instance_security_alert_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_security_alert_policy.MssqlManagedInstanceSecurityAlertPolicy;

MssqlManagedInstanceSecurityAlertPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .managedInstanceName(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .disabledAlerts(java.util.List<java.lang.String>)
//  .emailAccountAdminsEnabled(java.lang.Boolean)
//  .emailAccountAdminsEnabled(IResolvable)
//  .emailAddresses(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .retentionDays(java.lang.Number)
//  .storageAccountAccessKey(java.lang.String)
//  .storageEndpoint(java.lang.String)
//  .timeouts(MssqlManagedInstanceSecurityAlertPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.managedInstanceName">managedInstanceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#managed_instance_name MssqlManagedInstanceSecurityAlertPolicy#managed_instance_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#resource_group_name MssqlManagedInstanceSecurityAlertPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.disabledAlerts">disabledAlerts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#disabled_alerts MssqlManagedInstanceSecurityAlertPolicy#disabled_alerts}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.emailAccountAdminsEnabled">emailAccountAdminsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#email_account_admins_enabled MssqlManagedInstanceSecurityAlertPolicy#email_account_admins_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#email_addresses MssqlManagedInstanceSecurityAlertPolicy#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#enabled MssqlManagedInstanceSecurityAlertPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#id MssqlManagedInstanceSecurityAlertPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#retention_days MssqlManagedInstanceSecurityAlertPolicy#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#storage_account_access_key MssqlManagedInstanceSecurityAlertPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.storageEndpoint">storageEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#storage_endpoint MssqlManagedInstanceSecurityAlertPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts">MssqlManagedInstanceSecurityAlertPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedInstanceName`<sup>Required</sup> <a name="managedInstanceName" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.managedInstanceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#managed_instance_name MssqlManagedInstanceSecurityAlertPolicy#managed_instance_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#resource_group_name MssqlManagedInstanceSecurityAlertPolicy#resource_group_name}.

---

##### `disabledAlerts`<sup>Optional</sup> <a name="disabledAlerts" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.disabledAlerts"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#disabled_alerts MssqlManagedInstanceSecurityAlertPolicy#disabled_alerts}.

---

##### `emailAccountAdminsEnabled`<sup>Optional</sup> <a name="emailAccountAdminsEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.emailAccountAdminsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#email_account_admins_enabled MssqlManagedInstanceSecurityAlertPolicy#email_account_admins_enabled}.

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.emailAddresses"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#email_addresses MssqlManagedInstanceSecurityAlertPolicy#email_addresses}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#enabled MssqlManagedInstanceSecurityAlertPolicy#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#id MssqlManagedInstanceSecurityAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.retentionDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#retention_days MssqlManagedInstanceSecurityAlertPolicy#retention_days}.

---

##### `storageAccountAccessKey`<sup>Optional</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.storageAccountAccessKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#storage_account_access_key MssqlManagedInstanceSecurityAlertPolicy#storage_account_access_key}.

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.storageEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#storage_endpoint MssqlManagedInstanceSecurityAlertPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts">MssqlManagedInstanceSecurityAlertPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#timeouts MssqlManagedInstanceSecurityAlertPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetDisabledAlerts">resetDisabledAlerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetEmailAccountAdminsEnabled">resetEmailAccountAdminsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetStorageAccountAccessKey">resetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetStorageEndpoint">resetStorageEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.putTimeouts"></a>

```java
public void putTimeouts(MssqlManagedInstanceSecurityAlertPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts">MssqlManagedInstanceSecurityAlertPolicyTimeouts</a>

---

##### `resetDisabledAlerts` <a name="resetDisabledAlerts" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetDisabledAlerts"></a>

```java
public void resetDisabledAlerts()
```

##### `resetEmailAccountAdminsEnabled` <a name="resetEmailAccountAdminsEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetEmailAccountAdminsEnabled"></a>

```java
public void resetEmailAccountAdminsEnabled()
```

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetEmailAddresses"></a>

```java
public void resetEmailAddresses()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetRetentionDays"></a>

```java
public void resetRetentionDays()
```

##### `resetStorageAccountAccessKey` <a name="resetStorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetStorageAccountAccessKey"></a>

```java
public void resetStorageAccountAccessKey()
```

##### `resetStorageEndpoint` <a name="resetStorageEndpoint" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetStorageEndpoint"></a>

```java
public void resetStorageEndpoint()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlManagedInstanceSecurityAlertPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_security_alert_policy.MssqlManagedInstanceSecurityAlertPolicy;

MssqlManagedInstanceSecurityAlertPolicy.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_security_alert_policy.MssqlManagedInstanceSecurityAlertPolicy;

MssqlManagedInstanceSecurityAlertPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_security_alert_policy.MssqlManagedInstanceSecurityAlertPolicy;

MssqlManagedInstanceSecurityAlertPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_security_alert_policy.MssqlManagedInstanceSecurityAlertPolicy;

MssqlManagedInstanceSecurityAlertPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MssqlManagedInstanceSecurityAlertPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MssqlManagedInstanceSecurityAlertPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MssqlManagedInstanceSecurityAlertPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MssqlManagedInstanceSecurityAlertPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MssqlManagedInstanceSecurityAlertPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference">MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.disabledAlertsInput">disabledAlertsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.emailAccountAdminsEnabledInput">emailAccountAdminsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.emailAddressesInput">emailAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.managedInstanceNameInput">managedInstanceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.retentionDaysInput">retentionDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.storageAccountAccessKeyInput">storageAccountAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.storageEndpointInput">storageEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts">MssqlManagedInstanceSecurityAlertPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.disabledAlerts">disabledAlerts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.emailAccountAdminsEnabled">emailAccountAdminsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.managedInstanceName">managedInstanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.storageEndpoint">storageEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.timeouts"></a>

```java
public MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference">MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference</a>

---

##### `disabledAlertsInput`<sup>Optional</sup> <a name="disabledAlertsInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.disabledAlertsInput"></a>

```java
public java.util.List<java.lang.String> getDisabledAlertsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailAccountAdminsEnabledInput`<sup>Optional</sup> <a name="emailAccountAdminsEnabledInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.emailAccountAdminsEnabledInput"></a>

```java
public java.lang.Object getEmailAccountAdminsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.emailAddressesInput"></a>

```java
public java.util.List<java.lang.String> getEmailAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedInstanceNameInput`<sup>Optional</sup> <a name="managedInstanceNameInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.managedInstanceNameInput"></a>

```java
public java.lang.String getManagedInstanceNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.retentionDaysInput"></a>

```java
public java.lang.Number getRetentionDaysInput();
```

- *Type:* java.lang.Number

---

##### `storageAccountAccessKeyInput`<sup>Optional</sup> <a name="storageAccountAccessKeyInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.storageAccountAccessKeyInput"></a>

```java
public java.lang.String getStorageAccountAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `storageEndpointInput`<sup>Optional</sup> <a name="storageEndpointInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.storageEndpointInput"></a>

```java
public java.lang.String getStorageEndpointInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts">MssqlManagedInstanceSecurityAlertPolicyTimeouts</a>

---

##### `disabledAlerts`<sup>Required</sup> <a name="disabledAlerts" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.disabledAlerts"></a>

```java
public java.util.List<java.lang.String> getDisabledAlerts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailAccountAdminsEnabled`<sup>Required</sup> <a name="emailAccountAdminsEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.emailAccountAdminsEnabled"></a>

```java
public java.lang.Object getEmailAccountAdminsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedInstanceName`<sup>Required</sup> <a name="managedInstanceName" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.managedInstanceName"></a>

```java
public java.lang.String getManagedInstanceName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.storageAccountAccessKey"></a>

```java
public java.lang.String getStorageAccountAccessKey();
```

- *Type:* java.lang.String

---

##### `storageEndpoint`<sup>Required</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.storageEndpoint"></a>

```java
public java.lang.String getStorageEndpoint();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlManagedInstanceSecurityAlertPolicyConfig <a name="MssqlManagedInstanceSecurityAlertPolicyConfig" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_security_alert_policy.MssqlManagedInstanceSecurityAlertPolicyConfig;

MssqlManagedInstanceSecurityAlertPolicyConfig.builder()
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
    .managedInstanceName(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .disabledAlerts(java.util.List<java.lang.String>)
//  .emailAccountAdminsEnabled(java.lang.Boolean)
//  .emailAccountAdminsEnabled(IResolvable)
//  .emailAddresses(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .retentionDays(java.lang.Number)
//  .storageAccountAccessKey(java.lang.String)
//  .storageEndpoint(java.lang.String)
//  .timeouts(MssqlManagedInstanceSecurityAlertPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.managedInstanceName">managedInstanceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#managed_instance_name MssqlManagedInstanceSecurityAlertPolicy#managed_instance_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#resource_group_name MssqlManagedInstanceSecurityAlertPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.disabledAlerts">disabledAlerts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#disabled_alerts MssqlManagedInstanceSecurityAlertPolicy#disabled_alerts}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.emailAccountAdminsEnabled">emailAccountAdminsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#email_account_admins_enabled MssqlManagedInstanceSecurityAlertPolicy#email_account_admins_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#email_addresses MssqlManagedInstanceSecurityAlertPolicy#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#enabled MssqlManagedInstanceSecurityAlertPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#id MssqlManagedInstanceSecurityAlertPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#retention_days MssqlManagedInstanceSecurityAlertPolicy#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#storage_account_access_key MssqlManagedInstanceSecurityAlertPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.storageEndpoint">storageEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#storage_endpoint MssqlManagedInstanceSecurityAlertPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts">MssqlManagedInstanceSecurityAlertPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedInstanceName`<sup>Required</sup> <a name="managedInstanceName" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.managedInstanceName"></a>

```java
public java.lang.String getManagedInstanceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#managed_instance_name MssqlManagedInstanceSecurityAlertPolicy#managed_instance_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#resource_group_name MssqlManagedInstanceSecurityAlertPolicy#resource_group_name}.

---

##### `disabledAlerts`<sup>Optional</sup> <a name="disabledAlerts" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.disabledAlerts"></a>

```java
public java.util.List<java.lang.String> getDisabledAlerts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#disabled_alerts MssqlManagedInstanceSecurityAlertPolicy#disabled_alerts}.

---

##### `emailAccountAdminsEnabled`<sup>Optional</sup> <a name="emailAccountAdminsEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.emailAccountAdminsEnabled"></a>

```java
public java.lang.Object getEmailAccountAdminsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#email_account_admins_enabled MssqlManagedInstanceSecurityAlertPolicy#email_account_admins_enabled}.

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#email_addresses MssqlManagedInstanceSecurityAlertPolicy#email_addresses}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#enabled MssqlManagedInstanceSecurityAlertPolicy#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#id MssqlManagedInstanceSecurityAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#retention_days MssqlManagedInstanceSecurityAlertPolicy#retention_days}.

---

##### `storageAccountAccessKey`<sup>Optional</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.storageAccountAccessKey"></a>

```java
public java.lang.String getStorageAccountAccessKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#storage_account_access_key MssqlManagedInstanceSecurityAlertPolicy#storage_account_access_key}.

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.storageEndpoint"></a>

```java
public java.lang.String getStorageEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#storage_endpoint MssqlManagedInstanceSecurityAlertPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyConfig.property.timeouts"></a>

```java
public MssqlManagedInstanceSecurityAlertPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts">MssqlManagedInstanceSecurityAlertPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#timeouts MssqlManagedInstanceSecurityAlertPolicy#timeouts}

---

### MssqlManagedInstanceSecurityAlertPolicyTimeouts <a name="MssqlManagedInstanceSecurityAlertPolicyTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_security_alert_policy.MssqlManagedInstanceSecurityAlertPolicyTimeouts;

MssqlManagedInstanceSecurityAlertPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#create MssqlManagedInstanceSecurityAlertPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#delete MssqlManagedInstanceSecurityAlertPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#read MssqlManagedInstanceSecurityAlertPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#update MssqlManagedInstanceSecurityAlertPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#create MssqlManagedInstanceSecurityAlertPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#delete MssqlManagedInstanceSecurityAlertPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#read MssqlManagedInstanceSecurityAlertPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mssql_managed_instance_security_alert_policy#update MssqlManagedInstanceSecurityAlertPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference <a name="MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_security_alert_policy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference;

new MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts">MssqlManagedInstanceSecurityAlertPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceSecurityAlertPolicy.MssqlManagedInstanceSecurityAlertPolicyTimeouts">MssqlManagedInstanceSecurityAlertPolicyTimeouts</a>

---



