# `azurerm_analysis_services_server`

Refer to the Terraform Registory for docs: [`azurerm_analysis_services_server`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server).

# `analysisServicesServer` Submodule <a name="`analysisServicesServer` Submodule" id="@cdktf/provider-azurerm.analysisServicesServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AnalysisServicesServer <a name="AnalysisServicesServer" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server azurerm_analysis_services_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.analysis_services_server.AnalysisServicesServer;

AnalysisServicesServer.Builder.create(Construct scope, java.lang.String id)
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
    .sku(java.lang.String)
//  .adminUsers(java.util.List<java.lang.String>)
//  .backupBlobContainerUri(java.lang.String)
//  .enablePowerBiService(java.lang.Boolean)
//  .enablePowerBiService(IResolvable)
//  .id(java.lang.String)
//  .ipv4FirewallRule(IResolvable)
//  .ipv4FirewallRule(java.util.List<AnalysisServicesServerIpv4FirewallRule>)
//  .querypoolConnectionMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AnalysisServicesServerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#location AnalysisServicesServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#name AnalysisServicesServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#resource_group_name AnalysisServicesServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#sku AnalysisServicesServer#sku}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.adminUsers">adminUsers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#admin_users AnalysisServicesServer#admin_users}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.backupBlobContainerUri">backupBlobContainerUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#backup_blob_container_uri AnalysisServicesServer#backup_blob_container_uri}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.enablePowerBiService">enablePowerBiService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#enable_power_bi_service AnalysisServicesServer#enable_power_bi_service}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#id AnalysisServicesServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.ipv4FirewallRule">ipv4FirewallRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule">AnalysisServicesServerIpv4FirewallRule</a>></code> | ipv4_firewall_rule block. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.querypoolConnectionMode">querypoolConnectionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#querypool_connection_mode AnalysisServicesServer#querypool_connection_mode}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#tags AnalysisServicesServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts">AnalysisServicesServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#location AnalysisServicesServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#name AnalysisServicesServer#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#resource_group_name AnalysisServicesServer#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.sku"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#sku AnalysisServicesServer#sku}.

---

##### `adminUsers`<sup>Optional</sup> <a name="adminUsers" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.adminUsers"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#admin_users AnalysisServicesServer#admin_users}.

---

##### `backupBlobContainerUri`<sup>Optional</sup> <a name="backupBlobContainerUri" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.backupBlobContainerUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#backup_blob_container_uri AnalysisServicesServer#backup_blob_container_uri}.

---

##### `enablePowerBiService`<sup>Optional</sup> <a name="enablePowerBiService" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.enablePowerBiService"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#enable_power_bi_service AnalysisServicesServer#enable_power_bi_service}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#id AnalysisServicesServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv4FirewallRule`<sup>Optional</sup> <a name="ipv4FirewallRule" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.ipv4FirewallRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule">AnalysisServicesServerIpv4FirewallRule</a>>

ipv4_firewall_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#ipv4_firewall_rule AnalysisServicesServer#ipv4_firewall_rule}

---

##### `querypoolConnectionMode`<sup>Optional</sup> <a name="querypoolConnectionMode" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.querypoolConnectionMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#querypool_connection_mode AnalysisServicesServer#querypool_connection_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#tags AnalysisServicesServer#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts">AnalysisServicesServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#timeouts AnalysisServicesServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.putIpv4FirewallRule">putIpv4FirewallRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetAdminUsers">resetAdminUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetBackupBlobContainerUri">resetBackupBlobContainerUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetEnablePowerBiService">resetEnablePowerBiService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetIpv4FirewallRule">resetIpv4FirewallRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetQuerypoolConnectionMode">resetQuerypoolConnectionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putIpv4FirewallRule` <a name="putIpv4FirewallRule" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.putIpv4FirewallRule"></a>

