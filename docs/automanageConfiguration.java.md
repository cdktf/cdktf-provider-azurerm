# `automanageConfiguration` Submodule <a name="`automanageConfiguration` Submodule" id="@cdktf/provider-azurerm.automanageConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomanageConfiguration <a name="AutomanageConfiguration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration azurerm_automanage_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfiguration;

AutomanageConfiguration.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .antimalware(AutomanageConfigurationAntimalware)
//  .automationAccountEnabled(java.lang.Boolean)
//  .automationAccountEnabled(IResolvable)
//  .azureSecurityBaseline(AutomanageConfigurationAzureSecurityBaseline)
//  .backup(AutomanageConfigurationBackup)
//  .bootDiagnosticsEnabled(java.lang.Boolean)
//  .bootDiagnosticsEnabled(IResolvable)
//  .defenderForCloudEnabled(java.lang.Boolean)
//  .defenderForCloudEnabled(IResolvable)
//  .guestConfigurationEnabled(java.lang.Boolean)
//  .guestConfigurationEnabled(IResolvable)
//  .id(java.lang.String)
//  .logAnalyticsEnabled(java.lang.Boolean)
//  .logAnalyticsEnabled(IResolvable)
//  .statusChangeAlertEnabled(java.lang.Boolean)
//  .statusChangeAlertEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AutomanageConfigurationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#location AutomanageConfiguration#location}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#name AutomanageConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#resource_group_name AutomanageConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.antimalware">antimalware</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a></code> | antimalware block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.automationAccountEnabled">automationAccountEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#automation_account_enabled AutomanageConfiguration#automation_account_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.azureSecurityBaseline">azureSecurityBaseline</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a></code> | azure_security_baseline block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.bootDiagnosticsEnabled">bootDiagnosticsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#boot_diagnostics_enabled AutomanageConfiguration#boot_diagnostics_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.defenderForCloudEnabled">defenderForCloudEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#defender_for_cloud_enabled AutomanageConfiguration#defender_for_cloud_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.guestConfigurationEnabled">guestConfigurationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#guest_configuration_enabled AutomanageConfiguration#guest_configuration_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#id AutomanageConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.logAnalyticsEnabled">logAnalyticsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#log_analytics_enabled AutomanageConfiguration#log_analytics_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.statusChangeAlertEnabled">statusChangeAlertEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#status_change_alert_enabled AutomanageConfiguration#status_change_alert_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#tags AutomanageConfiguration#tags}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts">AutomanageConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#location AutomanageConfiguration#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#name AutomanageConfiguration#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#resource_group_name AutomanageConfiguration#resource_group_name}.

---

##### `antimalware`<sup>Optional</sup> <a name="antimalware" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.antimalware"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a>

antimalware block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#antimalware AutomanageConfiguration#antimalware}

---

##### `automationAccountEnabled`<sup>Optional</sup> <a name="automationAccountEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.automationAccountEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#automation_account_enabled AutomanageConfiguration#automation_account_enabled}.

---

##### `azureSecurityBaseline`<sup>Optional</sup> <a name="azureSecurityBaseline" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.azureSecurityBaseline"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a>

azure_security_baseline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#azure_security_baseline AutomanageConfiguration#azure_security_baseline}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.backup"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#backup AutomanageConfiguration#backup}

---

##### `bootDiagnosticsEnabled`<sup>Optional</sup> <a name="bootDiagnosticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.bootDiagnosticsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#boot_diagnostics_enabled AutomanageConfiguration#boot_diagnostics_enabled}.

---

##### `defenderForCloudEnabled`<sup>Optional</sup> <a name="defenderForCloudEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.defenderForCloudEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#defender_for_cloud_enabled AutomanageConfiguration#defender_for_cloud_enabled}.

---

##### `guestConfigurationEnabled`<sup>Optional</sup> <a name="guestConfigurationEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.guestConfigurationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#guest_configuration_enabled AutomanageConfiguration#guest_configuration_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#id AutomanageConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logAnalyticsEnabled`<sup>Optional</sup> <a name="logAnalyticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.logAnalyticsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#log_analytics_enabled AutomanageConfiguration#log_analytics_enabled}.

---

##### `statusChangeAlertEnabled`<sup>Optional</sup> <a name="statusChangeAlertEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.statusChangeAlertEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#status_change_alert_enabled AutomanageConfiguration#status_change_alert_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#tags AutomanageConfiguration#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts">AutomanageConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#timeouts AutomanageConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAntimalware">putAntimalware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAzureSecurityBaseline">putAzureSecurityBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putBackup">putBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAntimalware">resetAntimalware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAutomationAccountEnabled">resetAutomationAccountEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAzureSecurityBaseline">resetAzureSecurityBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetBackup">resetBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetBootDiagnosticsEnabled">resetBootDiagnosticsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetDefenderForCloudEnabled">resetDefenderForCloudEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetGuestConfigurationEnabled">resetGuestConfigurationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetLogAnalyticsEnabled">resetLogAnalyticsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetStatusChangeAlertEnabled">resetStatusChangeAlertEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAntimalware` <a name="putAntimalware" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAntimalware"></a>

