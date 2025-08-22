# `elasticCloudElasticsearch` Submodule <a name="`elasticCloudElasticsearch` Submodule" id="@cdktf/provider-azurerm.elasticCloudElasticsearch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticCloudElasticsearch <a name="ElasticCloudElasticsearch" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch azurerm_elastic_cloud_elasticsearch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.elastic_cloud_elasticsearch.ElasticCloudElasticsearch;

ElasticCloudElasticsearch.Builder.create(Construct scope, java.lang.String id)
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
    .elasticCloudEmailAddress(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
//  .id(java.lang.String)
//  .logs(ElasticCloudElasticsearchLogs)
//  .monitoringEnabled(java.lang.Boolean)
//  .monitoringEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ElasticCloudElasticsearchTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.elasticCloudEmailAddress">elasticCloudEmailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#elastic_cloud_email_address ElasticCloudElasticsearch#elastic_cloud_email_address}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#location ElasticCloudElasticsearch#location}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#name ElasticCloudElasticsearch#name}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#resource_group_name ElasticCloudElasticsearch#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#sku_name ElasticCloudElasticsearch#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#id ElasticCloudElasticsearch#id}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.logs">logs</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs">ElasticCloudElasticsearchLogs</a></code> | logs block. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.monitoringEnabled">monitoringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#monitoring_enabled ElasticCloudElasticsearch#monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#tags ElasticCloudElasticsearch#tags}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts">ElasticCloudElasticsearchTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `elasticCloudEmailAddress`<sup>Required</sup> <a name="elasticCloudEmailAddress" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.elasticCloudEmailAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#elastic_cloud_email_address ElasticCloudElasticsearch#elastic_cloud_email_address}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#location ElasticCloudElasticsearch#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#name ElasticCloudElasticsearch#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#resource_group_name ElasticCloudElasticsearch#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.skuName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#sku_name ElasticCloudElasticsearch#sku_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#id ElasticCloudElasticsearch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.logs"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs">ElasticCloudElasticsearchLogs</a>

logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#logs ElasticCloudElasticsearch#logs}

---

##### `monitoringEnabled`<sup>Optional</sup> <a name="monitoringEnabled" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.monitoringEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#monitoring_enabled ElasticCloudElasticsearch#monitoring_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#tags ElasticCloudElasticsearch#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts">ElasticCloudElasticsearchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#timeouts ElasticCloudElasticsearch#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.putLogs">putLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetLogs">resetLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetMonitoringEnabled">resetMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogs` <a name="putLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.putLogs"></a>

```java
public void putLogs(ElasticCloudElasticsearchLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.putLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs">ElasticCloudElasticsearchLogs</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.putTimeouts"></a>

```java
public void putTimeouts(ElasticCloudElasticsearchTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts">ElasticCloudElasticsearchTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetId"></a>

```java
public void resetId()
```

##### `resetLogs` <a name="resetLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetLogs"></a>

```java
public void resetLogs()
```

##### `resetMonitoringEnabled` <a name="resetMonitoringEnabled" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetMonitoringEnabled"></a>

```java
public void resetMonitoringEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ElasticCloudElasticsearch resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.elastic_cloud_elasticsearch.ElasticCloudElasticsearch;

ElasticCloudElasticsearch.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.elastic_cloud_elasticsearch.ElasticCloudElasticsearch;

ElasticCloudElasticsearch.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.elastic_cloud_elasticsearch.ElasticCloudElasticsearch;

ElasticCloudElasticsearch.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.elastic_cloud_elasticsearch.ElasticCloudElasticsearch;

ElasticCloudElasticsearch.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ElasticCloudElasticsearch.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ElasticCloudElasticsearch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ElasticCloudElasticsearch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ElasticCloudElasticsearch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ElasticCloudElasticsearch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudDeploymentId">elasticCloudDeploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudSsoDefaultUrl">elasticCloudSsoDefaultUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudUserId">elasticCloudUserId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticsearchServiceUrl">elasticsearchServiceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.kibanaServiceUrl">kibanaServiceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.kibanaSsoUri">kibanaSsoUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference">ElasticCloudElasticsearchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference">ElasticCloudElasticsearchTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudEmailAddressInput">elasticCloudEmailAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.logsInput">logsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs">ElasticCloudElasticsearchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.monitoringEnabledInput">monitoringEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.skuNameInput">skuNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts">ElasticCloudElasticsearchTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudEmailAddress">elasticCloudEmailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.monitoringEnabled">monitoringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.skuName">skuName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `elasticCloudDeploymentId`<sup>Required</sup> <a name="elasticCloudDeploymentId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudDeploymentId"></a>

```java
public java.lang.String getElasticCloudDeploymentId();
```

- *Type:* java.lang.String

---

##### `elasticCloudSsoDefaultUrl`<sup>Required</sup> <a name="elasticCloudSsoDefaultUrl" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudSsoDefaultUrl"></a>

```java
public java.lang.String getElasticCloudSsoDefaultUrl();
```

- *Type:* java.lang.String

---

##### `elasticCloudUserId`<sup>Required</sup> <a name="elasticCloudUserId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudUserId"></a>

```java
public java.lang.String getElasticCloudUserId();
```

- *Type:* java.lang.String

---

##### `elasticsearchServiceUrl`<sup>Required</sup> <a name="elasticsearchServiceUrl" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticsearchServiceUrl"></a>

```java
public java.lang.String getElasticsearchServiceUrl();
```

- *Type:* java.lang.String

---

##### `kibanaServiceUrl`<sup>Required</sup> <a name="kibanaServiceUrl" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.kibanaServiceUrl"></a>

```java
public java.lang.String getKibanaServiceUrl();
```

- *Type:* java.lang.String

---

##### `kibanaSsoUri`<sup>Required</sup> <a name="kibanaSsoUri" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.kibanaSsoUri"></a>

```java
public java.lang.String getKibanaSsoUri();
```

- *Type:* java.lang.String

---

##### `logs`<sup>Required</sup> <a name="logs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.logs"></a>

```java
public ElasticCloudElasticsearchLogsOutputReference getLogs();
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference">ElasticCloudElasticsearchLogsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.timeouts"></a>

```java
public ElasticCloudElasticsearchTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference">ElasticCloudElasticsearchTimeoutsOutputReference</a>

---

##### `elasticCloudEmailAddressInput`<sup>Optional</sup> <a name="elasticCloudEmailAddressInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudEmailAddressInput"></a>

```java
public java.lang.String getElasticCloudEmailAddressInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `logsInput`<sup>Optional</sup> <a name="logsInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.logsInput"></a>

```java
public ElasticCloudElasticsearchLogs getLogsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs">ElasticCloudElasticsearchLogs</a>

---

##### `monitoringEnabledInput`<sup>Optional</sup> <a name="monitoringEnabledInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.monitoringEnabledInput"></a>

```java
public java.lang.Object getMonitoringEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.skuNameInput"></a>

```java
public java.lang.String getSkuNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts">ElasticCloudElasticsearchTimeouts</a>

---

##### `elasticCloudEmailAddress`<sup>Required</sup> <a name="elasticCloudEmailAddress" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudEmailAddress"></a>

```java
public java.lang.String getElasticCloudEmailAddress();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `monitoringEnabled`<sup>Required</sup> <a name="monitoringEnabled" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.monitoringEnabled"></a>

```java
public java.lang.Object getMonitoringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticCloudElasticsearchConfig <a name="ElasticCloudElasticsearchConfig" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.elastic_cloud_elasticsearch.ElasticCloudElasticsearchConfig;

ElasticCloudElasticsearchConfig.builder()
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
    .elasticCloudEmailAddress(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
//  .id(java.lang.String)
//  .logs(ElasticCloudElasticsearchLogs)
//  .monitoringEnabled(java.lang.Boolean)
//  .monitoringEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ElasticCloudElasticsearchTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.elasticCloudEmailAddress">elasticCloudEmailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#elastic_cloud_email_address ElasticCloudElasticsearch#elastic_cloud_email_address}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#location ElasticCloudElasticsearch#location}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#name ElasticCloudElasticsearch#name}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#resource_group_name ElasticCloudElasticsearch#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#sku_name ElasticCloudElasticsearch#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#id ElasticCloudElasticsearch#id}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs">ElasticCloudElasticsearchLogs</a></code> | logs block. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.monitoringEnabled">monitoringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#monitoring_enabled ElasticCloudElasticsearch#monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#tags ElasticCloudElasticsearch#tags}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts">ElasticCloudElasticsearchTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `elasticCloudEmailAddress`<sup>Required</sup> <a name="elasticCloudEmailAddress" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.elasticCloudEmailAddress"></a>

```java
public java.lang.String getElasticCloudEmailAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#elastic_cloud_email_address ElasticCloudElasticsearch#elastic_cloud_email_address}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#location ElasticCloudElasticsearch#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#name ElasticCloudElasticsearch#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#resource_group_name ElasticCloudElasticsearch#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#sku_name ElasticCloudElasticsearch#sku_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#id ElasticCloudElasticsearch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.logs"></a>

```java
public ElasticCloudElasticsearchLogs getLogs();
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs">ElasticCloudElasticsearchLogs</a>

logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#logs ElasticCloudElasticsearch#logs}

---

##### `monitoringEnabled`<sup>Optional</sup> <a name="monitoringEnabled" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.monitoringEnabled"></a>

```java
public java.lang.Object getMonitoringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#monitoring_enabled ElasticCloudElasticsearch#monitoring_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#tags ElasticCloudElasticsearch#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.timeouts"></a>

```java
public ElasticCloudElasticsearchTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts">ElasticCloudElasticsearchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#timeouts ElasticCloudElasticsearch#timeouts}

---

### ElasticCloudElasticsearchLogs <a name="ElasticCloudElasticsearchLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.elastic_cloud_elasticsearch.ElasticCloudElasticsearchLogs;

ElasticCloudElasticsearchLogs.builder()
//  .filteringTag(IResolvable)
//  .filteringTag(java.util.List<ElasticCloudElasticsearchLogsFilteringTag>)
//  .sendActivityLogs(java.lang.Boolean)
//  .sendActivityLogs(IResolvable)
//  .sendAzureadLogs(java.lang.Boolean)
//  .sendAzureadLogs(IResolvable)
//  .sendSubscriptionLogs(java.lang.Boolean)
//  .sendSubscriptionLogs(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.filteringTag">filteringTag</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag">ElasticCloudElasticsearchLogsFilteringTag</a>></code> | filtering_tag block. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.sendActivityLogs">sendActivityLogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#send_activity_logs ElasticCloudElasticsearch#send_activity_logs}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.sendAzureadLogs">sendAzureadLogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#send_azuread_logs ElasticCloudElasticsearch#send_azuread_logs}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.sendSubscriptionLogs">sendSubscriptionLogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#send_subscription_logs ElasticCloudElasticsearch#send_subscription_logs}. |

---

##### `filteringTag`<sup>Optional</sup> <a name="filteringTag" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.filteringTag"></a>

```java
public java.lang.Object getFilteringTag();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag">ElasticCloudElasticsearchLogsFilteringTag</a>>

filtering_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#filtering_tag ElasticCloudElasticsearch#filtering_tag}

---

##### `sendActivityLogs`<sup>Optional</sup> <a name="sendActivityLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.sendActivityLogs"></a>

```java
public java.lang.Object getSendActivityLogs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#send_activity_logs ElasticCloudElasticsearch#send_activity_logs}.

---

##### `sendAzureadLogs`<sup>Optional</sup> <a name="sendAzureadLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.sendAzureadLogs"></a>

```java
public java.lang.Object getSendAzureadLogs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#send_azuread_logs ElasticCloudElasticsearch#send_azuread_logs}.

---

##### `sendSubscriptionLogs`<sup>Optional</sup> <a name="sendSubscriptionLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.sendSubscriptionLogs"></a>

```java
public java.lang.Object getSendSubscriptionLogs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#send_subscription_logs ElasticCloudElasticsearch#send_subscription_logs}.

---

### ElasticCloudElasticsearchLogsFilteringTag <a name="ElasticCloudElasticsearchLogsFilteringTag" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.elastic_cloud_elasticsearch.ElasticCloudElasticsearchLogsFilteringTag;

ElasticCloudElasticsearchLogsFilteringTag.builder()
    .action(java.lang.String)
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#action ElasticCloudElasticsearch#action}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#name ElasticCloudElasticsearch#name}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#value ElasticCloudElasticsearch#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#action ElasticCloudElasticsearch#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#name ElasticCloudElasticsearch#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#value ElasticCloudElasticsearch#value}.

---

### ElasticCloudElasticsearchTimeouts <a name="ElasticCloudElasticsearchTimeouts" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.elastic_cloud_elasticsearch.ElasticCloudElasticsearchTimeouts;

ElasticCloudElasticsearchTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#create ElasticCloudElasticsearch#create}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#delete ElasticCloudElasticsearch#delete}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#read ElasticCloudElasticsearch#read}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#update ElasticCloudElasticsearch#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#create ElasticCloudElasticsearch#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#delete ElasticCloudElasticsearch#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#read ElasticCloudElasticsearch#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/elastic_cloud_elasticsearch#update ElasticCloudElasticsearch#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticCloudElasticsearchLogsFilteringTagList <a name="ElasticCloudElasticsearchLogsFilteringTagList" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.elastic_cloud_elasticsearch.ElasticCloudElasticsearchLogsFilteringTagList;

new ElasticCloudElasticsearchLogsFilteringTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.get"></a>

```java
public ElasticCloudElasticsearchLogsFilteringTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag">ElasticCloudElasticsearchLogsFilteringTag</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag">ElasticCloudElasticsearchLogsFilteringTag</a>>

---


### ElasticCloudElasticsearchLogsFilteringTagOutputReference <a name="ElasticCloudElasticsearchLogsFilteringTagOutputReference" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.elastic_cloud_elasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference;

new ElasticCloudElasticsearchLogsFilteringTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag">ElasticCloudElasticsearchLogsFilteringTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag">ElasticCloudElasticsearchLogsFilteringTag</a>

---


### ElasticCloudElasticsearchLogsOutputReference <a name="ElasticCloudElasticsearchLogsOutputReference" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.elastic_cloud_elasticsearch.ElasticCloudElasticsearchLogsOutputReference;

new ElasticCloudElasticsearchLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.putFilteringTag">putFilteringTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetFilteringTag">resetFilteringTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetSendActivityLogs">resetSendActivityLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetSendAzureadLogs">resetSendAzureadLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetSendSubscriptionLogs">resetSendSubscriptionLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilteringTag` <a name="putFilteringTag" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.putFilteringTag"></a>

```java
public void putFilteringTag(IResolvable OR java.util.List<ElasticCloudElasticsearchLogsFilteringTag> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.putFilteringTag.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag">ElasticCloudElasticsearchLogsFilteringTag</a>>

---

##### `resetFilteringTag` <a name="resetFilteringTag" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetFilteringTag"></a>

```java
public void resetFilteringTag()
```

##### `resetSendActivityLogs` <a name="resetSendActivityLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetSendActivityLogs"></a>

```java
public void resetSendActivityLogs()
```

##### `resetSendAzureadLogs` <a name="resetSendAzureadLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetSendAzureadLogs"></a>

```java
public void resetSendAzureadLogs()
```

##### `resetSendSubscriptionLogs` <a name="resetSendSubscriptionLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetSendSubscriptionLogs"></a>

```java
public void resetSendSubscriptionLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.filteringTag">filteringTag</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList">ElasticCloudElasticsearchLogsFilteringTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.filteringTagInput">filteringTagInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag">ElasticCloudElasticsearchLogsFilteringTag</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendActivityLogsInput">sendActivityLogsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendAzureadLogsInput">sendAzureadLogsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendSubscriptionLogsInput">sendSubscriptionLogsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendActivityLogs">sendActivityLogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendAzureadLogs">sendAzureadLogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendSubscriptionLogs">sendSubscriptionLogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs">ElasticCloudElasticsearchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filteringTag`<sup>Required</sup> <a name="filteringTag" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.filteringTag"></a>

```java
public ElasticCloudElasticsearchLogsFilteringTagList getFilteringTag();
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList">ElasticCloudElasticsearchLogsFilteringTagList</a>

---

##### `filteringTagInput`<sup>Optional</sup> <a name="filteringTagInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.filteringTagInput"></a>

```java
public java.lang.Object getFilteringTagInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag">ElasticCloudElasticsearchLogsFilteringTag</a>>

---

##### `sendActivityLogsInput`<sup>Optional</sup> <a name="sendActivityLogsInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendActivityLogsInput"></a>

```java
public java.lang.Object getSendActivityLogsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendAzureadLogsInput`<sup>Optional</sup> <a name="sendAzureadLogsInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendAzureadLogsInput"></a>

```java
public java.lang.Object getSendAzureadLogsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendSubscriptionLogsInput`<sup>Optional</sup> <a name="sendSubscriptionLogsInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendSubscriptionLogsInput"></a>

```java
public java.lang.Object getSendSubscriptionLogsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendActivityLogs`<sup>Required</sup> <a name="sendActivityLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendActivityLogs"></a>

```java
public java.lang.Object getSendActivityLogs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendAzureadLogs`<sup>Required</sup> <a name="sendAzureadLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendAzureadLogs"></a>

```java
public java.lang.Object getSendAzureadLogs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendSubscriptionLogs`<sup>Required</sup> <a name="sendSubscriptionLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendSubscriptionLogs"></a>

```java
public java.lang.Object getSendSubscriptionLogs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.internalValue"></a>

```java
public ElasticCloudElasticsearchLogs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs">ElasticCloudElasticsearchLogs</a>

---


### ElasticCloudElasticsearchTimeoutsOutputReference <a name="ElasticCloudElasticsearchTimeoutsOutputReference" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.elastic_cloud_elasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference;

new ElasticCloudElasticsearchTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts">ElasticCloudElasticsearchTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts">ElasticCloudElasticsearchTimeouts</a>

---



