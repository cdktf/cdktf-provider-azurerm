# `azurerm_sentinel_alert_rule_ms_security_incident`

Refer to the Terraform Registory for docs: [`azurerm_sentinel_alert_rule_ms_security_incident`](https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident).

# `sentinelAlertRuleMsSecurityIncident` Submodule <a name="`sentinelAlertRuleMsSecurityIncident` Submodule" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelAlertRuleMsSecurityIncident <a name="SentinelAlertRuleMsSecurityIncident" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident azurerm_sentinel_alert_rule_ms_security_incident}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_ms_security_incident.SentinelAlertRuleMsSecurityIncident;

SentinelAlertRuleMsSecurityIncident.Builder.create(Construct scope, java.lang.String id)
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
    .logAnalyticsWorkspaceId(java.lang.String)
    .name(java.lang.String)
    .productFilter(java.lang.String)
    .severityFilter(java.util.List<java.lang.String>)
//  .alertRuleTemplateGuid(java.lang.String)
//  .description(java.lang.String)
//  .displayNameExcludeFilter(java.util.List<java.lang.String>)
//  .displayNameFilter(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .timeouts(SentinelAlertRuleMsSecurityIncidentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#display_name SentinelAlertRuleMsSecurityIncident#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#log_analytics_workspace_id SentinelAlertRuleMsSecurityIncident#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#name SentinelAlertRuleMsSecurityIncident#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.productFilter">productFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#product_filter SentinelAlertRuleMsSecurityIncident#product_filter}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.severityFilter">severityFilter</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#severity_filter SentinelAlertRuleMsSecurityIncident#severity_filter}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.alertRuleTemplateGuid">alertRuleTemplateGuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#alert_rule_template_guid SentinelAlertRuleMsSecurityIncident#alert_rule_template_guid}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#description SentinelAlertRuleMsSecurityIncident#description}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.displayNameExcludeFilter">displayNameExcludeFilter</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#display_name_exclude_filter SentinelAlertRuleMsSecurityIncident#display_name_exclude_filter}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.displayNameFilter">displayNameFilter</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#display_name_filter SentinelAlertRuleMsSecurityIncident#display_name_filter}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#enabled SentinelAlertRuleMsSecurityIncident#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#id SentinelAlertRuleMsSecurityIncident#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts">SentinelAlertRuleMsSecurityIncidentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#display_name SentinelAlertRuleMsSecurityIncident#display_name}.

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#log_analytics_workspace_id SentinelAlertRuleMsSecurityIncident#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#name SentinelAlertRuleMsSecurityIncident#name}.

---

##### `productFilter`<sup>Required</sup> <a name="productFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.productFilter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#product_filter SentinelAlertRuleMsSecurityIncident#product_filter}.

---

##### `severityFilter`<sup>Required</sup> <a name="severityFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.severityFilter"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#severity_filter SentinelAlertRuleMsSecurityIncident#severity_filter}.

---

##### `alertRuleTemplateGuid`<sup>Optional</sup> <a name="alertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.alertRuleTemplateGuid"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#alert_rule_template_guid SentinelAlertRuleMsSecurityIncident#alert_rule_template_guid}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#description SentinelAlertRuleMsSecurityIncident#description}.

---

##### `displayNameExcludeFilter`<sup>Optional</sup> <a name="displayNameExcludeFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.displayNameExcludeFilter"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#display_name_exclude_filter SentinelAlertRuleMsSecurityIncident#display_name_exclude_filter}.

---

##### `displayNameFilter`<sup>Optional</sup> <a name="displayNameFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.displayNameFilter"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#display_name_filter SentinelAlertRuleMsSecurityIncident#display_name_filter}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#enabled SentinelAlertRuleMsSecurityIncident#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#id SentinelAlertRuleMsSecurityIncident#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts">SentinelAlertRuleMsSecurityIncidentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#timeouts SentinelAlertRuleMsSecurityIncident#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetAlertRuleTemplateGuid">resetAlertRuleTemplateGuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetDisplayNameExcludeFilter">resetDisplayNameExcludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetDisplayNameFilter">resetDisplayNameFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.putTimeouts"></a>

