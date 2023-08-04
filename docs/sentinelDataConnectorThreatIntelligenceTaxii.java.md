# `azurerm_sentinel_data_connector_threat_intelligence_taxii`

Refer to the Terraform Registory for docs: [`azurerm_sentinel_data_connector_threat_intelligence_taxii`](https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii).

# `sentinelDataConnectorThreatIntelligenceTaxii` Submodule <a name="`sentinelDataConnectorThreatIntelligenceTaxii` Submodule" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorThreatIntelligenceTaxii <a name="SentinelDataConnectorThreatIntelligenceTaxii" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii azurerm_sentinel_data_connector_threat_intelligence_taxii}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_data_connector_threat_intelligence_taxii.SentinelDataConnectorThreatIntelligenceTaxii;

SentinelDataConnectorThreatIntelligenceTaxii.Builder.create(Construct scope, java.lang.String id)
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
    .apiRootUrl(java.lang.String)
    .collectionId(java.lang.String)
    .displayName(java.lang.String)
    .logAnalyticsWorkspaceId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .lookbackDate(java.lang.String)
//  .password(java.lang.String)
//  .pollingFrequency(java.lang.String)
//  .tenantId(java.lang.String)
//  .timeouts(SentinelDataConnectorThreatIntelligenceTaxiiTimeouts)
//  .userName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.apiRootUrl">apiRootUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#api_root_url SentinelDataConnectorThreatIntelligenceTaxii#api_root_url}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.collectionId">collectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#collection_id SentinelDataConnectorThreatIntelligenceTaxii#collection_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#display_name SentinelDataConnectorThreatIntelligenceTaxii#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#log_analytics_workspace_id SentinelDataConnectorThreatIntelligenceTaxii#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#name SentinelDataConnectorThreatIntelligenceTaxii#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#id SentinelDataConnectorThreatIntelligenceTaxii#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.lookbackDate">lookbackDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#lookback_date SentinelDataConnectorThreatIntelligenceTaxii#lookback_date}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#password SentinelDataConnectorThreatIntelligenceTaxii#password}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.pollingFrequency">pollingFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#polling_frequency SentinelDataConnectorThreatIntelligenceTaxii#polling_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#tenant_id SentinelDataConnectorThreatIntelligenceTaxii#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts">SentinelDataConnectorThreatIntelligenceTaxiiTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#user_name SentinelDataConnectorThreatIntelligenceTaxii#user_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiRootUrl`<sup>Required</sup> <a name="apiRootUrl" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.apiRootUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#api_root_url SentinelDataConnectorThreatIntelligenceTaxii#api_root_url}.

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.collectionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#collection_id SentinelDataConnectorThreatIntelligenceTaxii#collection_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#display_name SentinelDataConnectorThreatIntelligenceTaxii#display_name}.

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#log_analytics_workspace_id SentinelDataConnectorThreatIntelligenceTaxii#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#name SentinelDataConnectorThreatIntelligenceTaxii#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#id SentinelDataConnectorThreatIntelligenceTaxii#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lookbackDate`<sup>Optional</sup> <a name="lookbackDate" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.lookbackDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#lookback_date SentinelDataConnectorThreatIntelligenceTaxii#lookback_date}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#password SentinelDataConnectorThreatIntelligenceTaxii#password}.

---

##### `pollingFrequency`<sup>Optional</sup> <a name="pollingFrequency" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.pollingFrequency"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#polling_frequency SentinelDataConnectorThreatIntelligenceTaxii#polling_frequency}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#tenant_id SentinelDataConnectorThreatIntelligenceTaxii#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts">SentinelDataConnectorThreatIntelligenceTaxiiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#timeouts SentinelDataConnectorThreatIntelligenceTaxii#timeouts}

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.userName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#user_name SentinelDataConnectorThreatIntelligenceTaxii#user_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetLookbackDate">resetLookbackDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetPollingFrequency">resetPollingFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.putTimeouts"></a>

```java
public void putTimeouts(SentinelDataConnectorThreatIntelligenceTaxiiTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts">SentinelDataConnectorThreatIntelligenceTaxiiTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetId"></a>

```java
public void resetId()
```

##### `resetLookbackDate` <a name="resetLookbackDate" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetLookbackDate"></a>

```java
public void resetLookbackDate()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPollingFrequency` <a name="resetPollingFrequency" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetPollingFrequency"></a>

```java
public void resetPollingFrequency()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetTenantId"></a>

```java
public void resetTenantId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetUserName"></a>

```java
public void resetUserName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_data_connector_threat_intelligence_taxii.SentinelDataConnectorThreatIntelligenceTaxii;

SentinelDataConnectorThreatIntelligenceTaxii.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_data_connector_threat_intelligence_taxii.SentinelDataConnectorThreatIntelligenceTaxii;

SentinelDataConnectorThreatIntelligenceTaxii.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_data_connector_threat_intelligence_taxii.SentinelDataConnectorThreatIntelligenceTaxii;

SentinelDataConnectorThreatIntelligenceTaxii.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference">SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.apiRootUrlInput">apiRootUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.collectionIdInput">collectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.lookbackDateInput">lookbackDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.pollingFrequencyInput">pollingFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts">SentinelDataConnectorThreatIntelligenceTaxiiTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.apiRootUrl">apiRootUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.lookbackDate">lookbackDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.pollingFrequency">pollingFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.timeouts"></a>