```java
public void putIpv4FirewallRule(IResolvable OR java.util.List<AnalysisServicesServerIpv4FirewallRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.putIpv4FirewallRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule">AnalysisServicesServerIpv4FirewallRule</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.putTimeouts"></a>

```java
public void putTimeouts(AnalysisServicesServerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts">AnalysisServicesServerTimeouts</a>

---

##### `resetAdminUsers` <a name="resetAdminUsers" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetAdminUsers"></a>

```java
public void resetAdminUsers()
```

##### `resetBackupBlobContainerUri` <a name="resetBackupBlobContainerUri" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetBackupBlobContainerUri"></a>

```java
public void resetBackupBlobContainerUri()
```

##### `resetEnablePowerBiService` <a name="resetEnablePowerBiService" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetEnablePowerBiService"></a>

```java
public void resetEnablePowerBiService()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetId"></a>

```java
public void resetId()
```

##### `resetIpv4FirewallRule` <a name="resetIpv4FirewallRule" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetIpv4FirewallRule"></a>

```java
public void resetIpv4FirewallRule()
```

##### `resetQuerypoolConnectionMode` <a name="resetQuerypoolConnectionMode" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetQuerypoolConnectionMode"></a>

```java
public void resetQuerypoolConnectionMode()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.analysis_services_server.AnalysisServicesServer;

AnalysisServicesServer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.analysis_services_server.AnalysisServicesServer;

AnalysisServicesServer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.analysis_services_server.AnalysisServicesServer;

AnalysisServicesServer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.ipv4FirewallRule">ipv4FirewallRule</a></code> | <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList">AnalysisServicesServerIpv4FirewallRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.serverFullName">serverFullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference">AnalysisServicesServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.adminUsersInput">adminUsersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.backupBlobContainerUriInput">backupBlobContainerUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.enablePowerBiServiceInput">enablePowerBiServiceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.ipv4FirewallRuleInput">ipv4FirewallRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule">AnalysisServicesServerIpv4FirewallRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.querypoolConnectionModeInput">querypoolConnectionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts">AnalysisServicesServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.adminUsers">adminUsers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.backupBlobContainerUri">backupBlobContainerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.enablePowerBiService">enablePowerBiService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.querypoolConnectionMode">querypoolConnectionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ipv4FirewallRule`<sup>Required</sup> <a name="ipv4FirewallRule" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.ipv4FirewallRule"></a>

```java
public AnalysisServicesServerIpv4FirewallRuleList getIpv4FirewallRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList">AnalysisServicesServerIpv4FirewallRuleList</a>

---

##### `serverFullName`<sup>Required</sup> <a name="serverFullName" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.serverFullName"></a>

```java
public java.lang.String getServerFullName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.timeouts"></a>

```java
public AnalysisServicesServerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference">AnalysisServicesServerTimeoutsOutputReference</a>

---

##### `adminUsersInput`<sup>Optional</sup> <a name="adminUsersInput" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.adminUsersInput"></a>

```java
public java.util.List<java.lang.String> getAdminUsersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backupBlobContainerUriInput`<sup>Optional</sup> <a name="backupBlobContainerUriInput" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.backupBlobContainerUriInput"></a>

```java
public java.lang.String getBackupBlobContainerUriInput();
```

- *Type:* java.lang.String

---

##### `enablePowerBiServiceInput`<sup>Optional</sup> <a name="enablePowerBiServiceInput" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.enablePowerBiServiceInput"></a>

```java
public java.lang.Object getEnablePowerBiServiceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipv4FirewallRuleInput`<sup>Optional</sup> <a name="ipv4FirewallRuleInput" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.ipv4FirewallRuleInput"></a>

```java
public java.lang.Object getIpv4FirewallRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule">AnalysisServicesServerIpv4FirewallRule</a>>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `querypoolConnectionModeInput`<sup>Optional</sup> <a name="querypoolConnectionModeInput" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.querypoolConnectionModeInput"></a>

```java
public java.lang.String getQuerypoolConnectionModeInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts">AnalysisServicesServerTimeouts</a>

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.adminUsers"></a>

```java
public java.util.List<java.lang.String> getAdminUsers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backupBlobContainerUri`<sup>Required</sup> <a name="backupBlobContainerUri" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.backupBlobContainerUri"></a>

```java
public java.lang.String getBackupBlobContainerUri();
```

- *Type:* java.lang.String

---

##### `enablePowerBiService`<sup>Required</sup> <a name="enablePowerBiService" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.enablePowerBiService"></a>

```java
public java.lang.Object getEnablePowerBiService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `querypoolConnectionMode`<sup>Required</sup> <a name="querypoolConnectionMode" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.querypoolConnectionMode"></a>

```java
public java.lang.String getQuerypoolConnectionMode();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AnalysisServicesServerConfig <a name="AnalysisServicesServerConfig" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.analysis_services_server.AnalysisServicesServerConfig;

AnalysisServicesServerConfig.builder()
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
    .sku(java.lang.String)
//  .adminUsers(java.util.List<java.lang.String>)
//  .backupBlobContainerUri(java.lang.String)
//  .enablePowerBiService(java.lang.Boolean)
//  .enablePowerBiService(IResolvable)
//  .id(java.lang.String)
//  .ipv4FirewallRule(IResolvable)
//  .ipv4FirewallRule(java.util.List<AnalysisServicesServerIpv4FirewallRule>)
//  .querypoolConnectionMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AnalysisServicesServerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#location AnalysisServicesServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#name AnalysisServicesServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#resource_group_name AnalysisServicesServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#sku AnalysisServicesServer#sku}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.adminUsers">adminUsers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#admin_users AnalysisServicesServer#admin_users}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.backupBlobContainerUri">backupBlobContainerUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#backup_blob_container_uri AnalysisServicesServer#backup_blob_container_uri}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.enablePowerBiService">enablePowerBiService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#enable_power_bi_service AnalysisServicesServer#enable_power_bi_service}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#id AnalysisServicesServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.ipv4FirewallRule">ipv4FirewallRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule">AnalysisServicesServerIpv4FirewallRule</a>></code> | ipv4_firewall_rule block. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.querypoolConnectionMode">querypoolConnectionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#querypool_connection_mode AnalysisServicesServer#querypool_connection_mode}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#tags AnalysisServicesServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts">AnalysisServicesServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#location AnalysisServicesServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#name AnalysisServicesServer#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#resource_group_name AnalysisServicesServer#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#sku AnalysisServicesServer#sku}.

---

##### `adminUsers`<sup>Optional</sup> <a name="adminUsers" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.adminUsers"></a>

```java
public java.util.List<java.lang.String> getAdminUsers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#admin_users AnalysisServicesServer#admin_users}.

---

##### `backupBlobContainerUri`<sup>Optional</sup> <a name="backupBlobContainerUri" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.backupBlobContainerUri"></a>

```java
public java.lang.String getBackupBlobContainerUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#backup_blob_container_uri AnalysisServicesServer#backup_blob_container_uri}.

---

##### `enablePowerBiService`<sup>Optional</sup> <a name="enablePowerBiService" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.enablePowerBiService"></a>

```java
public java.lang.Object getEnablePowerBiService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#enable_power_bi_service AnalysisServicesServer#enable_power_bi_service}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#id AnalysisServicesServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv4FirewallRule`<sup>Optional</sup> <a name="ipv4FirewallRule" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.ipv4FirewallRule"></a>

```java
public java.lang.Object getIpv4FirewallRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule">AnalysisServicesServerIpv4FirewallRule</a>>

ipv4_firewall_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#ipv4_firewall_rule AnalysisServicesServer#ipv4_firewall_rule}

---

##### `querypoolConnectionMode`<sup>Optional</sup> <a name="querypoolConnectionMode" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.querypoolConnectionMode"></a>

```java
public java.lang.String getQuerypoolConnectionMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#querypool_connection_mode AnalysisServicesServer#querypool_connection_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#tags AnalysisServicesServer#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.timeouts"></a>

```java
public AnalysisServicesServerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts">AnalysisServicesServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#timeouts AnalysisServicesServer#timeouts}

---

### AnalysisServicesServerIpv4FirewallRule <a name="AnalysisServicesServerIpv4FirewallRule" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.analysis_services_server.AnalysisServicesServerIpv4FirewallRule;

AnalysisServicesServerIpv4FirewallRule.builder()
    .name(java.lang.String)
    .rangeEnd(java.lang.String)
    .rangeStart(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#name AnalysisServicesServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule.property.rangeEnd">rangeEnd</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#range_end AnalysisServicesServer#range_end}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule.property.rangeStart">rangeStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#range_start AnalysisServicesServer#range_start}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#name AnalysisServicesServer#name}.

---

##### `rangeEnd`<sup>Required</sup> <a name="rangeEnd" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule.property.rangeEnd"></a>

```java
public java.lang.String getRangeEnd();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#range_end AnalysisServicesServer#range_end}.

---

##### `rangeStart`<sup>Required</sup> <a name="rangeStart" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule.property.rangeStart"></a>

```java
public java.lang.String getRangeStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#range_start AnalysisServicesServer#range_start}.

---

### AnalysisServicesServerTimeouts <a name="AnalysisServicesServerTimeouts" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.analysis_services_server.AnalysisServicesServerTimeouts;

AnalysisServicesServerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#create AnalysisServicesServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#delete AnalysisServicesServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#read AnalysisServicesServer#read}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#update AnalysisServicesServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#create AnalysisServicesServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#delete AnalysisServicesServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#read AnalysisServicesServer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/analysis_services_server#update AnalysisServicesServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AnalysisServicesServerIpv4FirewallRuleList <a name="AnalysisServicesServerIpv4FirewallRuleList" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.analysis_services_server.AnalysisServicesServerIpv4FirewallRuleList;

new AnalysisServicesServerIpv4FirewallRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.get"></a>

```java
public AnalysisServicesServerIpv4FirewallRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule">AnalysisServicesServerIpv4FirewallRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule">AnalysisServicesServerIpv4FirewallRule</a>>

---


### AnalysisServicesServerIpv4FirewallRuleOutputReference <a name="AnalysisServicesServerIpv4FirewallRuleOutputReference" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.analysis_services_server.AnalysisServicesServerIpv4FirewallRuleOutputReference;

new AnalysisServicesServerIpv4FirewallRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeEndInput">rangeEndInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeStartInput">rangeStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeEnd">rangeEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeStart">rangeStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule">AnalysisServicesServerIpv4FirewallRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rangeEndInput`<sup>Optional</sup> <a name="rangeEndInput" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeEndInput"></a>

```java
public java.lang.String getRangeEndInput();
```

- *Type:* java.lang.String

---

##### `rangeStartInput`<sup>Optional</sup> <a name="rangeStartInput" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeStartInput"></a>

```java
public java.lang.String getRangeStartInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rangeEnd`<sup>Required</sup> <a name="rangeEnd" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeEnd"></a>

```java
public java.lang.String getRangeEnd();
```

- *Type:* java.lang.String

---

##### `rangeStart`<sup>Required</sup> <a name="rangeStart" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeStart"></a>

```java
public java.lang.String getRangeStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule">AnalysisServicesServerIpv4FirewallRule</a>

---


### AnalysisServicesServerTimeoutsOutputReference <a name="AnalysisServicesServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.analysis_services_server.AnalysisServicesServerTimeoutsOutputReference;

new AnalysisServicesServerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts">AnalysisServicesServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts">AnalysisServicesServerTimeouts</a>

---