```java
public void putTimeouts(SentinelAlertRuleMsSecurityIncidentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts">SentinelAlertRuleMsSecurityIncidentTimeouts</a>

---

##### `resetAlertRuleTemplateGuid` <a name="resetAlertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetAlertRuleTemplateGuid"></a>

```java
public void resetAlertRuleTemplateGuid()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayNameExcludeFilter` <a name="resetDisplayNameExcludeFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetDisplayNameExcludeFilter"></a>

```java
public void resetDisplayNameExcludeFilter()
```

##### `resetDisplayNameFilter` <a name="resetDisplayNameFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetDisplayNameFilter"></a>

```java
public void resetDisplayNameFilter()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_ms_security_incident.SentinelAlertRuleMsSecurityIncident;

SentinelAlertRuleMsSecurityIncident.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_ms_security_incident.SentinelAlertRuleMsSecurityIncident;

SentinelAlertRuleMsSecurityIncident.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_ms_security_incident.SentinelAlertRuleMsSecurityIncident;

SentinelAlertRuleMsSecurityIncident.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference">SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.alertRuleTemplateGuidInput">alertRuleTemplateGuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayNameExcludeFilterInput">displayNameExcludeFilterInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayNameFilterInput">displayNameFilterInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.productFilterInput">productFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.severityFilterInput">severityFilterInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts">SentinelAlertRuleMsSecurityIncidentTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.alertRuleTemplateGuid">alertRuleTemplateGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayNameExcludeFilter">displayNameExcludeFilter</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayNameFilter">displayNameFilter</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.productFilter">productFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.severityFilter">severityFilter</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.timeouts"></a>

```java
public SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference">SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference</a>

---

##### `alertRuleTemplateGuidInput`<sup>Optional</sup> <a name="alertRuleTemplateGuidInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.alertRuleTemplateGuidInput"></a>

```java
public java.lang.String getAlertRuleTemplateGuidInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameExcludeFilterInput`<sup>Optional</sup> <a name="displayNameExcludeFilterInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayNameExcludeFilterInput"></a>

```java
public java.util.List<java.lang.String> getDisplayNameExcludeFilterInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameFilterInput`<sup>Optional</sup> <a name="displayNameFilterInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayNameFilterInput"></a>

```java
public java.util.List<java.lang.String> getDisplayNameFilterInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.logAnalyticsWorkspaceIdInput"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `productFilterInput`<sup>Optional</sup> <a name="productFilterInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.productFilterInput"></a>

```java
public java.lang.String getProductFilterInput();
```

- *Type:* java.lang.String

---

##### `severityFilterInput`<sup>Optional</sup> <a name="severityFilterInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.severityFilterInput"></a>

```java
public java.util.List<java.lang.String> getSeverityFilterInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts">SentinelAlertRuleMsSecurityIncidentTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `alertRuleTemplateGuid`<sup>Required</sup> <a name="alertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.alertRuleTemplateGuid"></a>

```java
public java.lang.String getAlertRuleTemplateGuid();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `displayNameExcludeFilter`<sup>Required</sup> <a name="displayNameExcludeFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayNameExcludeFilter"></a>

```java
public java.util.List<java.lang.String> getDisplayNameExcludeFilter();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameFilter`<sup>Required</sup> <a name="displayNameFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayNameFilter"></a>

```java
public java.util.List<java.lang.String> getDisplayNameFilter();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `productFilter`<sup>Required</sup> <a name="productFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.productFilter"></a>

```java
public java.lang.String getProductFilter();
```

- *Type:* java.lang.String

---

##### `severityFilter`<sup>Required</sup> <a name="severityFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.severityFilter"></a>

```java
public java.util.List<java.lang.String> getSeverityFilter();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelAlertRuleMsSecurityIncidentConfig <a name="SentinelAlertRuleMsSecurityIncidentConfig" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_ms_security_incident.SentinelAlertRuleMsSecurityIncidentConfig;

SentinelAlertRuleMsSecurityIncidentConfig.builder()
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
    .logAnalyticsWorkspaceId(java.lang.String)
    .name(java.lang.String)
    .productFilter(java.lang.String)
    .severityFilter(java.util.List<java.lang.String>)