```java
public SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference">SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference</a>

---

##### `apiRootUrlInput`<sup>Optional</sup> <a name="apiRootUrlInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.apiRootUrlInput"></a>

```java
public java.lang.String getApiRootUrlInput();
```

- *Type:* java.lang.String

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.collectionIdInput"></a>

```java
public java.lang.String getCollectionIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.logAnalyticsWorkspaceIdInput"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `lookbackDateInput`<sup>Optional</sup> <a name="lookbackDateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.lookbackDateInput"></a>

```java
public java.lang.String getLookbackDateInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `pollingFrequencyInput`<sup>Optional</sup> <a name="pollingFrequencyInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.pollingFrequencyInput"></a>

```java
public java.lang.String getPollingFrequencyInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts">SentinelDataConnectorThreatIntelligenceTaxiiTimeouts</a>

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `apiRootUrl`<sup>Required</sup> <a name="apiRootUrl" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.apiRootUrl"></a>

```java
public java.lang.String getApiRootUrl();
```

- *Type:* java.lang.String

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

---

##### `lookbackDate`<sup>Required</sup> <a name="lookbackDate" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.lookbackDate"></a>

```java
public java.lang.String getLookbackDate();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `pollingFrequency`<sup>Required</sup> <a name="pollingFrequency" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.pollingFrequency"></a>

```java
public java.lang.String getPollingFrequency();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorThreatIntelligenceTaxiiConfig <a name="SentinelDataConnectorThreatIntelligenceTaxiiConfig" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_data_connector_threat_intelligence_taxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig;

SentinelDataConnectorThreatIntelligenceTaxiiConfig.builder()
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
    .apiRootUrl(java.lang.String)
    .collectionId(java.lang.String)
    .displayName(java.lang.String)
    .logAnalyticsWorkspaceId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .lookbackDate(java.lang.String)
//  .password(java.lang.String)
//  .pollingFrequency(java.lang.String)
//  .tenantId(java.lang.String)
//  .timeouts(SentinelDataConnectorThreatIntelligenceTaxiiTimeouts)
//  .userName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.apiRootUrl">apiRootUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#api_root_url SentinelDataConnectorThreatIntelligenceTaxii#api_root_url}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#collection_id SentinelDataConnectorThreatIntelligenceTaxii#collection_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#display_name SentinelDataConnectorThreatIntelligenceTaxii#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#log_analytics_workspace_id SentinelDataConnectorThreatIntelligenceTaxii#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#name SentinelDataConnectorThreatIntelligenceTaxii#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#id SentinelDataConnectorThreatIntelligenceTaxii#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.lookbackDate">lookbackDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#lookback_date SentinelDataConnectorThreatIntelligenceTaxii#lookback_date}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#password SentinelDataConnectorThreatIntelligenceTaxii#password}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.pollingFrequency">pollingFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#polling_frequency SentinelDataConnectorThreatIntelligenceTaxii#polling_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#tenant_id SentinelDataConnectorThreatIntelligenceTaxii#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts">SentinelDataConnectorThreatIntelligenceTaxiiTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#user_name SentinelDataConnectorThreatIntelligenceTaxii#user_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiRootUrl`<sup>Required</sup> <a name="apiRootUrl" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.apiRootUrl"></a>

```java
public java.lang.String getApiRootUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#api_root_url SentinelDataConnectorThreatIntelligenceTaxii#api_root_url}.

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#collection_id SentinelDataConnectorThreatIntelligenceTaxii#collection_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#display_name SentinelDataConnectorThreatIntelligenceTaxii#display_name}.

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#log_analytics_workspace_id SentinelDataConnectorThreatIntelligenceTaxii#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#name SentinelDataConnectorThreatIntelligenceTaxii#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#id SentinelDataConnectorThreatIntelligenceTaxii#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lookbackDate`<sup>Optional</sup> <a name="lookbackDate" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.lookbackDate"></a>

```java
public java.lang.String getLookbackDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#lookback_date SentinelDataConnectorThreatIntelligenceTaxii#lookback_date}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#password SentinelDataConnectorThreatIntelligenceTaxii#password}.

---

##### `pollingFrequency`<sup>Optional</sup> <a name="pollingFrequency" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.pollingFrequency"></a>

```java
public java.lang.String getPollingFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#polling_frequency SentinelDataConnectorThreatIntelligenceTaxii#polling_frequency}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#tenant_id SentinelDataConnectorThreatIntelligenceTaxii#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.timeouts"></a>

```java
public SentinelDataConnectorThreatIntelligenceTaxiiTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts">SentinelDataConnectorThreatIntelligenceTaxiiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#timeouts SentinelDataConnectorThreatIntelligenceTaxii#timeouts}

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#user_name SentinelDataConnectorThreatIntelligenceTaxii#user_name}.

---

### SentinelDataConnectorThreatIntelligenceTaxiiTimeouts <a name="SentinelDataConnectorThreatIntelligenceTaxiiTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_data_connector_threat_intelligence_taxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts;

SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#create SentinelDataConnectorThreatIntelligenceTaxii#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#delete SentinelDataConnectorThreatIntelligenceTaxii#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#read SentinelDataConnectorThreatIntelligenceTaxii#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#update SentinelDataConnectorThreatIntelligenceTaxii#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#create SentinelDataConnectorThreatIntelligenceTaxii#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#delete SentinelDataConnectorThreatIntelligenceTaxii#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#read SentinelDataConnectorThreatIntelligenceTaxii#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#update SentinelDataConnectorThreatIntelligenceTaxii#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference <a name="SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_data_connector_threat_intelligence_taxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference;

new SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts">SentinelDataConnectorThreatIntelligenceTaxiiTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts">SentinelDataConnectorThreatIntelligenceTaxiiTimeouts</a>

---



