# `applicationInsights` Submodule <a name="`applicationInsights` Submodule" id="@cdktf/provider-azurerm.applicationInsights"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationInsights <a name="ApplicationInsights" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights azurerm_application_insights}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights.ApplicationInsights;

ApplicationInsights.Builder.create(Construct scope, java.lang.String id)
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
    .applicationType(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .dailyDataCapInGb(java.lang.Number)
//  .dailyDataCapNotificationsDisabled(java.lang.Boolean)
//  .dailyDataCapNotificationsDisabled(IResolvable)
//  .disableIpMasking(java.lang.Boolean)
//  .disableIpMasking(IResolvable)
//  .forceCustomerStorageForProfiler(java.lang.Boolean)
//  .forceCustomerStorageForProfiler(IResolvable)
//  .id(java.lang.String)
//  .internetIngestionEnabled(java.lang.Boolean)
//  .internetIngestionEnabled(IResolvable)
//  .internetQueryEnabled(java.lang.Boolean)
//  .internetQueryEnabled(IResolvable)
//  .localAuthenticationDisabled(java.lang.Boolean)
//  .localAuthenticationDisabled(IResolvable)
//  .retentionInDays(java.lang.Number)
//  .samplingPercentage(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ApplicationInsightsTimeouts)
//  .workspaceId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.applicationType">applicationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#application_type ApplicationInsights#application_type}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#location ApplicationInsights#location}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#name ApplicationInsights#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#resource_group_name ApplicationInsights#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.dailyDataCapInGb">dailyDataCapInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#daily_data_cap_in_gb ApplicationInsights#daily_data_cap_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.dailyDataCapNotificationsDisabled">dailyDataCapNotificationsDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#daily_data_cap_notifications_disabled ApplicationInsights#daily_data_cap_notifications_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.disableIpMasking">disableIpMasking</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#disable_ip_masking ApplicationInsights#disable_ip_masking}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.forceCustomerStorageForProfiler">forceCustomerStorageForProfiler</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#force_customer_storage_for_profiler ApplicationInsights#force_customer_storage_for_profiler}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#id ApplicationInsights#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.internetIngestionEnabled">internetIngestionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#internet_ingestion_enabled ApplicationInsights#internet_ingestion_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.internetQueryEnabled">internetQueryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#internet_query_enabled ApplicationInsights#internet_query_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.localAuthenticationDisabled">localAuthenticationDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#local_authentication_disabled ApplicationInsights#local_authentication_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.retentionInDays">retentionInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#retention_in_days ApplicationInsights#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.samplingPercentage">samplingPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#sampling_percentage ApplicationInsights#sampling_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#tags ApplicationInsights#tags}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#workspace_id ApplicationInsights#workspace_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.applicationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#application_type ApplicationInsights#application_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#location ApplicationInsights#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#name ApplicationInsights#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#resource_group_name ApplicationInsights#resource_group_name}.

---

##### `dailyDataCapInGb`<sup>Optional</sup> <a name="dailyDataCapInGb" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.dailyDataCapInGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#daily_data_cap_in_gb ApplicationInsights#daily_data_cap_in_gb}.

---

##### `dailyDataCapNotificationsDisabled`<sup>Optional</sup> <a name="dailyDataCapNotificationsDisabled" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.dailyDataCapNotificationsDisabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#daily_data_cap_notifications_disabled ApplicationInsights#daily_data_cap_notifications_disabled}.

---

##### `disableIpMasking`<sup>Optional</sup> <a name="disableIpMasking" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.disableIpMasking"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#disable_ip_masking ApplicationInsights#disable_ip_masking}.

---

##### `forceCustomerStorageForProfiler`<sup>Optional</sup> <a name="forceCustomerStorageForProfiler" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.forceCustomerStorageForProfiler"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#force_customer_storage_for_profiler ApplicationInsights#force_customer_storage_for_profiler}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#id ApplicationInsights#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internetIngestionEnabled`<sup>Optional</sup> <a name="internetIngestionEnabled" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.internetIngestionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#internet_ingestion_enabled ApplicationInsights#internet_ingestion_enabled}.

---

##### `internetQueryEnabled`<sup>Optional</sup> <a name="internetQueryEnabled" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.internetQueryEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#internet_query_enabled ApplicationInsights#internet_query_enabled}.

---

##### `localAuthenticationDisabled`<sup>Optional</sup> <a name="localAuthenticationDisabled" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.localAuthenticationDisabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#local_authentication_disabled ApplicationInsights#local_authentication_disabled}.

---

##### `retentionInDays`<sup>Optional</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.retentionInDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#retention_in_days ApplicationInsights#retention_in_days}.

---

##### `samplingPercentage`<sup>Optional</sup> <a name="samplingPercentage" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.samplingPercentage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#sampling_percentage ApplicationInsights#sampling_percentage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#tags ApplicationInsights#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#timeouts ApplicationInsights#timeouts}

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#workspace_id ApplicationInsights#workspace_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetDailyDataCapInGb">resetDailyDataCapInGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetDailyDataCapNotificationsDisabled">resetDailyDataCapNotificationsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetDisableIpMasking">resetDisableIpMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetForceCustomerStorageForProfiler">resetForceCustomerStorageForProfiler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetInternetIngestionEnabled">resetInternetIngestionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetInternetQueryEnabled">resetInternetQueryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetLocalAuthenticationDisabled">resetLocalAuthenticationDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetRetentionInDays">resetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetSamplingPercentage">resetSamplingPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.putTimeouts"></a>

```java
public void putTimeouts(ApplicationInsightsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a>

---

##### `resetDailyDataCapInGb` <a name="resetDailyDataCapInGb" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetDailyDataCapInGb"></a>

```java
public void resetDailyDataCapInGb()
```

##### `resetDailyDataCapNotificationsDisabled` <a name="resetDailyDataCapNotificationsDisabled" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetDailyDataCapNotificationsDisabled"></a>

```java
public void resetDailyDataCapNotificationsDisabled()
```

##### `resetDisableIpMasking` <a name="resetDisableIpMasking" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetDisableIpMasking"></a>

```java
public void resetDisableIpMasking()
```

##### `resetForceCustomerStorageForProfiler` <a name="resetForceCustomerStorageForProfiler" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetForceCustomerStorageForProfiler"></a>

```java
public void resetForceCustomerStorageForProfiler()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetId"></a>

```java
public void resetId()
```

##### `resetInternetIngestionEnabled` <a name="resetInternetIngestionEnabled" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetInternetIngestionEnabled"></a>

```java
public void resetInternetIngestionEnabled()
```

##### `resetInternetQueryEnabled` <a name="resetInternetQueryEnabled" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetInternetQueryEnabled"></a>

```java
public void resetInternetQueryEnabled()
```

##### `resetLocalAuthenticationDisabled` <a name="resetLocalAuthenticationDisabled" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetLocalAuthenticationDisabled"></a>

```java
public void resetLocalAuthenticationDisabled()
```

##### `resetRetentionInDays` <a name="resetRetentionInDays" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetRetentionInDays"></a>

```java
public void resetRetentionInDays()
```

##### `resetSamplingPercentage` <a name="resetSamplingPercentage" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetSamplingPercentage"></a>

```java
public void resetSamplingPercentage()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationInsights resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights.ApplicationInsights;

ApplicationInsights.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights.ApplicationInsights;

ApplicationInsights.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights.ApplicationInsights;

ApplicationInsights.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights.ApplicationInsights;

ApplicationInsights.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApplicationInsights.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApplicationInsights resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApplicationInsights to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApplicationInsights that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationInsights to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.instrumentationKey">instrumentationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference">ApplicationInsightsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.applicationTypeInput">applicationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapInGbInput">dailyDataCapInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapNotificationsDisabledInput">dailyDataCapNotificationsDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.disableIpMaskingInput">disableIpMaskingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.forceCustomerStorageForProfilerInput">forceCustomerStorageForProfilerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.internetIngestionEnabledInput">internetIngestionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.internetQueryEnabledInput">internetQueryEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.localAuthenticationDisabledInput">localAuthenticationDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.samplingPercentageInput">samplingPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.applicationType">applicationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapInGb">dailyDataCapInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapNotificationsDisabled">dailyDataCapNotificationsDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.disableIpMasking">disableIpMasking</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.forceCustomerStorageForProfiler">forceCustomerStorageForProfiler</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.internetIngestionEnabled">internetIngestionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.internetQueryEnabled">internetQueryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.localAuthenticationDisabled">localAuthenticationDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.retentionInDays">retentionInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.samplingPercentage">samplingPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

---

##### `instrumentationKey`<sup>Required</sup> <a name="instrumentationKey" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.instrumentationKey"></a>

```java
public java.lang.String getInstrumentationKey();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.timeouts"></a>

```java
public ApplicationInsightsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference">ApplicationInsightsTimeoutsOutputReference</a>

---

##### `applicationTypeInput`<sup>Optional</sup> <a name="applicationTypeInput" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.applicationTypeInput"></a>

```java
public java.lang.String getApplicationTypeInput();
```

- *Type:* java.lang.String

---

##### `dailyDataCapInGbInput`<sup>Optional</sup> <a name="dailyDataCapInGbInput" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapInGbInput"></a>

```java
public java.lang.Number getDailyDataCapInGbInput();
```

- *Type:* java.lang.Number

---

##### `dailyDataCapNotificationsDisabledInput`<sup>Optional</sup> <a name="dailyDataCapNotificationsDisabledInput" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapNotificationsDisabledInput"></a>

```java
public java.lang.Object getDailyDataCapNotificationsDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableIpMaskingInput`<sup>Optional</sup> <a name="disableIpMaskingInput" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.disableIpMaskingInput"></a>

```java
public java.lang.Object getDisableIpMaskingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forceCustomerStorageForProfilerInput`<sup>Optional</sup> <a name="forceCustomerStorageForProfilerInput" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.forceCustomerStorageForProfilerInput"></a>

```java
public java.lang.Object getForceCustomerStorageForProfilerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `internetIngestionEnabledInput`<sup>Optional</sup> <a name="internetIngestionEnabledInput" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.internetIngestionEnabledInput"></a>

```java
public java.lang.Object getInternetIngestionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internetQueryEnabledInput`<sup>Optional</sup> <a name="internetQueryEnabledInput" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.internetQueryEnabledInput"></a>

```java
public java.lang.Object getInternetQueryEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `localAuthenticationDisabledInput`<sup>Optional</sup> <a name="localAuthenticationDisabledInput" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.localAuthenticationDisabledInput"></a>

```java
public java.lang.Object getLocalAuthenticationDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.retentionInDaysInput"></a>

```java
public java.lang.Number getRetentionInDaysInput();
```

- *Type:* java.lang.Number

---

##### `samplingPercentageInput`<sup>Optional</sup> <a name="samplingPercentageInput" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.samplingPercentageInput"></a>

```java
public java.lang.Number getSamplingPercentageInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.applicationType"></a>

```java
public java.lang.String getApplicationType();
```

- *Type:* java.lang.String

---

##### `dailyDataCapInGb`<sup>Required</sup> <a name="dailyDataCapInGb" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapInGb"></a>

```java
public java.lang.Number getDailyDataCapInGb();
```

- *Type:* java.lang.Number

---

##### `dailyDataCapNotificationsDisabled`<sup>Required</sup> <a name="dailyDataCapNotificationsDisabled" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapNotificationsDisabled"></a>

```java
public java.lang.Object getDailyDataCapNotificationsDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableIpMasking`<sup>Required</sup> <a name="disableIpMasking" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.disableIpMasking"></a>

```java
public java.lang.Object getDisableIpMasking();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forceCustomerStorageForProfiler`<sup>Required</sup> <a name="forceCustomerStorageForProfiler" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.forceCustomerStorageForProfiler"></a>

```java
public java.lang.Object getForceCustomerStorageForProfiler();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internetIngestionEnabled`<sup>Required</sup> <a name="internetIngestionEnabled" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.internetIngestionEnabled"></a>

```java
public java.lang.Object getInternetIngestionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internetQueryEnabled`<sup>Required</sup> <a name="internetQueryEnabled" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.internetQueryEnabled"></a>

```java
public java.lang.Object getInternetQueryEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `localAuthenticationDisabled`<sup>Required</sup> <a name="localAuthenticationDisabled" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.localAuthenticationDisabled"></a>

```java
public java.lang.Object getLocalAuthenticationDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.retentionInDays"></a>

```java
public java.lang.Number getRetentionInDays();
```

- *Type:* java.lang.Number

---

##### `samplingPercentage`<sup>Required</sup> <a name="samplingPercentage" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.samplingPercentage"></a>

```java
public java.lang.Number getSamplingPercentage();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsights.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationInsightsConfig <a name="ApplicationInsightsConfig" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights.ApplicationInsightsConfig;

ApplicationInsightsConfig.builder()
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
    .applicationType(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .dailyDataCapInGb(java.lang.Number)
//  .dailyDataCapNotificationsDisabled(java.lang.Boolean)
//  .dailyDataCapNotificationsDisabled(IResolvable)
//  .disableIpMasking(java.lang.Boolean)
//  .disableIpMasking(IResolvable)
//  .forceCustomerStorageForProfiler(java.lang.Boolean)
//  .forceCustomerStorageForProfiler(IResolvable)
//  .id(java.lang.String)
//  .internetIngestionEnabled(java.lang.Boolean)
//  .internetIngestionEnabled(IResolvable)
//  .internetQueryEnabled(java.lang.Boolean)
//  .internetQueryEnabled(IResolvable)
//  .localAuthenticationDisabled(java.lang.Boolean)
//  .localAuthenticationDisabled(IResolvable)
//  .retentionInDays(java.lang.Number)
//  .samplingPercentage(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ApplicationInsightsTimeouts)
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.applicationType">applicationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#application_type ApplicationInsights#application_type}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#location ApplicationInsights#location}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#name ApplicationInsights#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#resource_group_name ApplicationInsights#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.dailyDataCapInGb">dailyDataCapInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#daily_data_cap_in_gb ApplicationInsights#daily_data_cap_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.dailyDataCapNotificationsDisabled">dailyDataCapNotificationsDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#daily_data_cap_notifications_disabled ApplicationInsights#daily_data_cap_notifications_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.disableIpMasking">disableIpMasking</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#disable_ip_masking ApplicationInsights#disable_ip_masking}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.forceCustomerStorageForProfiler">forceCustomerStorageForProfiler</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#force_customer_storage_for_profiler ApplicationInsights#force_customer_storage_for_profiler}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#id ApplicationInsights#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.internetIngestionEnabled">internetIngestionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#internet_ingestion_enabled ApplicationInsights#internet_ingestion_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.internetQueryEnabled">internetQueryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#internet_query_enabled ApplicationInsights#internet_query_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.localAuthenticationDisabled">localAuthenticationDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#local_authentication_disabled ApplicationInsights#local_authentication_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.retentionInDays">retentionInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#retention_in_days ApplicationInsights#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.samplingPercentage">samplingPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#sampling_percentage ApplicationInsights#sampling_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#tags ApplicationInsights#tags}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#workspace_id ApplicationInsights#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.applicationType"></a>

```java
public java.lang.String getApplicationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#application_type ApplicationInsights#application_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#location ApplicationInsights#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#name ApplicationInsights#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#resource_group_name ApplicationInsights#resource_group_name}.

---

##### `dailyDataCapInGb`<sup>Optional</sup> <a name="dailyDataCapInGb" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.dailyDataCapInGb"></a>

```java
public java.lang.Number getDailyDataCapInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#daily_data_cap_in_gb ApplicationInsights#daily_data_cap_in_gb}.

---

##### `dailyDataCapNotificationsDisabled`<sup>Optional</sup> <a name="dailyDataCapNotificationsDisabled" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.dailyDataCapNotificationsDisabled"></a>

```java
public java.lang.Object getDailyDataCapNotificationsDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#daily_data_cap_notifications_disabled ApplicationInsights#daily_data_cap_notifications_disabled}.

---

##### `disableIpMasking`<sup>Optional</sup> <a name="disableIpMasking" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.disableIpMasking"></a>

```java
public java.lang.Object getDisableIpMasking();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#disable_ip_masking ApplicationInsights#disable_ip_masking}.

---

##### `forceCustomerStorageForProfiler`<sup>Optional</sup> <a name="forceCustomerStorageForProfiler" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.forceCustomerStorageForProfiler"></a>

```java
public java.lang.Object getForceCustomerStorageForProfiler();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#force_customer_storage_for_profiler ApplicationInsights#force_customer_storage_for_profiler}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#id ApplicationInsights#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internetIngestionEnabled`<sup>Optional</sup> <a name="internetIngestionEnabled" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.internetIngestionEnabled"></a>

```java
public java.lang.Object getInternetIngestionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#internet_ingestion_enabled ApplicationInsights#internet_ingestion_enabled}.

---

##### `internetQueryEnabled`<sup>Optional</sup> <a name="internetQueryEnabled" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.internetQueryEnabled"></a>

```java
public java.lang.Object getInternetQueryEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#internet_query_enabled ApplicationInsights#internet_query_enabled}.

---

##### `localAuthenticationDisabled`<sup>Optional</sup> <a name="localAuthenticationDisabled" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.localAuthenticationDisabled"></a>

```java
public java.lang.Object getLocalAuthenticationDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#local_authentication_disabled ApplicationInsights#local_authentication_disabled}.

---

##### `retentionInDays`<sup>Optional</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.retentionInDays"></a>

```java
public java.lang.Number getRetentionInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#retention_in_days ApplicationInsights#retention_in_days}.

---

##### `samplingPercentage`<sup>Optional</sup> <a name="samplingPercentage" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.samplingPercentage"></a>

```java
public java.lang.Number getSamplingPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#sampling_percentage ApplicationInsights#sampling_percentage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#tags ApplicationInsights#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.timeouts"></a>

```java
public ApplicationInsightsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#timeouts ApplicationInsights#timeouts}

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#workspace_id ApplicationInsights#workspace_id}.

---

### ApplicationInsightsTimeouts <a name="ApplicationInsightsTimeouts" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights.ApplicationInsightsTimeouts;

ApplicationInsightsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#create ApplicationInsights#create}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#delete ApplicationInsights#delete}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#read ApplicationInsights#read}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#update ApplicationInsights#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#create ApplicationInsights#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#delete ApplicationInsights#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#read ApplicationInsights#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights#update ApplicationInsights#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationInsightsTimeoutsOutputReference <a name="ApplicationInsightsTimeoutsOutputReference" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights.ApplicationInsightsTimeoutsOutputReference;

new ApplicationInsightsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a>

---



