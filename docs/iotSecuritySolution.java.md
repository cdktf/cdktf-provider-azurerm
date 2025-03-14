# `iotSecuritySolution` Submodule <a name="`iotSecuritySolution` Submodule" id="@cdktf/provider-azurerm.iotSecuritySolution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotSecuritySolution <a name="IotSecuritySolution" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution azurerm_iot_security_solution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_solution.IotSecuritySolution;

IotSecuritySolution.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .iothubIds(java.util.List<java.lang.String>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .additionalWorkspace(IResolvable)
//  .additionalWorkspace(java.util.List<IotSecuritySolutionAdditionalWorkspace>)
//  .disabledDataSources(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .eventsToExport(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .logAnalyticsWorkspaceId(java.lang.String)
//  .logUnmaskedIpsEnabled(java.lang.Boolean)
//  .logUnmaskedIpsEnabled(IResolvable)
//  .queryForResources(java.lang.String)
//  .querySubscriptionIds(java.util.List<java.lang.String>)
//  .recommendationsEnabled(IotSecuritySolutionRecommendationsEnabled)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(IotSecuritySolutionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#display_name IotSecuritySolution#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.iothubIds">iothubIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#iothub_ids IotSecuritySolution#iothub_ids}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#location IotSecuritySolution#location}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#name IotSecuritySolution#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#resource_group_name IotSecuritySolution#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.additionalWorkspace">additionalWorkspace</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>></code> | additional_workspace block. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.disabledDataSources">disabledDataSources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#disabled_data_sources IotSecuritySolution#disabled_data_sources}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#enabled IotSecuritySolution#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.eventsToExport">eventsToExport</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#events_to_export IotSecuritySolution#events_to_export}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#id IotSecuritySolution#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#log_analytics_workspace_id IotSecuritySolution#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.logUnmaskedIpsEnabled">logUnmaskedIpsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#log_unmasked_ips_enabled IotSecuritySolution#log_unmasked_ips_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.queryForResources">queryForResources</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#query_for_resources IotSecuritySolution#query_for_resources}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.querySubscriptionIds">querySubscriptionIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#query_subscription_ids IotSecuritySolution#query_subscription_ids}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.recommendationsEnabled">recommendationsEnabled</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a></code> | recommendations_enabled block. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#tags IotSecuritySolution#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#display_name IotSecuritySolution#display_name}.

---

##### `iothubIds`<sup>Required</sup> <a name="iothubIds" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.iothubIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#iothub_ids IotSecuritySolution#iothub_ids}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#location IotSecuritySolution#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#name IotSecuritySolution#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#resource_group_name IotSecuritySolution#resource_group_name}.

---

##### `additionalWorkspace`<sup>Optional</sup> <a name="additionalWorkspace" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.additionalWorkspace"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>>

additional_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#additional_workspace IotSecuritySolution#additional_workspace}

---

##### `disabledDataSources`<sup>Optional</sup> <a name="disabledDataSources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.disabledDataSources"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#disabled_data_sources IotSecuritySolution#disabled_data_sources}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#enabled IotSecuritySolution#enabled}.

---

##### `eventsToExport`<sup>Optional</sup> <a name="eventsToExport" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.eventsToExport"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#events_to_export IotSecuritySolution#events_to_export}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#id IotSecuritySolution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logAnalyticsWorkspaceId`<sup>Optional</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#log_analytics_workspace_id IotSecuritySolution#log_analytics_workspace_id}.

---

##### `logUnmaskedIpsEnabled`<sup>Optional</sup> <a name="logUnmaskedIpsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.logUnmaskedIpsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#log_unmasked_ips_enabled IotSecuritySolution#log_unmasked_ips_enabled}.

---

##### `queryForResources`<sup>Optional</sup> <a name="queryForResources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.queryForResources"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#query_for_resources IotSecuritySolution#query_for_resources}.

---

##### `querySubscriptionIds`<sup>Optional</sup> <a name="querySubscriptionIds" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.querySubscriptionIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#query_subscription_ids IotSecuritySolution#query_subscription_ids}.

---

##### `recommendationsEnabled`<sup>Optional</sup> <a name="recommendationsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.recommendationsEnabled"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a>

recommendations_enabled block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#recommendations_enabled IotSecuritySolution#recommendations_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#tags IotSecuritySolution#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#timeouts IotSecuritySolution#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putAdditionalWorkspace">putAdditionalWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putRecommendationsEnabled">putRecommendationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetAdditionalWorkspace">resetAdditionalWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetDisabledDataSources">resetDisabledDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEventsToExport">resetEventsToExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogAnalyticsWorkspaceId">resetLogAnalyticsWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogUnmaskedIpsEnabled">resetLogUnmaskedIpsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQueryForResources">resetQueryForResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQuerySubscriptionIds">resetQuerySubscriptionIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetRecommendationsEnabled">resetRecommendationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalWorkspace` <a name="putAdditionalWorkspace" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putAdditionalWorkspace"></a>

```java
public void putAdditionalWorkspace(IResolvable OR java.util.List<IotSecuritySolutionAdditionalWorkspace> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putAdditionalWorkspace.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>>

---

##### `putRecommendationsEnabled` <a name="putRecommendationsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putRecommendationsEnabled"></a>

```java
public void putRecommendationsEnabled(IotSecuritySolutionRecommendationsEnabled value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putRecommendationsEnabled.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putTimeouts"></a>

```java
public void putTimeouts(IotSecuritySolutionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a>

---

##### `resetAdditionalWorkspace` <a name="resetAdditionalWorkspace" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetAdditionalWorkspace"></a>

```java
public void resetAdditionalWorkspace()
```

##### `resetDisabledDataSources` <a name="resetDisabledDataSources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetDisabledDataSources"></a>

```java
public void resetDisabledDataSources()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEventsToExport` <a name="resetEventsToExport" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEventsToExport"></a>

```java
public void resetEventsToExport()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetId"></a>

```java
public void resetId()
```

##### `resetLogAnalyticsWorkspaceId` <a name="resetLogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogAnalyticsWorkspaceId"></a>

```java
public void resetLogAnalyticsWorkspaceId()
```

##### `resetLogUnmaskedIpsEnabled` <a name="resetLogUnmaskedIpsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogUnmaskedIpsEnabled"></a>

```java
public void resetLogUnmaskedIpsEnabled()
```

##### `resetQueryForResources` <a name="resetQueryForResources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQueryForResources"></a>

```java
public void resetQueryForResources()
```

##### `resetQuerySubscriptionIds` <a name="resetQuerySubscriptionIds" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQuerySubscriptionIds"></a>

```java
public void resetQuerySubscriptionIds()
```

##### `resetRecommendationsEnabled` <a name="resetRecommendationsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetRecommendationsEnabled"></a>

```java
public void resetRecommendationsEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IotSecuritySolution resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_solution.IotSecuritySolution;

IotSecuritySolution.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_solution.IotSecuritySolution;

IotSecuritySolution.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_solution.IotSecuritySolution;

IotSecuritySolution.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_solution.IotSecuritySolution;

IotSecuritySolution.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotSecuritySolution.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IotSecuritySolution resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotSecuritySolution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotSecuritySolution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IotSecuritySolution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspace">additionalWorkspace</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList">IotSecuritySolutionAdditionalWorkspaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendationsEnabled">recommendationsEnabled</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference">IotSecuritySolutionRecommendationsEnabledOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference">IotSecuritySolutionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspaceInput">additionalWorkspaceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSourcesInput">disabledDataSourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExportInput">eventsToExportInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIdsInput">iothubIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabledInput">logUnmaskedIpsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResourcesInput">queryForResourcesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIdsInput">querySubscriptionIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendationsEnabledInput">recommendationsEnabledInput</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSources">disabledDataSources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExport">eventsToExport</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIds">iothubIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabled">logUnmaskedIpsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResources">queryForResources</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIds">querySubscriptionIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `additionalWorkspace`<sup>Required</sup> <a name="additionalWorkspace" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspace"></a>

```java
public IotSecuritySolutionAdditionalWorkspaceList getAdditionalWorkspace();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList">IotSecuritySolutionAdditionalWorkspaceList</a>

---

##### `recommendationsEnabled`<sup>Required</sup> <a name="recommendationsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendationsEnabled"></a>

```java
public IotSecuritySolutionRecommendationsEnabledOutputReference getRecommendationsEnabled();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference">IotSecuritySolutionRecommendationsEnabledOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeouts"></a>

```java
public IotSecuritySolutionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference">IotSecuritySolutionTimeoutsOutputReference</a>

---

##### `additionalWorkspaceInput`<sup>Optional</sup> <a name="additionalWorkspaceInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspaceInput"></a>

```java
public java.lang.Object getAdditionalWorkspaceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>>

---

##### `disabledDataSourcesInput`<sup>Optional</sup> <a name="disabledDataSourcesInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSourcesInput"></a>

```java
public java.util.List<java.lang.String> getDisabledDataSourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eventsToExportInput`<sup>Optional</sup> <a name="eventsToExportInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExportInput"></a>

```java
public java.util.List<java.lang.String> getEventsToExportInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `iothubIdsInput`<sup>Optional</sup> <a name="iothubIdsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIdsInput"></a>

```java
public java.util.List<java.lang.String> getIothubIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceIdInput"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `logUnmaskedIpsEnabledInput`<sup>Optional</sup> <a name="logUnmaskedIpsEnabledInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabledInput"></a>

```java
public java.lang.Object getLogUnmaskedIpsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryForResourcesInput`<sup>Optional</sup> <a name="queryForResourcesInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResourcesInput"></a>

```java
public java.lang.String getQueryForResourcesInput();
```

- *Type:* java.lang.String

---

##### `querySubscriptionIdsInput`<sup>Optional</sup> <a name="querySubscriptionIdsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIdsInput"></a>

```java
public java.util.List<java.lang.String> getQuerySubscriptionIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recommendationsEnabledInput`<sup>Optional</sup> <a name="recommendationsEnabledInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendationsEnabledInput"></a>

```java
public IotSecuritySolutionRecommendationsEnabled getRecommendationsEnabledInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a>

---

##### `disabledDataSources`<sup>Required</sup> <a name="disabledDataSources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSources"></a>

```java
public java.util.List<java.lang.String> getDisabledDataSources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eventsToExport`<sup>Required</sup> <a name="eventsToExport" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExport"></a>

```java
public java.util.List<java.lang.String> getEventsToExport();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `iothubIds`<sup>Required</sup> <a name="iothubIds" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIds"></a>

```java
public java.util.List<java.lang.String> getIothubIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

---

##### `logUnmaskedIpsEnabled`<sup>Required</sup> <a name="logUnmaskedIpsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabled"></a>

```java
public java.lang.Object getLogUnmaskedIpsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `queryForResources`<sup>Required</sup> <a name="queryForResources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResources"></a>

```java
public java.lang.String getQueryForResources();
```

- *Type:* java.lang.String

---

##### `querySubscriptionIds`<sup>Required</sup> <a name="querySubscriptionIds" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIds"></a>

```java
public java.util.List<java.lang.String> getQuerySubscriptionIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotSecuritySolutionAdditionalWorkspace <a name="IotSecuritySolutionAdditionalWorkspace" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_solution.IotSecuritySolutionAdditionalWorkspace;

IotSecuritySolutionAdditionalWorkspace.builder()
    .dataTypes(java.util.List<java.lang.String>)
    .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.dataTypes">dataTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#data_types IotSecuritySolution#data_types}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#workspace_id IotSecuritySolution#workspace_id}. |

---

##### `dataTypes`<sup>Required</sup> <a name="dataTypes" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.dataTypes"></a>

```java
public java.util.List<java.lang.String> getDataTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#data_types IotSecuritySolution#data_types}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#workspace_id IotSecuritySolution#workspace_id}.

---

### IotSecuritySolutionConfig <a name="IotSecuritySolutionConfig" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_solution.IotSecuritySolutionConfig;

IotSecuritySolutionConfig.builder()
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
    .displayName(java.lang.String)
    .iothubIds(java.util.List<java.lang.String>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .additionalWorkspace(IResolvable)
//  .additionalWorkspace(java.util.List<IotSecuritySolutionAdditionalWorkspace>)
//  .disabledDataSources(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .eventsToExport(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .logAnalyticsWorkspaceId(java.lang.String)
//  .logUnmaskedIpsEnabled(java.lang.Boolean)
//  .logUnmaskedIpsEnabled(IResolvable)
//  .queryForResources(java.lang.String)
//  .querySubscriptionIds(java.util.List<java.lang.String>)
//  .recommendationsEnabled(IotSecuritySolutionRecommendationsEnabled)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(IotSecuritySolutionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#display_name IotSecuritySolution#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.iothubIds">iothubIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#iothub_ids IotSecuritySolution#iothub_ids}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#location IotSecuritySolution#location}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#name IotSecuritySolution#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#resource_group_name IotSecuritySolution#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.additionalWorkspace">additionalWorkspace</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>></code> | additional_workspace block. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.disabledDataSources">disabledDataSources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#disabled_data_sources IotSecuritySolution#disabled_data_sources}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#enabled IotSecuritySolution#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.eventsToExport">eventsToExport</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#events_to_export IotSecuritySolution#events_to_export}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#id IotSecuritySolution#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#log_analytics_workspace_id IotSecuritySolution#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logUnmaskedIpsEnabled">logUnmaskedIpsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#log_unmasked_ips_enabled IotSecuritySolution#log_unmasked_ips_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.queryForResources">queryForResources</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#query_for_resources IotSecuritySolution#query_for_resources}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.querySubscriptionIds">querySubscriptionIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#query_subscription_ids IotSecuritySolution#query_subscription_ids}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.recommendationsEnabled">recommendationsEnabled</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a></code> | recommendations_enabled block. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#tags IotSecuritySolution#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#display_name IotSecuritySolution#display_name}.

---

##### `iothubIds`<sup>Required</sup> <a name="iothubIds" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.iothubIds"></a>

```java
public java.util.List<java.lang.String> getIothubIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#iothub_ids IotSecuritySolution#iothub_ids}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#location IotSecuritySolution#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#name IotSecuritySolution#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#resource_group_name IotSecuritySolution#resource_group_name}.

---

##### `additionalWorkspace`<sup>Optional</sup> <a name="additionalWorkspace" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.additionalWorkspace"></a>

```java
public java.lang.Object getAdditionalWorkspace();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>>

additional_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#additional_workspace IotSecuritySolution#additional_workspace}

---

##### `disabledDataSources`<sup>Optional</sup> <a name="disabledDataSources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.disabledDataSources"></a>

```java
public java.util.List<java.lang.String> getDisabledDataSources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#disabled_data_sources IotSecuritySolution#disabled_data_sources}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#enabled IotSecuritySolution#enabled}.

---

##### `eventsToExport`<sup>Optional</sup> <a name="eventsToExport" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.eventsToExport"></a>

```java
public java.util.List<java.lang.String> getEventsToExport();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#events_to_export IotSecuritySolution#events_to_export}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#id IotSecuritySolution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logAnalyticsWorkspaceId`<sup>Optional</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#log_analytics_workspace_id IotSecuritySolution#log_analytics_workspace_id}.

---

##### `logUnmaskedIpsEnabled`<sup>Optional</sup> <a name="logUnmaskedIpsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logUnmaskedIpsEnabled"></a>

```java
public java.lang.Object getLogUnmaskedIpsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#log_unmasked_ips_enabled IotSecuritySolution#log_unmasked_ips_enabled}.

---

##### `queryForResources`<sup>Optional</sup> <a name="queryForResources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.queryForResources"></a>

```java
public java.lang.String getQueryForResources();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#query_for_resources IotSecuritySolution#query_for_resources}.

---

##### `querySubscriptionIds`<sup>Optional</sup> <a name="querySubscriptionIds" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.querySubscriptionIds"></a>

```java
public java.util.List<java.lang.String> getQuerySubscriptionIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#query_subscription_ids IotSecuritySolution#query_subscription_ids}.

---

##### `recommendationsEnabled`<sup>Optional</sup> <a name="recommendationsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.recommendationsEnabled"></a>

```java
public IotSecuritySolutionRecommendationsEnabled getRecommendationsEnabled();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a>

recommendations_enabled block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#recommendations_enabled IotSecuritySolution#recommendations_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#tags IotSecuritySolution#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.timeouts"></a>

```java
public IotSecuritySolutionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#timeouts IotSecuritySolution#timeouts}

---

### IotSecuritySolutionRecommendationsEnabled <a name="IotSecuritySolutionRecommendationsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_solution.IotSecuritySolutionRecommendationsEnabled;

IotSecuritySolutionRecommendationsEnabled.builder()
//  .acrAuthentication(java.lang.Boolean)
//  .acrAuthentication(IResolvable)
//  .agentSendUnutilizedMsg(java.lang.Boolean)
//  .agentSendUnutilizedMsg(IResolvable)
//  .baseline(java.lang.Boolean)
//  .baseline(IResolvable)
//  .edgeHubMemOptimize(java.lang.Boolean)
//  .edgeHubMemOptimize(IResolvable)
//  .edgeLoggingOption(java.lang.Boolean)
//  .edgeLoggingOption(IResolvable)
//  .inconsistentModuleSettings(java.lang.Boolean)
//  .inconsistentModuleSettings(IResolvable)
//  .installAgent(java.lang.Boolean)
//  .installAgent(IResolvable)
//  .ipFilterDenyAll(java.lang.Boolean)
//  .ipFilterDenyAll(IResolvable)
//  .ipFilterPermissiveRule(java.lang.Boolean)
//  .ipFilterPermissiveRule(IResolvable)
//  .openPorts(java.lang.Boolean)
//  .openPorts(IResolvable)
//  .permissiveFirewallPolicy(java.lang.Boolean)
//  .permissiveFirewallPolicy(IResolvable)
//  .permissiveInputFirewallRules(java.lang.Boolean)
//  .permissiveInputFirewallRules(IResolvable)
//  .permissiveOutputFirewallRules(java.lang.Boolean)
//  .permissiveOutputFirewallRules(IResolvable)
//  .privilegedDockerOptions(java.lang.Boolean)
//  .privilegedDockerOptions(IResolvable)
//  .sharedCredentials(java.lang.Boolean)
//  .sharedCredentials(IResolvable)
//  .vulnerableTlsCipherSuite(java.lang.Boolean)
//  .vulnerableTlsCipherSuite(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.acrAuthentication">acrAuthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#acr_authentication IotSecuritySolution#acr_authentication}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.agentSendUnutilizedMsg">agentSendUnutilizedMsg</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#agent_send_unutilized_msg IotSecuritySolution#agent_send_unutilized_msg}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.baseline">baseline</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#baseline IotSecuritySolution#baseline}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.edgeHubMemOptimize">edgeHubMemOptimize</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#edge_hub_mem_optimize IotSecuritySolution#edge_hub_mem_optimize}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.edgeLoggingOption">edgeLoggingOption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#edge_logging_option IotSecuritySolution#edge_logging_option}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.inconsistentModuleSettings">inconsistentModuleSettings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#inconsistent_module_settings IotSecuritySolution#inconsistent_module_settings}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.installAgent">installAgent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#install_agent IotSecuritySolution#install_agent}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.ipFilterDenyAll">ipFilterDenyAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#ip_filter_deny_all IotSecuritySolution#ip_filter_deny_all}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.ipFilterPermissiveRule">ipFilterPermissiveRule</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#ip_filter_permissive_rule IotSecuritySolution#ip_filter_permissive_rule}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.openPorts">openPorts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#open_ports IotSecuritySolution#open_ports}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveFirewallPolicy">permissiveFirewallPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#permissive_firewall_policy IotSecuritySolution#permissive_firewall_policy}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveInputFirewallRules">permissiveInputFirewallRules</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#permissive_input_firewall_rules IotSecuritySolution#permissive_input_firewall_rules}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveOutputFirewallRules">permissiveOutputFirewallRules</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#permissive_output_firewall_rules IotSecuritySolution#permissive_output_firewall_rules}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.privilegedDockerOptions">privilegedDockerOptions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#privileged_docker_options IotSecuritySolution#privileged_docker_options}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.sharedCredentials">sharedCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#shared_credentials IotSecuritySolution#shared_credentials}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.vulnerableTlsCipherSuite">vulnerableTlsCipherSuite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#vulnerable_tls_cipher_suite IotSecuritySolution#vulnerable_tls_cipher_suite}. |

---

##### `acrAuthentication`<sup>Optional</sup> <a name="acrAuthentication" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.acrAuthentication"></a>

```java
public java.lang.Object getAcrAuthentication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#acr_authentication IotSecuritySolution#acr_authentication}.

---

##### `agentSendUnutilizedMsg`<sup>Optional</sup> <a name="agentSendUnutilizedMsg" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.agentSendUnutilizedMsg"></a>

```java
public java.lang.Object getAgentSendUnutilizedMsg();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#agent_send_unutilized_msg IotSecuritySolution#agent_send_unutilized_msg}.

---

##### `baseline`<sup>Optional</sup> <a name="baseline" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.baseline"></a>

```java
public java.lang.Object getBaseline();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#baseline IotSecuritySolution#baseline}.

---

##### `edgeHubMemOptimize`<sup>Optional</sup> <a name="edgeHubMemOptimize" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.edgeHubMemOptimize"></a>

```java
public java.lang.Object getEdgeHubMemOptimize();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#edge_hub_mem_optimize IotSecuritySolution#edge_hub_mem_optimize}.

---

##### `edgeLoggingOption`<sup>Optional</sup> <a name="edgeLoggingOption" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.edgeLoggingOption"></a>

```java
public java.lang.Object getEdgeLoggingOption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#edge_logging_option IotSecuritySolution#edge_logging_option}.

---

##### `inconsistentModuleSettings`<sup>Optional</sup> <a name="inconsistentModuleSettings" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.inconsistentModuleSettings"></a>

```java
public java.lang.Object getInconsistentModuleSettings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#inconsistent_module_settings IotSecuritySolution#inconsistent_module_settings}.

---

##### `installAgent`<sup>Optional</sup> <a name="installAgent" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.installAgent"></a>

```java
public java.lang.Object getInstallAgent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#install_agent IotSecuritySolution#install_agent}.

---

##### `ipFilterDenyAll`<sup>Optional</sup> <a name="ipFilterDenyAll" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.ipFilterDenyAll"></a>

```java
public java.lang.Object getIpFilterDenyAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#ip_filter_deny_all IotSecuritySolution#ip_filter_deny_all}.

---

##### `ipFilterPermissiveRule`<sup>Optional</sup> <a name="ipFilterPermissiveRule" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.ipFilterPermissiveRule"></a>

```java
public java.lang.Object getIpFilterPermissiveRule();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#ip_filter_permissive_rule IotSecuritySolution#ip_filter_permissive_rule}.

---

##### `openPorts`<sup>Optional</sup> <a name="openPorts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.openPorts"></a>

```java
public java.lang.Object getOpenPorts();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#open_ports IotSecuritySolution#open_ports}.

---

##### `permissiveFirewallPolicy`<sup>Optional</sup> <a name="permissiveFirewallPolicy" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveFirewallPolicy"></a>

```java
public java.lang.Object getPermissiveFirewallPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#permissive_firewall_policy IotSecuritySolution#permissive_firewall_policy}.

---

##### `permissiveInputFirewallRules`<sup>Optional</sup> <a name="permissiveInputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveInputFirewallRules"></a>

```java
public java.lang.Object getPermissiveInputFirewallRules();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#permissive_input_firewall_rules IotSecuritySolution#permissive_input_firewall_rules}.

---

##### `permissiveOutputFirewallRules`<sup>Optional</sup> <a name="permissiveOutputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveOutputFirewallRules"></a>

```java
public java.lang.Object getPermissiveOutputFirewallRules();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#permissive_output_firewall_rules IotSecuritySolution#permissive_output_firewall_rules}.

---

##### `privilegedDockerOptions`<sup>Optional</sup> <a name="privilegedDockerOptions" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.privilegedDockerOptions"></a>

```java
public java.lang.Object getPrivilegedDockerOptions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#privileged_docker_options IotSecuritySolution#privileged_docker_options}.

---

##### `sharedCredentials`<sup>Optional</sup> <a name="sharedCredentials" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.sharedCredentials"></a>

```java
public java.lang.Object getSharedCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#shared_credentials IotSecuritySolution#shared_credentials}.

---

##### `vulnerableTlsCipherSuite`<sup>Optional</sup> <a name="vulnerableTlsCipherSuite" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.vulnerableTlsCipherSuite"></a>

```java
public java.lang.Object getVulnerableTlsCipherSuite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#vulnerable_tls_cipher_suite IotSecuritySolution#vulnerable_tls_cipher_suite}.

---

### IotSecuritySolutionTimeouts <a name="IotSecuritySolutionTimeouts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_solution.IotSecuritySolutionTimeouts;

IotSecuritySolutionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#create IotSecuritySolution#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#delete IotSecuritySolution#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#read IotSecuritySolution#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#update IotSecuritySolution#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#create IotSecuritySolution#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#delete IotSecuritySolution#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#read IotSecuritySolution#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#update IotSecuritySolution#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotSecuritySolutionAdditionalWorkspaceList <a name="IotSecuritySolutionAdditionalWorkspaceList" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_solution.IotSecuritySolutionAdditionalWorkspaceList;

new IotSecuritySolutionAdditionalWorkspaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.get"></a>

```java
public IotSecuritySolutionAdditionalWorkspaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>>

---


### IotSecuritySolutionAdditionalWorkspaceOutputReference <a name="IotSecuritySolutionAdditionalWorkspaceOutputReference" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_solution.IotSecuritySolutionAdditionalWorkspaceOutputReference;

new IotSecuritySolutionAdditionalWorkspaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypesInput">dataTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypes">dataTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataTypesInput`<sup>Optional</sup> <a name="dataTypesInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypesInput"></a>

```java
public java.util.List<java.lang.String> getDataTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `dataTypes`<sup>Required</sup> <a name="dataTypes" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypes"></a>

```java
public java.util.List<java.lang.String> getDataTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>

---


### IotSecuritySolutionRecommendationsEnabledOutputReference <a name="IotSecuritySolutionRecommendationsEnabledOutputReference" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_solution.IotSecuritySolutionRecommendationsEnabledOutputReference;

new IotSecuritySolutionRecommendationsEnabledOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetAcrAuthentication">resetAcrAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetAgentSendUnutilizedMsg">resetAgentSendUnutilizedMsg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetBaseline">resetBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetEdgeHubMemOptimize">resetEdgeHubMemOptimize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetEdgeLoggingOption">resetEdgeLoggingOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetInconsistentModuleSettings">resetInconsistentModuleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetInstallAgent">resetInstallAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetIpFilterDenyAll">resetIpFilterDenyAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetIpFilterPermissiveRule">resetIpFilterPermissiveRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetOpenPorts">resetOpenPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveFirewallPolicy">resetPermissiveFirewallPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveInputFirewallRules">resetPermissiveInputFirewallRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveOutputFirewallRules">resetPermissiveOutputFirewallRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPrivilegedDockerOptions">resetPrivilegedDockerOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetSharedCredentials">resetSharedCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetVulnerableTlsCipherSuite">resetVulnerableTlsCipherSuite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcrAuthentication` <a name="resetAcrAuthentication" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetAcrAuthentication"></a>

```java
public void resetAcrAuthentication()
```

##### `resetAgentSendUnutilizedMsg` <a name="resetAgentSendUnutilizedMsg" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetAgentSendUnutilizedMsg"></a>

```java
public void resetAgentSendUnutilizedMsg()
```

##### `resetBaseline` <a name="resetBaseline" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetBaseline"></a>

```java
public void resetBaseline()
```

##### `resetEdgeHubMemOptimize` <a name="resetEdgeHubMemOptimize" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetEdgeHubMemOptimize"></a>

```java
public void resetEdgeHubMemOptimize()
```

##### `resetEdgeLoggingOption` <a name="resetEdgeLoggingOption" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetEdgeLoggingOption"></a>

```java
public void resetEdgeLoggingOption()
```

##### `resetInconsistentModuleSettings` <a name="resetInconsistentModuleSettings" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetInconsistentModuleSettings"></a>

```java
public void resetInconsistentModuleSettings()
```

##### `resetInstallAgent` <a name="resetInstallAgent" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetInstallAgent"></a>

```java
public void resetInstallAgent()
```

##### `resetIpFilterDenyAll` <a name="resetIpFilterDenyAll" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetIpFilterDenyAll"></a>

```java
public void resetIpFilterDenyAll()
```

##### `resetIpFilterPermissiveRule` <a name="resetIpFilterPermissiveRule" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetIpFilterPermissiveRule"></a>

```java
public void resetIpFilterPermissiveRule()
```

##### `resetOpenPorts` <a name="resetOpenPorts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetOpenPorts"></a>

```java
public void resetOpenPorts()
```

##### `resetPermissiveFirewallPolicy` <a name="resetPermissiveFirewallPolicy" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveFirewallPolicy"></a>

```java
public void resetPermissiveFirewallPolicy()
```

##### `resetPermissiveInputFirewallRules` <a name="resetPermissiveInputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveInputFirewallRules"></a>

```java
public void resetPermissiveInputFirewallRules()
```

##### `resetPermissiveOutputFirewallRules` <a name="resetPermissiveOutputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveOutputFirewallRules"></a>

```java
public void resetPermissiveOutputFirewallRules()
```

##### `resetPrivilegedDockerOptions` <a name="resetPrivilegedDockerOptions" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPrivilegedDockerOptions"></a>

```java
public void resetPrivilegedDockerOptions()
```

##### `resetSharedCredentials` <a name="resetSharedCredentials" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetSharedCredentials"></a>

```java
public void resetSharedCredentials()
```

##### `resetVulnerableTlsCipherSuite` <a name="resetVulnerableTlsCipherSuite" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetVulnerableTlsCipherSuite"></a>

```java
public void resetVulnerableTlsCipherSuite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.acrAuthenticationInput">acrAuthenticationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.agentSendUnutilizedMsgInput">agentSendUnutilizedMsgInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.baselineInput">baselineInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeHubMemOptimizeInput">edgeHubMemOptimizeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeLoggingOptionInput">edgeLoggingOptionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.inconsistentModuleSettingsInput">inconsistentModuleSettingsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.installAgentInput">installAgentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterDenyAllInput">ipFilterDenyAllInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterPermissiveRuleInput">ipFilterPermissiveRuleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.openPortsInput">openPortsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveFirewallPolicyInput">permissiveFirewallPolicyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveInputFirewallRulesInput">permissiveInputFirewallRulesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveOutputFirewallRulesInput">permissiveOutputFirewallRulesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.privilegedDockerOptionsInput">privilegedDockerOptionsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.sharedCredentialsInput">sharedCredentialsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.vulnerableTlsCipherSuiteInput">vulnerableTlsCipherSuiteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.acrAuthentication">acrAuthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.agentSendUnutilizedMsg">agentSendUnutilizedMsg</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.baseline">baseline</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeHubMemOptimize">edgeHubMemOptimize</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeLoggingOption">edgeLoggingOption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.inconsistentModuleSettings">inconsistentModuleSettings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.installAgent">installAgent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterDenyAll">ipFilterDenyAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterPermissiveRule">ipFilterPermissiveRule</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.openPorts">openPorts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveFirewallPolicy">permissiveFirewallPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveInputFirewallRules">permissiveInputFirewallRules</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveOutputFirewallRules">permissiveOutputFirewallRules</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.privilegedDockerOptions">privilegedDockerOptions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.sharedCredentials">sharedCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.vulnerableTlsCipherSuite">vulnerableTlsCipherSuite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acrAuthenticationInput`<sup>Optional</sup> <a name="acrAuthenticationInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.acrAuthenticationInput"></a>

```java
public java.lang.Object getAcrAuthenticationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `agentSendUnutilizedMsgInput`<sup>Optional</sup> <a name="agentSendUnutilizedMsgInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.agentSendUnutilizedMsgInput"></a>

```java
public java.lang.Object getAgentSendUnutilizedMsgInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `baselineInput`<sup>Optional</sup> <a name="baselineInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.baselineInput"></a>

```java
public java.lang.Object getBaselineInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `edgeHubMemOptimizeInput`<sup>Optional</sup> <a name="edgeHubMemOptimizeInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeHubMemOptimizeInput"></a>

```java
public java.lang.Object getEdgeHubMemOptimizeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `edgeLoggingOptionInput`<sup>Optional</sup> <a name="edgeLoggingOptionInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeLoggingOptionInput"></a>

```java
public java.lang.Object getEdgeLoggingOptionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `inconsistentModuleSettingsInput`<sup>Optional</sup> <a name="inconsistentModuleSettingsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.inconsistentModuleSettingsInput"></a>

```java
public java.lang.Object getInconsistentModuleSettingsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `installAgentInput`<sup>Optional</sup> <a name="installAgentInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.installAgentInput"></a>

```java
public java.lang.Object getInstallAgentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipFilterDenyAllInput`<sup>Optional</sup> <a name="ipFilterDenyAllInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterDenyAllInput"></a>

```java
public java.lang.Object getIpFilterDenyAllInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipFilterPermissiveRuleInput`<sup>Optional</sup> <a name="ipFilterPermissiveRuleInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterPermissiveRuleInput"></a>

```java
public java.lang.Object getIpFilterPermissiveRuleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `openPortsInput`<sup>Optional</sup> <a name="openPortsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.openPortsInput"></a>

```java
public java.lang.Object getOpenPortsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `permissiveFirewallPolicyInput`<sup>Optional</sup> <a name="permissiveFirewallPolicyInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveFirewallPolicyInput"></a>

```java
public java.lang.Object getPermissiveFirewallPolicyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `permissiveInputFirewallRulesInput`<sup>Optional</sup> <a name="permissiveInputFirewallRulesInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveInputFirewallRulesInput"></a>

```java
public java.lang.Object getPermissiveInputFirewallRulesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `permissiveOutputFirewallRulesInput`<sup>Optional</sup> <a name="permissiveOutputFirewallRulesInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveOutputFirewallRulesInput"></a>

```java
public java.lang.Object getPermissiveOutputFirewallRulesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `privilegedDockerOptionsInput`<sup>Optional</sup> <a name="privilegedDockerOptionsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.privilegedDockerOptionsInput"></a>

```java
public java.lang.Object getPrivilegedDockerOptionsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sharedCredentialsInput`<sup>Optional</sup> <a name="sharedCredentialsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.sharedCredentialsInput"></a>

```java
public java.lang.Object getSharedCredentialsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vulnerableTlsCipherSuiteInput`<sup>Optional</sup> <a name="vulnerableTlsCipherSuiteInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.vulnerableTlsCipherSuiteInput"></a>

```java
public java.lang.Object getVulnerableTlsCipherSuiteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `acrAuthentication`<sup>Required</sup> <a name="acrAuthentication" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.acrAuthentication"></a>

```java
public java.lang.Object getAcrAuthentication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `agentSendUnutilizedMsg`<sup>Required</sup> <a name="agentSendUnutilizedMsg" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.agentSendUnutilizedMsg"></a>

```java
public java.lang.Object getAgentSendUnutilizedMsg();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `baseline`<sup>Required</sup> <a name="baseline" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.baseline"></a>

```java
public java.lang.Object getBaseline();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `edgeHubMemOptimize`<sup>Required</sup> <a name="edgeHubMemOptimize" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeHubMemOptimize"></a>

```java
public java.lang.Object getEdgeHubMemOptimize();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `edgeLoggingOption`<sup>Required</sup> <a name="edgeLoggingOption" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeLoggingOption"></a>

```java
public java.lang.Object getEdgeLoggingOption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `inconsistentModuleSettings`<sup>Required</sup> <a name="inconsistentModuleSettings" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.inconsistentModuleSettings"></a>

```java
public java.lang.Object getInconsistentModuleSettings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `installAgent`<sup>Required</sup> <a name="installAgent" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.installAgent"></a>

```java
public java.lang.Object getInstallAgent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipFilterDenyAll`<sup>Required</sup> <a name="ipFilterDenyAll" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterDenyAll"></a>

```java
public java.lang.Object getIpFilterDenyAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipFilterPermissiveRule`<sup>Required</sup> <a name="ipFilterPermissiveRule" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterPermissiveRule"></a>

```java
public java.lang.Object getIpFilterPermissiveRule();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `openPorts`<sup>Required</sup> <a name="openPorts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.openPorts"></a>

```java
public java.lang.Object getOpenPorts();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `permissiveFirewallPolicy`<sup>Required</sup> <a name="permissiveFirewallPolicy" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveFirewallPolicy"></a>

```java
public java.lang.Object getPermissiveFirewallPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `permissiveInputFirewallRules`<sup>Required</sup> <a name="permissiveInputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveInputFirewallRules"></a>

```java
public java.lang.Object getPermissiveInputFirewallRules();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `permissiveOutputFirewallRules`<sup>Required</sup> <a name="permissiveOutputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveOutputFirewallRules"></a>

```java
public java.lang.Object getPermissiveOutputFirewallRules();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `privilegedDockerOptions`<sup>Required</sup> <a name="privilegedDockerOptions" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.privilegedDockerOptions"></a>

```java
public java.lang.Object getPrivilegedDockerOptions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sharedCredentials`<sup>Required</sup> <a name="sharedCredentials" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.sharedCredentials"></a>

```java
public java.lang.Object getSharedCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vulnerableTlsCipherSuite`<sup>Required</sup> <a name="vulnerableTlsCipherSuite" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.vulnerableTlsCipherSuite"></a>

```java
public java.lang.Object getVulnerableTlsCipherSuite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.internalValue"></a>

```java
public IotSecuritySolutionRecommendationsEnabled getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a>

---


### IotSecuritySolutionTimeoutsOutputReference <a name="IotSecuritySolutionTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_solution.IotSecuritySolutionTimeoutsOutputReference;

new IotSecuritySolutionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a>

---