//  .alertRuleTemplateGuid(java.lang.String)
//  .description(java.lang.String)
//  .displayNameExcludeFilter(java.util.List<java.lang.String>)
//  .displayNameFilter(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .timeouts(SentinelAlertRuleMsSecurityIncidentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#display_name SentinelAlertRuleMsSecurityIncident#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#log_analytics_workspace_id SentinelAlertRuleMsSecurityIncident#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#name SentinelAlertRuleMsSecurityIncident#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.productFilter">productFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#product_filter SentinelAlertRuleMsSecurityIncident#product_filter}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.severityFilter">severityFilter</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#severity_filter SentinelAlertRuleMsSecurityIncident#severity_filter}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.alertRuleTemplateGuid">alertRuleTemplateGuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#alert_rule_template_guid SentinelAlertRuleMsSecurityIncident#alert_rule_template_guid}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#description SentinelAlertRuleMsSecurityIncident#description}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.displayNameExcludeFilter">displayNameExcludeFilter</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#display_name_exclude_filter SentinelAlertRuleMsSecurityIncident#display_name_exclude_filter}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.displayNameFilter">displayNameFilter</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#display_name_filter SentinelAlertRuleMsSecurityIncident#display_name_filter}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#enabled SentinelAlertRuleMsSecurityIncident#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#id SentinelAlertRuleMsSecurityIncident#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts">SentinelAlertRuleMsSecurityIncidentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#display_name SentinelAlertRuleMsSecurityIncident#display_name}.

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#log_analytics_workspace_id SentinelAlertRuleMsSecurityIncident#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#name SentinelAlertRuleMsSecurityIncident#name}.

---

##### `productFilter`<sup>Required</sup> <a name="productFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.productFilter"></a>

```java
public java.lang.String getProductFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#product_filter SentinelAlertRuleMsSecurityIncident#product_filter}.

---

##### `severityFilter`<sup>Required</sup> <a name="severityFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.severityFilter"></a>

```java
public java.util.List<java.lang.String> getSeverityFilter();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#severity_filter SentinelAlertRuleMsSecurityIncident#severity_filter}.

---

##### `alertRuleTemplateGuid`<sup>Optional</sup> <a name="alertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.alertRuleTemplateGuid"></a>

```java
public java.lang.String getAlertRuleTemplateGuid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#alert_rule_template_guid SentinelAlertRuleMsSecurityIncident#alert_rule_template_guid}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#description SentinelAlertRuleMsSecurityIncident#description}.

---

##### `displayNameExcludeFilter`<sup>Optional</sup> <a name="displayNameExcludeFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.displayNameExcludeFilter"></a>

```java
public java.util.List<java.lang.String> getDisplayNameExcludeFilter();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#display_name_exclude_filter SentinelAlertRuleMsSecurityIncident#display_name_exclude_filter}.

---

##### `displayNameFilter`<sup>Optional</sup> <a name="displayNameFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.displayNameFilter"></a>

```java
public java.util.List<java.lang.String> getDisplayNameFilter();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#display_name_filter SentinelAlertRuleMsSecurityIncident#display_name_filter}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#enabled SentinelAlertRuleMsSecurityIncident#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#id SentinelAlertRuleMsSecurityIncident#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.timeouts"></a>

```java
public SentinelAlertRuleMsSecurityIncidentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts">SentinelAlertRuleMsSecurityIncidentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#timeouts SentinelAlertRuleMsSecurityIncident#timeouts}

---

### SentinelAlertRuleMsSecurityIncidentTimeouts <a name="SentinelAlertRuleMsSecurityIncidentTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_ms_security_incident.SentinelAlertRuleMsSecurityIncidentTimeouts;

SentinelAlertRuleMsSecurityIncidentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#create SentinelAlertRuleMsSecurityIncident#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#delete SentinelAlertRuleMsSecurityIncident#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#read SentinelAlertRuleMsSecurityIncident#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#update SentinelAlertRuleMsSecurityIncident#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#create SentinelAlertRuleMsSecurityIncident#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#delete SentinelAlertRuleMsSecurityIncident#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#read SentinelAlertRuleMsSecurityIncident#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/sentinel_alert_rule_ms_security_incident#update SentinelAlertRuleMsSecurityIncident#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference <a name="SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_ms_security_incident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference;

new SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts">SentinelAlertRuleMsSecurityIncidentTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts">SentinelAlertRuleMsSecurityIncidentTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