```java
public void putAntimalware(AutomanageConfigurationAntimalware value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAntimalware.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a>

---

##### `putAzureSecurityBaseline` <a name="putAzureSecurityBaseline" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAzureSecurityBaseline"></a>

```java
public void putAzureSecurityBaseline(AutomanageConfigurationAzureSecurityBaseline value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAzureSecurityBaseline.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a>

---

##### `putBackup` <a name="putBackup" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putBackup"></a>

```java
public void putBackup(AutomanageConfigurationBackup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putTimeouts"></a>

```java
public void putTimeouts(AutomanageConfigurationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts">AutomanageConfigurationTimeouts</a>

---

##### `resetAntimalware` <a name="resetAntimalware" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAntimalware"></a>

```java
public void resetAntimalware()
```

##### `resetAutomationAccountEnabled` <a name="resetAutomationAccountEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAutomationAccountEnabled"></a>

```java
public void resetAutomationAccountEnabled()
```

##### `resetAzureSecurityBaseline` <a name="resetAzureSecurityBaseline" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAzureSecurityBaseline"></a>

```java
public void resetAzureSecurityBaseline()
```

##### `resetBackup` <a name="resetBackup" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetBackup"></a>

```java
public void resetBackup()
```

##### `resetBootDiagnosticsEnabled` <a name="resetBootDiagnosticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetBootDiagnosticsEnabled"></a>

```java
public void resetBootDiagnosticsEnabled()
```

##### `resetDefenderForCloudEnabled` <a name="resetDefenderForCloudEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetDefenderForCloudEnabled"></a>

```java
public void resetDefenderForCloudEnabled()
```

##### `resetGuestConfigurationEnabled` <a name="resetGuestConfigurationEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetGuestConfigurationEnabled"></a>

```java
public void resetGuestConfigurationEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetLogAnalyticsEnabled` <a name="resetLogAnalyticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetLogAnalyticsEnabled"></a>

```java
public void resetLogAnalyticsEnabled()
```

##### `resetStatusChangeAlertEnabled` <a name="resetStatusChangeAlertEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetStatusChangeAlertEnabled"></a>

```java
public void resetStatusChangeAlertEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AutomanageConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfiguration;

AutomanageConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfiguration;

AutomanageConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfiguration;

AutomanageConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfiguration;

AutomanageConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AutomanageConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AutomanageConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AutomanageConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AutomanageConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AutomanageConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.antimalware">antimalware</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference">AutomanageConfigurationAntimalwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.azureSecurityBaseline">azureSecurityBaseline</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference">AutomanageConfigurationAzureSecurityBaselineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference">AutomanageConfigurationBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference">AutomanageConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.antimalwareInput">antimalwareInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.automationAccountEnabledInput">automationAccountEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.azureSecurityBaselineInput">azureSecurityBaselineInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.backupInput">backupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.bootDiagnosticsEnabledInput">bootDiagnosticsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.defenderForCloudEnabledInput">defenderForCloudEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.guestConfigurationEnabledInput">guestConfigurationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.logAnalyticsEnabledInput">logAnalyticsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.statusChangeAlertEnabledInput">statusChangeAlertEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts">AutomanageConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.automationAccountEnabled">automationAccountEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.bootDiagnosticsEnabled">bootDiagnosticsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.defenderForCloudEnabled">defenderForCloudEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.guestConfigurationEnabled">guestConfigurationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.logAnalyticsEnabled">logAnalyticsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.statusChangeAlertEnabled">statusChangeAlertEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `antimalware`<sup>Required</sup> <a name="antimalware" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.antimalware"></a>

```java
public AutomanageConfigurationAntimalwareOutputReference getAntimalware();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference">AutomanageConfigurationAntimalwareOutputReference</a>

---

##### `azureSecurityBaseline`<sup>Required</sup> <a name="azureSecurityBaseline" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.azureSecurityBaseline"></a>

```java
public AutomanageConfigurationAzureSecurityBaselineOutputReference getAzureSecurityBaseline();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference">AutomanageConfigurationAzureSecurityBaselineOutputReference</a>

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.backup"></a>

```java
public AutomanageConfigurationBackupOutputReference getBackup();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference">AutomanageConfigurationBackupOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.timeouts"></a>

```java
public AutomanageConfigurationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference">AutomanageConfigurationTimeoutsOutputReference</a>

---

##### `antimalwareInput`<sup>Optional</sup> <a name="antimalwareInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.antimalwareInput"></a>

```java
public AutomanageConfigurationAntimalware getAntimalwareInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a>

---

##### `automationAccountEnabledInput`<sup>Optional</sup> <a name="automationAccountEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.automationAccountEnabledInput"></a>

```java
public java.lang.Object getAutomationAccountEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `azureSecurityBaselineInput`<sup>Optional</sup> <a name="azureSecurityBaselineInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.azureSecurityBaselineInput"></a>

```java
public AutomanageConfigurationAzureSecurityBaseline getAzureSecurityBaselineInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a>

---

##### `backupInput`<sup>Optional</sup> <a name="backupInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.backupInput"></a>

```java
public AutomanageConfigurationBackup getBackupInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a>

---

##### `bootDiagnosticsEnabledInput`<sup>Optional</sup> <a name="bootDiagnosticsEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.bootDiagnosticsEnabledInput"></a>

```java
public java.lang.Object getBootDiagnosticsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defenderForCloudEnabledInput`<sup>Optional</sup> <a name="defenderForCloudEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.defenderForCloudEnabledInput"></a>

```java
public java.lang.Object getDefenderForCloudEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `guestConfigurationEnabledInput`<sup>Optional</sup> <a name="guestConfigurationEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.guestConfigurationEnabledInput"></a>

```java
public java.lang.Object getGuestConfigurationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `logAnalyticsEnabledInput`<sup>Optional</sup> <a name="logAnalyticsEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.logAnalyticsEnabledInput"></a>

```java
public java.lang.Object getLogAnalyticsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `statusChangeAlertEnabledInput`<sup>Optional</sup> <a name="statusChangeAlertEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.statusChangeAlertEnabledInput"></a>

```java
public java.lang.Object getStatusChangeAlertEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts">AutomanageConfigurationTimeouts</a>

---

##### `automationAccountEnabled`<sup>Required</sup> <a name="automationAccountEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.automationAccountEnabled"></a>

```java
public java.lang.Object getAutomationAccountEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bootDiagnosticsEnabled`<sup>Required</sup> <a name="bootDiagnosticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.bootDiagnosticsEnabled"></a>

```java
public java.lang.Object getBootDiagnosticsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defenderForCloudEnabled`<sup>Required</sup> <a name="defenderForCloudEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.defenderForCloudEnabled"></a>

```java
public java.lang.Object getDefenderForCloudEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `guestConfigurationEnabled`<sup>Required</sup> <a name="guestConfigurationEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.guestConfigurationEnabled"></a>

```java
public java.lang.Object getGuestConfigurationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `logAnalyticsEnabled`<sup>Required</sup> <a name="logAnalyticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.logAnalyticsEnabled"></a>

```java
public java.lang.Object getLogAnalyticsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `statusChangeAlertEnabled`<sup>Required</sup> <a name="statusChangeAlertEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.statusChangeAlertEnabled"></a>

```java
public java.lang.Object getStatusChangeAlertEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AutomanageConfigurationAntimalware <a name="AutomanageConfigurationAntimalware" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfigurationAntimalware;

AutomanageConfigurationAntimalware.builder()
//  .exclusions(AutomanageConfigurationAntimalwareExclusions)
//  .realTimeProtectionEnabled(java.lang.Boolean)
//  .realTimeProtectionEnabled(IResolvable)
//  .scheduledScanDay(java.lang.Number)
//  .scheduledScanEnabled(java.lang.Boolean)
//  .scheduledScanEnabled(IResolvable)
//  .scheduledScanTimeInMinutes(java.lang.Number)
//  .scheduledScanType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.exclusions">exclusions</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a></code> | exclusions block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.realTimeProtectionEnabled">realTimeProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#real_time_protection_enabled AutomanageConfiguration#real_time_protection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanDay">scheduledScanDay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#scheduled_scan_day AutomanageConfiguration#scheduled_scan_day}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanEnabled">scheduledScanEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#scheduled_scan_enabled AutomanageConfiguration#scheduled_scan_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanTimeInMinutes">scheduledScanTimeInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#scheduled_scan_time_in_minutes AutomanageConfiguration#scheduled_scan_time_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanType">scheduledScanType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#scheduled_scan_type AutomanageConfiguration#scheduled_scan_type}. |

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.exclusions"></a>

```java
public AutomanageConfigurationAntimalwareExclusions getExclusions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a>

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#exclusions AutomanageConfiguration#exclusions}

---

##### `realTimeProtectionEnabled`<sup>Optional</sup> <a name="realTimeProtectionEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.realTimeProtectionEnabled"></a>

```java
public java.lang.Object getRealTimeProtectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#real_time_protection_enabled AutomanageConfiguration#real_time_protection_enabled}.

---

##### `scheduledScanDay`<sup>Optional</sup> <a name="scheduledScanDay" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanDay"></a>

```java
public java.lang.Number getScheduledScanDay();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#scheduled_scan_day AutomanageConfiguration#scheduled_scan_day}.

---

##### `scheduledScanEnabled`<sup>Optional</sup> <a name="scheduledScanEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanEnabled"></a>

```java
public java.lang.Object getScheduledScanEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#scheduled_scan_enabled AutomanageConfiguration#scheduled_scan_enabled}.

---

##### `scheduledScanTimeInMinutes`<sup>Optional</sup> <a name="scheduledScanTimeInMinutes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanTimeInMinutes"></a>

```java
public java.lang.Number getScheduledScanTimeInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#scheduled_scan_time_in_minutes AutomanageConfiguration#scheduled_scan_time_in_minutes}.

---

##### `scheduledScanType`<sup>Optional</sup> <a name="scheduledScanType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanType"></a>

```java
public java.lang.String getScheduledScanType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#scheduled_scan_type AutomanageConfiguration#scheduled_scan_type}.

---

### AutomanageConfigurationAntimalwareExclusions <a name="AutomanageConfigurationAntimalwareExclusions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfigurationAntimalwareExclusions;

AutomanageConfigurationAntimalwareExclusions.builder()
//  .extensions(java.lang.String)
//  .paths(java.lang.String)
//  .processes(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.extensions">extensions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#extensions AutomanageConfiguration#extensions}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.paths">paths</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#paths AutomanageConfiguration#paths}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.processes">processes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#processes AutomanageConfiguration#processes}. |

---

##### `extensions`<sup>Optional</sup> <a name="extensions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.extensions"></a>

```java
public java.lang.String getExtensions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#extensions AutomanageConfiguration#extensions}.

---

##### `paths`<sup>Optional</sup> <a name="paths" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.paths"></a>

```java
public java.lang.String getPaths();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#paths AutomanageConfiguration#paths}.

---

##### `processes`<sup>Optional</sup> <a name="processes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.processes"></a>

```java
public java.lang.String getProcesses();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#processes AutomanageConfiguration#processes}.

---

### AutomanageConfigurationAzureSecurityBaseline <a name="AutomanageConfigurationAzureSecurityBaseline" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfigurationAzureSecurityBaseline;

AutomanageConfigurationAzureSecurityBaseline.builder()
//  .assignmentType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline.property.assignmentType">assignmentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#assignment_type AutomanageConfiguration#assignment_type}. |

---

##### `assignmentType`<sup>Optional</sup> <a name="assignmentType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline.property.assignmentType"></a>

```java
public java.lang.String getAssignmentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#assignment_type AutomanageConfiguration#assignment_type}.

---

### AutomanageConfigurationBackup <a name="AutomanageConfigurationBackup" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfigurationBackup;

AutomanageConfigurationBackup.builder()
//  .instantRpRetentionRangeInDays(java.lang.Number)
//  .policyName(java.lang.String)
//  .retentionPolicy(AutomanageConfigurationBackupRetentionPolicy)
//  .schedulePolicy(AutomanageConfigurationBackupSchedulePolicy)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.instantRpRetentionRangeInDays">instantRpRetentionRangeInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#instant_rp_retention_range_in_days AutomanageConfiguration#instant_rp_retention_range_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.policyName">policyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#policy_name AutomanageConfiguration#policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.schedulePolicy">schedulePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a></code> | schedule_policy block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#time_zone AutomanageConfiguration#time_zone}. |

---

##### `instantRpRetentionRangeInDays`<sup>Optional</sup> <a name="instantRpRetentionRangeInDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.instantRpRetentionRangeInDays"></a>

```java
public java.lang.Number getInstantRpRetentionRangeInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#instant_rp_retention_range_in_days AutomanageConfiguration#instant_rp_retention_range_in_days}.

---

##### `policyName`<sup>Optional</sup> <a name="policyName" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#policy_name AutomanageConfiguration#policy_name}.

---

##### `retentionPolicy`<sup>Optional</sup> <a name="retentionPolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.retentionPolicy"></a>

```java
public AutomanageConfigurationBackupRetentionPolicy getRetentionPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#retention_policy AutomanageConfiguration#retention_policy}

---

##### `schedulePolicy`<sup>Optional</sup> <a name="schedulePolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.schedulePolicy"></a>

```java
public AutomanageConfigurationBackupSchedulePolicy getSchedulePolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a>

schedule_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#schedule_policy AutomanageConfiguration#schedule_policy}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#time_zone AutomanageConfiguration#time_zone}.

---

### AutomanageConfigurationBackupRetentionPolicy <a name="AutomanageConfigurationBackupRetentionPolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfigurationBackupRetentionPolicy;

AutomanageConfigurationBackupRetentionPolicy.builder()
//  .dailySchedule(AutomanageConfigurationBackupRetentionPolicyDailySchedule)
//  .retentionPolicyType(java.lang.String)
//  .weeklySchedule(AutomanageConfigurationBackupRetentionPolicyWeeklySchedule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a></code> | daily_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.retentionPolicyType">retentionPolicyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#retention_policy_type AutomanageConfiguration#retention_policy_type}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `dailySchedule`<sup>Optional</sup> <a name="dailySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.dailySchedule"></a>

```java
public AutomanageConfigurationBackupRetentionPolicyDailySchedule getDailySchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a>

daily_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#daily_schedule AutomanageConfiguration#daily_schedule}

---

##### `retentionPolicyType`<sup>Optional</sup> <a name="retentionPolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.retentionPolicyType"></a>

```java
public java.lang.String getRetentionPolicyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#retention_policy_type AutomanageConfiguration#retention_policy_type}.

---

##### `weeklySchedule`<sup>Optional</sup> <a name="weeklySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.weeklySchedule"></a>

```java
public AutomanageConfigurationBackupRetentionPolicyWeeklySchedule getWeeklySchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#weekly_schedule AutomanageConfiguration#weekly_schedule}

---

### AutomanageConfigurationBackupRetentionPolicyDailySchedule <a name="AutomanageConfigurationBackupRetentionPolicyDailySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfigurationBackupRetentionPolicyDailySchedule;

AutomanageConfigurationBackupRetentionPolicyDailySchedule.builder()
//  .retentionDuration(AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration)
//  .retentionTimes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule.property.retentionDuration">retentionDuration</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a></code> | retention_duration block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule.property.retentionTimes">retentionTimes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#retention_times AutomanageConfiguration#retention_times}. |

---

##### `retentionDuration`<sup>Optional</sup> <a name="retentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule.property.retentionDuration"></a>

```java
public AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration getRetentionDuration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a>

retention_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#retention_duration AutomanageConfiguration#retention_duration}

---

##### `retentionTimes`<sup>Optional</sup> <a name="retentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule.property.retentionTimes"></a>

```java
public java.util.List<java.lang.String> getRetentionTimes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#retention_times AutomanageConfiguration#retention_times}.

---

### AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration <a name="AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration;

AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration.builder()
//  .count(java.lang.Number)
//  .durationType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration.property.count">count</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#count AutomanageConfiguration#count}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration.property.durationType">durationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#duration_type AutomanageConfiguration#duration_type}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#count AutomanageConfiguration#count}.

---

##### `durationType`<sup>Optional</sup> <a name="durationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration.property.durationType"></a>

```java
public java.lang.String getDurationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#duration_type AutomanageConfiguration#duration_type}.

---

### AutomanageConfigurationBackupRetentionPolicyWeeklySchedule <a name="AutomanageConfigurationBackupRetentionPolicyWeeklySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule;

AutomanageConfigurationBackupRetentionPolicyWeeklySchedule.builder()
//  .retentionDuration(AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration)
//  .retentionTimes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule.property.retentionDuration">retentionDuration</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a></code> | retention_duration block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule.property.retentionTimes">retentionTimes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#retention_times AutomanageConfiguration#retention_times}. |

---

##### `retentionDuration`<sup>Optional</sup> <a name="retentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule.property.retentionDuration"></a>

```java
public AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration getRetentionDuration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a>

retention_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#retention_duration AutomanageConfiguration#retention_duration}

---

##### `retentionTimes`<sup>Optional</sup> <a name="retentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule.property.retentionTimes"></a>

```java
public java.util.List<java.lang.String> getRetentionTimes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#retention_times AutomanageConfiguration#retention_times}.

---

### AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration <a name="AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration;

AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration.builder()
//  .count(java.lang.Number)
//  .durationType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration.property.count">count</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#count AutomanageConfiguration#count}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration.property.durationType">durationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#duration_type AutomanageConfiguration#duration_type}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#count AutomanageConfiguration#count}.

---

##### `durationType`<sup>Optional</sup> <a name="durationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration.property.durationType"></a>

```java
public java.lang.String getDurationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#duration_type AutomanageConfiguration#duration_type}.

---

### AutomanageConfigurationBackupSchedulePolicy <a name="AutomanageConfigurationBackupSchedulePolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfigurationBackupSchedulePolicy;

AutomanageConfigurationBackupSchedulePolicy.builder()
//  .schedulePolicyType(java.lang.String)
//  .scheduleRunDays(java.util.List<java.lang.String>)
//  .scheduleRunFrequency(java.lang.String)
//  .scheduleRunTimes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.schedulePolicyType">schedulePolicyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#schedule_policy_type AutomanageConfiguration#schedule_policy_type}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunDays">scheduleRunDays</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#schedule_run_days AutomanageConfiguration#schedule_run_days}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunFrequency">scheduleRunFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#schedule_run_frequency AutomanageConfiguration#schedule_run_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunTimes">scheduleRunTimes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#schedule_run_times AutomanageConfiguration#schedule_run_times}. |

---

##### `schedulePolicyType`<sup>Optional</sup> <a name="schedulePolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.schedulePolicyType"></a>

```java
public java.lang.String getSchedulePolicyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#schedule_policy_type AutomanageConfiguration#schedule_policy_type}.

---

##### `scheduleRunDays`<sup>Optional</sup> <a name="scheduleRunDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunDays"></a>

```java
public java.util.List<java.lang.String> getScheduleRunDays();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#schedule_run_days AutomanageConfiguration#schedule_run_days}.

---

##### `scheduleRunFrequency`<sup>Optional</sup> <a name="scheduleRunFrequency" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunFrequency"></a>

```java
public java.lang.String getScheduleRunFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#schedule_run_frequency AutomanageConfiguration#schedule_run_frequency}.

---

##### `scheduleRunTimes`<sup>Optional</sup> <a name="scheduleRunTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunTimes"></a>

```java
public java.util.List<java.lang.String> getScheduleRunTimes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#schedule_run_times AutomanageConfiguration#schedule_run_times}.

---

### AutomanageConfigurationConfig <a name="AutomanageConfigurationConfig" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfigurationConfig;

AutomanageConfigurationConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .antimalware(AutomanageConfigurationAntimalware)
//  .automationAccountEnabled(java.lang.Boolean)
//  .automationAccountEnabled(IResolvable)
//  .azureSecurityBaseline(AutomanageConfigurationAzureSecurityBaseline)
//  .backup(AutomanageConfigurationBackup)
//  .bootDiagnosticsEnabled(java.lang.Boolean)
//  .bootDiagnosticsEnabled(IResolvable)
//  .defenderForCloudEnabled(java.lang.Boolean)
//  .defenderForCloudEnabled(IResolvable)
//  .guestConfigurationEnabled(java.lang.Boolean)
//  .guestConfigurationEnabled(IResolvable)
//  .id(java.lang.String)
//  .logAnalyticsEnabled(java.lang.Boolean)
//  .logAnalyticsEnabled(IResolvable)
//  .statusChangeAlertEnabled(java.lang.Boolean)
//  .statusChangeAlertEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AutomanageConfigurationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#location AutomanageConfiguration#location}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#name AutomanageConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#resource_group_name AutomanageConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.antimalware">antimalware</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a></code> | antimalware block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.automationAccountEnabled">automationAccountEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#automation_account_enabled AutomanageConfiguration#automation_account_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.azureSecurityBaseline">azureSecurityBaseline</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a></code> | azure_security_baseline block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.bootDiagnosticsEnabled">bootDiagnosticsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#boot_diagnostics_enabled AutomanageConfiguration#boot_diagnostics_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.defenderForCloudEnabled">defenderForCloudEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#defender_for_cloud_enabled AutomanageConfiguration#defender_for_cloud_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.guestConfigurationEnabled">guestConfigurationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#guest_configuration_enabled AutomanageConfiguration#guest_configuration_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#id AutomanageConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.logAnalyticsEnabled">logAnalyticsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#log_analytics_enabled AutomanageConfiguration#log_analytics_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.statusChangeAlertEnabled">statusChangeAlertEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#status_change_alert_enabled AutomanageConfiguration#status_change_alert_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#tags AutomanageConfiguration#tags}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts">AutomanageConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#location AutomanageConfiguration#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#name AutomanageConfiguration#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#resource_group_name AutomanageConfiguration#resource_group_name}.

---

##### `antimalware`<sup>Optional</sup> <a name="antimalware" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.antimalware"></a>

```java
public AutomanageConfigurationAntimalware getAntimalware();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a>

antimalware block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#antimalware AutomanageConfiguration#antimalware}

---

##### `automationAccountEnabled`<sup>Optional</sup> <a name="automationAccountEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.automationAccountEnabled"></a>

```java
public java.lang.Object getAutomationAccountEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#automation_account_enabled AutomanageConfiguration#automation_account_enabled}.

---

##### `azureSecurityBaseline`<sup>Optional</sup> <a name="azureSecurityBaseline" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.azureSecurityBaseline"></a>

```java
public AutomanageConfigurationAzureSecurityBaseline getAzureSecurityBaseline();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a>

azure_security_baseline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#azure_security_baseline AutomanageConfiguration#azure_security_baseline}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.backup"></a>

```java
public AutomanageConfigurationBackup getBackup();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#backup AutomanageConfiguration#backup}

---

##### `bootDiagnosticsEnabled`<sup>Optional</sup> <a name="bootDiagnosticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.bootDiagnosticsEnabled"></a>

```java
public java.lang.Object getBootDiagnosticsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#boot_diagnostics_enabled AutomanageConfiguration#boot_diagnostics_enabled}.

---

##### `defenderForCloudEnabled`<sup>Optional</sup> <a name="defenderForCloudEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.defenderForCloudEnabled"></a>

```java
public java.lang.Object getDefenderForCloudEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#defender_for_cloud_enabled AutomanageConfiguration#defender_for_cloud_enabled}.

---

##### `guestConfigurationEnabled`<sup>Optional</sup> <a name="guestConfigurationEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.guestConfigurationEnabled"></a>

```java
public java.lang.Object getGuestConfigurationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#guest_configuration_enabled AutomanageConfiguration#guest_configuration_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#id AutomanageConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logAnalyticsEnabled`<sup>Optional</sup> <a name="logAnalyticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.logAnalyticsEnabled"></a>

```java
public java.lang.Object getLogAnalyticsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#log_analytics_enabled AutomanageConfiguration#log_analytics_enabled}.

---

##### `statusChangeAlertEnabled`<sup>Optional</sup> <a name="statusChangeAlertEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.statusChangeAlertEnabled"></a>

```java
public java.lang.Object getStatusChangeAlertEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#status_change_alert_enabled AutomanageConfiguration#status_change_alert_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#tags AutomanageConfiguration#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.timeouts"></a>

```java
public AutomanageConfigurationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts">AutomanageConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#timeouts AutomanageConfiguration#timeouts}

---

### AutomanageConfigurationTimeouts <a name="AutomanageConfigurationTimeouts" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfigurationTimeouts;

AutomanageConfigurationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#create AutomanageConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#delete AutomanageConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#read AutomanageConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#update AutomanageConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#create AutomanageConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#delete AutomanageConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#read AutomanageConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/automanage_configuration#update AutomanageConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomanageConfigurationAntimalwareExclusionsOutputReference <a name="AutomanageConfigurationAntimalwareExclusionsOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfigurationAntimalwareExclusionsOutputReference;

new AutomanageConfigurationAntimalwareExclusionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetExtensions">resetExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetPaths">resetPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetProcesses">resetProcesses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExtensions` <a name="resetExtensions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetExtensions"></a>

```java
public void resetExtensions()
```

##### `resetPaths` <a name="resetPaths" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetPaths"></a>

```java
public void resetPaths()
```

##### `resetProcesses` <a name="resetProcesses" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetProcesses"></a>

```java
public void resetProcesses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.extensionsInput">extensionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.pathsInput">pathsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.processesInput">processesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.extensions">extensions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.paths">paths</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.processes">processes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extensionsInput`<sup>Optional</sup> <a name="extensionsInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.extensionsInput"></a>

```java
public java.lang.String getExtensionsInput();
```

- *Type:* java.lang.String

---

##### `pathsInput`<sup>Optional</sup> <a name="pathsInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.pathsInput"></a>

```java
public java.lang.String getPathsInput();
```

- *Type:* java.lang.String

---

##### `processesInput`<sup>Optional</sup> <a name="processesInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.processesInput"></a>

```java
public java.lang.String getProcessesInput();
```

- *Type:* java.lang.String

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.extensions"></a>

```java
public java.lang.String getExtensions();
```

- *Type:* java.lang.String

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.paths"></a>

```java
public java.lang.String getPaths();
```

- *Type:* java.lang.String

---

##### `processes`<sup>Required</sup> <a name="processes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.processes"></a>

```java
public java.lang.String getProcesses();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.internalValue"></a>

```java
public AutomanageConfigurationAntimalwareExclusions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a>

---


### AutomanageConfigurationAntimalwareOutputReference <a name="AutomanageConfigurationAntimalwareOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfigurationAntimalwareOutputReference;

new AutomanageConfigurationAntimalwareOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.putExclusions">putExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetExclusions">resetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetRealTimeProtectionEnabled">resetRealTimeProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanDay">resetScheduledScanDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanEnabled">resetScheduledScanEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanTimeInMinutes">resetScheduledScanTimeInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanType">resetScheduledScanType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusions` <a name="putExclusions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.putExclusions"></a>

```java
public void putExclusions(AutomanageConfigurationAntimalwareExclusions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.putExclusions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a>

---

##### `resetExclusions` <a name="resetExclusions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetExclusions"></a>

```java
public void resetExclusions()
```

##### `resetRealTimeProtectionEnabled` <a name="resetRealTimeProtectionEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetRealTimeProtectionEnabled"></a>

```java
public void resetRealTimeProtectionEnabled()
```

##### `resetScheduledScanDay` <a name="resetScheduledScanDay" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanDay"></a>

```java
public void resetScheduledScanDay()
```

##### `resetScheduledScanEnabled` <a name="resetScheduledScanEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanEnabled"></a>

```java
public void resetScheduledScanEnabled()
```

##### `resetScheduledScanTimeInMinutes` <a name="resetScheduledScanTimeInMinutes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanTimeInMinutes"></a>

```java
public void resetScheduledScanTimeInMinutes()
```

##### `resetScheduledScanType` <a name="resetScheduledScanType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanType"></a>

```java
public void resetScheduledScanType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.exclusions">exclusions</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference">AutomanageConfigurationAntimalwareExclusionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.exclusionsInput">exclusionsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.realTimeProtectionEnabledInput">realTimeProtectionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanDayInput">scheduledScanDayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanEnabledInput">scheduledScanEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTimeInMinutesInput">scheduledScanTimeInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTypeInput">scheduledScanTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.realTimeProtectionEnabled">realTimeProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanDay">scheduledScanDay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanEnabled">scheduledScanEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTimeInMinutes">scheduledScanTimeInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanType">scheduledScanType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.exclusions"></a>

```java
public AutomanageConfigurationAntimalwareExclusionsOutputReference getExclusions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference">AutomanageConfigurationAntimalwareExclusionsOutputReference</a>

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.exclusionsInput"></a>

```java
public AutomanageConfigurationAntimalwareExclusions getExclusionsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a>

---

##### `realTimeProtectionEnabledInput`<sup>Optional</sup> <a name="realTimeProtectionEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.realTimeProtectionEnabledInput"></a>

```java
public java.lang.Object getRealTimeProtectionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scheduledScanDayInput`<sup>Optional</sup> <a name="scheduledScanDayInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanDayInput"></a>

```java
public java.lang.Number getScheduledScanDayInput();
```

- *Type:* java.lang.Number

---

##### `scheduledScanEnabledInput`<sup>Optional</sup> <a name="scheduledScanEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanEnabledInput"></a>

```java
public java.lang.Object getScheduledScanEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scheduledScanTimeInMinutesInput`<sup>Optional</sup> <a name="scheduledScanTimeInMinutesInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTimeInMinutesInput"></a>

```java
public java.lang.Number getScheduledScanTimeInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `scheduledScanTypeInput`<sup>Optional</sup> <a name="scheduledScanTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTypeInput"></a>

```java
public java.lang.String getScheduledScanTypeInput();
```

- *Type:* java.lang.String

---

##### `realTimeProtectionEnabled`<sup>Required</sup> <a name="realTimeProtectionEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.realTimeProtectionEnabled"></a>

```java
public java.lang.Object getRealTimeProtectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scheduledScanDay`<sup>Required</sup> <a name="scheduledScanDay" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanDay"></a>

```java
public java.lang.Number getScheduledScanDay();
```

- *Type:* java.lang.Number

---

##### `scheduledScanEnabled`<sup>Required</sup> <a name="scheduledScanEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanEnabled"></a>

```java
public java.lang.Object getScheduledScanEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scheduledScanTimeInMinutes`<sup>Required</sup> <a name="scheduledScanTimeInMinutes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTimeInMinutes"></a>

```java
public java.lang.Number getScheduledScanTimeInMinutes();
```

- *Type:* java.lang.Number

---

##### `scheduledScanType`<sup>Required</sup> <a name="scheduledScanType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanType"></a>

```java
public java.lang.String getScheduledScanType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.internalValue"></a>

```java
public AutomanageConfigurationAntimalware getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a>

---


### AutomanageConfigurationAzureSecurityBaselineOutputReference <a name="AutomanageConfigurationAzureSecurityBaselineOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfigurationAzureSecurityBaselineOutputReference;

new AutomanageConfigurationAzureSecurityBaselineOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.resetAssignmentType">resetAssignmentType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssignmentType` <a name="resetAssignmentType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.resetAssignmentType"></a>

```java
public void resetAssignmentType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.assignmentTypeInput">assignmentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.assignmentType">assignmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assignmentTypeInput`<sup>Optional</sup> <a name="assignmentTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.assignmentTypeInput"></a>

```java
public java.lang.String getAssignmentTypeInput();
```

- *Type:* java.lang.String

---

##### `assignmentType`<sup>Required</sup> <a name="assignmentType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.assignmentType"></a>

```java
public java.lang.String getAssignmentType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.internalValue"></a>

```java
public AutomanageConfigurationAzureSecurityBaseline getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a>

---


### AutomanageConfigurationBackupOutputReference <a name="AutomanageConfigurationBackupOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfigurationBackupOutputReference;

new AutomanageConfigurationBackupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putRetentionPolicy">putRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putSchedulePolicy">putSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetInstantRpRetentionRangeInDays">resetInstantRpRetentionRangeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetPolicyName">resetPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetRetentionPolicy">resetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetSchedulePolicy">resetSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRetentionPolicy` <a name="putRetentionPolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putRetentionPolicy"></a>

```java
public void putRetentionPolicy(AutomanageConfigurationBackupRetentionPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a>

---

##### `putSchedulePolicy` <a name="putSchedulePolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putSchedulePolicy"></a>

```java
public void putSchedulePolicy(AutomanageConfigurationBackupSchedulePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putSchedulePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a>

---

##### `resetInstantRpRetentionRangeInDays` <a name="resetInstantRpRetentionRangeInDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetInstantRpRetentionRangeInDays"></a>

```java
public void resetInstantRpRetentionRangeInDays()
```

##### `resetPolicyName` <a name="resetPolicyName" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetPolicyName"></a>

```java
public void resetPolicyName()
```

##### `resetRetentionPolicy` <a name="resetRetentionPolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetRetentionPolicy"></a>

```java
public void resetRetentionPolicy()
```

##### `resetSchedulePolicy` <a name="resetSchedulePolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetSchedulePolicy"></a>

```java
public void resetSchedulePolicy()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference">AutomanageConfigurationBackupRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.schedulePolicy">schedulePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference">AutomanageConfigurationBackupSchedulePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.instantRpRetentionRangeInDaysInput">instantRpRetentionRangeInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.retentionPolicyInput">retentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.schedulePolicyInput">schedulePolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.instantRpRetentionRangeInDays">instantRpRetentionRangeInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.retentionPolicy"></a>

```java
public AutomanageConfigurationBackupRetentionPolicyOutputReference getRetentionPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference">AutomanageConfigurationBackupRetentionPolicyOutputReference</a>

---

##### `schedulePolicy`<sup>Required</sup> <a name="schedulePolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.schedulePolicy"></a>

```java
public AutomanageConfigurationBackupSchedulePolicyOutputReference getSchedulePolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference">AutomanageConfigurationBackupSchedulePolicyOutputReference</a>

---

##### `instantRpRetentionRangeInDaysInput`<sup>Optional</sup> <a name="instantRpRetentionRangeInDaysInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.instantRpRetentionRangeInDaysInput"></a>

```java
public java.lang.Number getInstantRpRetentionRangeInDaysInput();
```

- *Type:* java.lang.Number

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.policyNameInput"></a>

```java
public java.lang.String getPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `retentionPolicyInput`<sup>Optional</sup> <a name="retentionPolicyInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.retentionPolicyInput"></a>

```java
public AutomanageConfigurationBackupRetentionPolicy getRetentionPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a>

---

##### `schedulePolicyInput`<sup>Optional</sup> <a name="schedulePolicyInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.schedulePolicyInput"></a>

```java
public AutomanageConfigurationBackupSchedulePolicy getSchedulePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `instantRpRetentionRangeInDays`<sup>Required</sup> <a name="instantRpRetentionRangeInDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.instantRpRetentionRangeInDays"></a>

```java
public java.lang.Number getInstantRpRetentionRangeInDays();
```

- *Type:* java.lang.Number

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.internalValue"></a>

```java
public AutomanageConfigurationBackup getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a>

---


### AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference <a name="AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference;

new AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.putRetentionDuration">putRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resetRetentionDuration">resetRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resetRetentionTimes">resetRetentionTimes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRetentionDuration` <a name="putRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.putRetentionDuration"></a>

```java
public void putRetentionDuration(AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.putRetentionDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a>

---

##### `resetRetentionDuration` <a name="resetRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resetRetentionDuration"></a>

```java
public void resetRetentionDuration()
```

##### `resetRetentionTimes` <a name="resetRetentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resetRetentionTimes"></a>

```java
public void resetRetentionTimes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionDuration">retentionDuration</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionDurationInput">retentionDurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionTimesInput">retentionTimesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionTimes">retentionTimes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `retentionDuration`<sup>Required</sup> <a name="retentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionDuration"></a>

```java
public AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference getRetentionDuration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference</a>

---

##### `retentionDurationInput`<sup>Optional</sup> <a name="retentionDurationInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionDurationInput"></a>

```java
public AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration getRetentionDurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a>

---

##### `retentionTimesInput`<sup>Optional</sup> <a name="retentionTimesInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionTimesInput"></a>

```java
public java.util.List<java.lang.String> getRetentionTimesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `retentionTimes`<sup>Required</sup> <a name="retentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionTimes"></a>

```java
public java.util.List<java.lang.String> getRetentionTimes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.internalValue"></a>

```java
public AutomanageConfigurationBackupRetentionPolicyDailySchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a>

---


### AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference <a name="AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference;

new AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resetDurationType">resetDurationType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resetCount"></a>

```java
public void resetCount()
```

##### `resetDurationType` <a name="resetDurationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resetDurationType"></a>

```java
public void resetDurationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.durationTypeInput">durationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.durationType">durationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `durationTypeInput`<sup>Optional</sup> <a name="durationTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.durationTypeInput"></a>

```java
public java.lang.String getDurationTypeInput();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `durationType`<sup>Required</sup> <a name="durationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.durationType"></a>

```java
public java.lang.String getDurationType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.internalValue"></a>

```java
public AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a>

---


### AutomanageConfigurationBackupRetentionPolicyOutputReference <a name="AutomanageConfigurationBackupRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfigurationBackupRetentionPolicyOutputReference;

new AutomanageConfigurationBackupRetentionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putDailySchedule">putDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putWeeklySchedule">putWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetDailySchedule">resetDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetRetentionPolicyType">resetRetentionPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetWeeklySchedule">resetWeeklySchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDailySchedule` <a name="putDailySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putDailySchedule"></a>

```java
public void putDailySchedule(AutomanageConfigurationBackupRetentionPolicyDailySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putDailySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a>

---

##### `putWeeklySchedule` <a name="putWeeklySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putWeeklySchedule"></a>

```java
public void putWeeklySchedule(AutomanageConfigurationBackupRetentionPolicyWeeklySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a>

---

##### `resetDailySchedule` <a name="resetDailySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetDailySchedule"></a>

```java
public void resetDailySchedule()
```

##### `resetRetentionPolicyType` <a name="resetRetentionPolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetRetentionPolicyType"></a>

```java
public void resetRetentionPolicyType()
```

##### `resetWeeklySchedule` <a name="resetWeeklySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetWeeklySchedule"></a>

```java
public void resetWeeklySchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference">AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.dailyScheduleInput">dailyScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.retentionPolicyTypeInput">retentionPolicyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.weeklyScheduleInput">weeklyScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.retentionPolicyType">retentionPolicyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dailySchedule`<sup>Required</sup> <a name="dailySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.dailySchedule"></a>

```java
public AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference getDailySchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference">AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference</a>

---

##### `weeklySchedule`<sup>Required</sup> <a name="weeklySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.weeklySchedule"></a>

```java
public AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference getWeeklySchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference</a>

---

##### `dailyScheduleInput`<sup>Optional</sup> <a name="dailyScheduleInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.dailyScheduleInput"></a>

```java
public AutomanageConfigurationBackupRetentionPolicyDailySchedule getDailyScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a>

---

##### `retentionPolicyTypeInput`<sup>Optional</sup> <a name="retentionPolicyTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.retentionPolicyTypeInput"></a>

```java
public java.lang.String getRetentionPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `weeklyScheduleInput`<sup>Optional</sup> <a name="weeklyScheduleInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.weeklyScheduleInput"></a>

```java
public AutomanageConfigurationBackupRetentionPolicyWeeklySchedule getWeeklyScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a>

---

##### `retentionPolicyType`<sup>Required</sup> <a name="retentionPolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.retentionPolicyType"></a>

```java
public java.lang.String getRetentionPolicyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.internalValue"></a>

```java
public AutomanageConfigurationBackupRetentionPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a>

---


### AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference <a name="AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference;

new AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.putRetentionDuration">putRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resetRetentionDuration">resetRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resetRetentionTimes">resetRetentionTimes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRetentionDuration` <a name="putRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.putRetentionDuration"></a>

```java
public void putRetentionDuration(AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.putRetentionDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a>

---

##### `resetRetentionDuration` <a name="resetRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resetRetentionDuration"></a>

```java
public void resetRetentionDuration()
```

##### `resetRetentionTimes` <a name="resetRetentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resetRetentionTimes"></a>

```java
public void resetRetentionTimes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionDuration">retentionDuration</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionDurationInput">retentionDurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionTimesInput">retentionTimesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionTimes">retentionTimes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `retentionDuration`<sup>Required</sup> <a name="retentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionDuration"></a>

```java
public AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference getRetentionDuration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference</a>

---

##### `retentionDurationInput`<sup>Optional</sup> <a name="retentionDurationInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionDurationInput"></a>

```java
public AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration getRetentionDurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a>

---

##### `retentionTimesInput`<sup>Optional</sup> <a name="retentionTimesInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionTimesInput"></a>

```java
public java.util.List<java.lang.String> getRetentionTimesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `retentionTimes`<sup>Required</sup> <a name="retentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionTimes"></a>

```java
public java.util.List<java.lang.String> getRetentionTimes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.internalValue"></a>

```java
public AutomanageConfigurationBackupRetentionPolicyWeeklySchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a>

---


### AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference <a name="AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference;

new AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resetDurationType">resetDurationType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resetCount"></a>

```java
public void resetCount()
```

##### `resetDurationType` <a name="resetDurationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resetDurationType"></a>

```java
public void resetDurationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.durationTypeInput">durationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.durationType">durationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `durationTypeInput`<sup>Optional</sup> <a name="durationTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.durationTypeInput"></a>

```java
public java.lang.String getDurationTypeInput();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `durationType`<sup>Required</sup> <a name="durationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.durationType"></a>

```java
public java.lang.String getDurationType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.internalValue"></a>

```java
public AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a>

---


### AutomanageConfigurationBackupSchedulePolicyOutputReference <a name="AutomanageConfigurationBackupSchedulePolicyOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfigurationBackupSchedulePolicyOutputReference;

new AutomanageConfigurationBackupSchedulePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetSchedulePolicyType">resetSchedulePolicyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunDays">resetScheduleRunDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunFrequency">resetScheduleRunFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunTimes">resetScheduleRunTimes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSchedulePolicyType` <a name="resetSchedulePolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetSchedulePolicyType"></a>

```java
public void resetSchedulePolicyType()
```

##### `resetScheduleRunDays` <a name="resetScheduleRunDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunDays"></a>

```java
public void resetScheduleRunDays()
```

##### `resetScheduleRunFrequency` <a name="resetScheduleRunFrequency" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunFrequency"></a>

```java
public void resetScheduleRunFrequency()
```

##### `resetScheduleRunTimes` <a name="resetScheduleRunTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunTimes"></a>

```java
public void resetScheduleRunTimes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.schedulePolicyTypeInput">schedulePolicyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunDaysInput">scheduleRunDaysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunFrequencyInput">scheduleRunFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunTimesInput">scheduleRunTimesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.schedulePolicyType">schedulePolicyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunDays">scheduleRunDays</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunFrequency">scheduleRunFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunTimes">scheduleRunTimes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schedulePolicyTypeInput`<sup>Optional</sup> <a name="schedulePolicyTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.schedulePolicyTypeInput"></a>

```java
public java.lang.String getSchedulePolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `scheduleRunDaysInput`<sup>Optional</sup> <a name="scheduleRunDaysInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunDaysInput"></a>

```java
public java.util.List<java.lang.String> getScheduleRunDaysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scheduleRunFrequencyInput`<sup>Optional</sup> <a name="scheduleRunFrequencyInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunFrequencyInput"></a>

```java
public java.lang.String getScheduleRunFrequencyInput();
```

- *Type:* java.lang.String

---

##### `scheduleRunTimesInput`<sup>Optional</sup> <a name="scheduleRunTimesInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunTimesInput"></a>

```java
public java.util.List<java.lang.String> getScheduleRunTimesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schedulePolicyType`<sup>Required</sup> <a name="schedulePolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.schedulePolicyType"></a>

```java
public java.lang.String getSchedulePolicyType();
```

- *Type:* java.lang.String

---

##### `scheduleRunDays`<sup>Required</sup> <a name="scheduleRunDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunDays"></a>

```java
public java.util.List<java.lang.String> getScheduleRunDays();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scheduleRunFrequency`<sup>Required</sup> <a name="scheduleRunFrequency" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunFrequency"></a>

```java
public java.lang.String getScheduleRunFrequency();
```

- *Type:* java.lang.String

---

##### `scheduleRunTimes`<sup>Required</sup> <a name="scheduleRunTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunTimes"></a>

```java
public java.util.List<java.lang.String> getScheduleRunTimes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.internalValue"></a>

```java
public AutomanageConfigurationBackupSchedulePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a>

---


### AutomanageConfigurationTimeoutsOutputReference <a name="AutomanageConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automanage_configuration.AutomanageConfigurationTimeoutsOutputReference;

new AutomanageConfigurationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts">AutomanageConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts">AutomanageConfigurationTimeouts</a>

---



