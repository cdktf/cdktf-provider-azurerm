# `azurerm_log_analytics_query_pack_query`

Refer to the Terraform Registory for docs: [`azurerm_log_analytics_query_pack_query`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query).

# `logAnalyticsQueryPackQuery` Submodule <a name="`logAnalyticsQueryPackQuery` Submodule" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsQueryPackQuery <a name="LogAnalyticsQueryPackQuery" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query azurerm_log_analytics_query_pack_query}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_query_pack_query.LogAnalyticsQueryPackQuery;

LogAnalyticsQueryPackQuery.Builder.create(Construct scope, java.lang.String id)
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
    .body(java.lang.String)
    .displayName(java.lang.String)
    .queryPackId(java.lang.String)
//  .additionalSettingsJson(java.lang.String)
//  .categories(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .resourceTypes(java.util.List<java.lang.String>)
//  .solutions(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(LogAnalyticsQueryPackQueryTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.body">body</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#body LogAnalyticsQueryPackQuery#body}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#display_name LogAnalyticsQueryPackQuery#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.queryPackId">queryPackId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#query_pack_id LogAnalyticsQueryPackQuery#query_pack_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.additionalSettingsJson">additionalSettingsJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#additional_settings_json LogAnalyticsQueryPackQuery#additional_settings_json}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.categories">categories</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#categories LogAnalyticsQueryPackQuery#categories}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#description LogAnalyticsQueryPackQuery#description}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#id LogAnalyticsQueryPackQuery#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#name LogAnalyticsQueryPackQuery#name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#resource_types LogAnalyticsQueryPackQuery#resource_types}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.solutions">solutions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#solutions LogAnalyticsQueryPackQuery#solutions}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#tags LogAnalyticsQueryPackQuery#tags}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts">LogAnalyticsQueryPackQueryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.body"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#body LogAnalyticsQueryPackQuery#body}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#display_name LogAnalyticsQueryPackQuery#display_name}.

---

##### `queryPackId`<sup>Required</sup> <a name="queryPackId" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.queryPackId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#query_pack_id LogAnalyticsQueryPackQuery#query_pack_id}.

---

##### `additionalSettingsJson`<sup>Optional</sup> <a name="additionalSettingsJson" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.additionalSettingsJson"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#additional_settings_json LogAnalyticsQueryPackQuery#additional_settings_json}.

---

##### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.categories"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#categories LogAnalyticsQueryPackQuery#categories}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#description LogAnalyticsQueryPackQuery#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#id LogAnalyticsQueryPackQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#name LogAnalyticsQueryPackQuery#name}.

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.resourceTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#resource_types LogAnalyticsQueryPackQuery#resource_types}.

---

##### `solutions`<sup>Optional</sup> <a name="solutions" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.solutions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#solutions LogAnalyticsQueryPackQuery#solutions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#tags LogAnalyticsQueryPackQuery#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts">LogAnalyticsQueryPackQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#timeouts LogAnalyticsQueryPackQuery#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetAdditionalSettingsJson">resetAdditionalSettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetCategories">resetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetSolutions">resetSolutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.putTimeouts"></a>

```java
public void putTimeouts(LogAnalyticsQueryPackQueryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts">LogAnalyticsQueryPackQueryTimeouts</a>

---

##### `resetAdditionalSettingsJson` <a name="resetAdditionalSettingsJson" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetAdditionalSettingsJson"></a>

```java
public void resetAdditionalSettingsJson()
```

##### `resetCategories` <a name="resetCategories" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetCategories"></a>

```java
public void resetCategories()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetName"></a>

```java
public void resetName()
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetResourceTypes"></a>

```java
public void resetResourceTypes()
```

##### `resetSolutions` <a name="resetSolutions" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetSolutions"></a>

```java
public void resetSolutions()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LogAnalyticsQueryPackQuery resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_query_pack_query.LogAnalyticsQueryPackQuery;

LogAnalyticsQueryPackQuery.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_query_pack_query.LogAnalyticsQueryPackQuery;

LogAnalyticsQueryPackQuery.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_query_pack_query.LogAnalyticsQueryPackQuery;

LogAnalyticsQueryPackQuery.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_query_pack_query.LogAnalyticsQueryPackQuery;

LogAnalyticsQueryPackQuery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LogAnalyticsQueryPackQuery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LogAnalyticsQueryPackQuery resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LogAnalyticsQueryPackQuery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LogAnalyticsQueryPackQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsQueryPackQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference">LogAnalyticsQueryPackQueryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.additionalSettingsJsonInput">additionalSettingsJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.categoriesInput">categoriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.queryPackIdInput">queryPackIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.solutionsInput">solutionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts">LogAnalyticsQueryPackQueryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.additionalSettingsJson">additionalSettingsJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.categories">categories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.queryPackId">queryPackId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.solutions">solutions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.timeouts"></a>

```java
public LogAnalyticsQueryPackQueryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference">LogAnalyticsQueryPackQueryTimeoutsOutputReference</a>

---

##### `additionalSettingsJsonInput`<sup>Optional</sup> <a name="additionalSettingsJsonInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.additionalSettingsJsonInput"></a>

```java
public java.lang.String getAdditionalSettingsJsonInput();
```

- *Type:* java.lang.String

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `categoriesInput`<sup>Optional</sup> <a name="categoriesInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.categoriesInput"></a>

```java
public java.util.List<java.lang.String> getCategoriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryPackIdInput`<sup>Optional</sup> <a name="queryPackIdInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.queryPackIdInput"></a>

```java
public java.lang.String getQueryPackIdInput();
```

- *Type:* java.lang.String

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `solutionsInput`<sup>Optional</sup> <a name="solutionsInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.solutionsInput"></a>

```java
public java.util.List<java.lang.String> getSolutionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts">LogAnalyticsQueryPackQueryTimeouts</a>

---

##### `additionalSettingsJson`<sup>Required</sup> <a name="additionalSettingsJson" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.additionalSettingsJson"></a>

```java
public java.lang.String getAdditionalSettingsJson();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.categories"></a>

```java
public java.util.List<java.lang.String> getCategories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `queryPackId`<sup>Required</sup> <a name="queryPackId" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.queryPackId"></a>

```java
public java.lang.String getQueryPackId();
```

- *Type:* java.lang.String

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `solutions`<sup>Required</sup> <a name="solutions" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.solutions"></a>

```java
public java.util.List<java.lang.String> getSolutions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsQueryPackQueryConfig <a name="LogAnalyticsQueryPackQueryConfig" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_query_pack_query.LogAnalyticsQueryPackQueryConfig;

LogAnalyticsQueryPackQueryConfig.builder()
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
    .body(java.lang.String)
    .displayName(java.lang.String)
    .queryPackId(java.lang.String)
//  .additionalSettingsJson(java.lang.String)
//  .categories(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .resourceTypes(java.util.List<java.lang.String>)
//  .solutions(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(LogAnalyticsQueryPackQueryTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.body">body</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#body LogAnalyticsQueryPackQuery#body}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#display_name LogAnalyticsQueryPackQuery#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.queryPackId">queryPackId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#query_pack_id LogAnalyticsQueryPackQuery#query_pack_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.additionalSettingsJson">additionalSettingsJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#additional_settings_json LogAnalyticsQueryPackQuery#additional_settings_json}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.categories">categories</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#categories LogAnalyticsQueryPackQuery#categories}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#description LogAnalyticsQueryPackQuery#description}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#id LogAnalyticsQueryPackQuery#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#name LogAnalyticsQueryPackQuery#name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#resource_types LogAnalyticsQueryPackQuery#resource_types}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.solutions">solutions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#solutions LogAnalyticsQueryPackQuery#solutions}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#tags LogAnalyticsQueryPackQuery#tags}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts">LogAnalyticsQueryPackQueryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#body LogAnalyticsQueryPackQuery#body}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#display_name LogAnalyticsQueryPackQuery#display_name}.

---

##### `queryPackId`<sup>Required</sup> <a name="queryPackId" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.queryPackId"></a>

```java
public java.lang.String getQueryPackId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#query_pack_id LogAnalyticsQueryPackQuery#query_pack_id}.

---

##### `additionalSettingsJson`<sup>Optional</sup> <a name="additionalSettingsJson" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.additionalSettingsJson"></a>

```java
public java.lang.String getAdditionalSettingsJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#additional_settings_json LogAnalyticsQueryPackQuery#additional_settings_json}.

---

##### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.categories"></a>

```java
public java.util.List<java.lang.String> getCategories();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#categories LogAnalyticsQueryPackQuery#categories}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#description LogAnalyticsQueryPackQuery#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#id LogAnalyticsQueryPackQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#name LogAnalyticsQueryPackQuery#name}.

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#resource_types LogAnalyticsQueryPackQuery#resource_types}.

---

##### `solutions`<sup>Optional</sup> <a name="solutions" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.solutions"></a>

```java
public java.util.List<java.lang.String> getSolutions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#solutions LogAnalyticsQueryPackQuery#solutions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#tags LogAnalyticsQueryPackQuery#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.timeouts"></a>

```java
public LogAnalyticsQueryPackQueryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts">LogAnalyticsQueryPackQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#timeouts LogAnalyticsQueryPackQuery#timeouts}

---

### LogAnalyticsQueryPackQueryTimeouts <a name="LogAnalyticsQueryPackQueryTimeouts" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_query_pack_query.LogAnalyticsQueryPackQueryTimeouts;

LogAnalyticsQueryPackQueryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#create LogAnalyticsQueryPackQuery#create}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#delete LogAnalyticsQueryPackQuery#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#read LogAnalyticsQueryPackQuery#read}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#update LogAnalyticsQueryPackQuery#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#create LogAnalyticsQueryPackQuery#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#delete LogAnalyticsQueryPackQuery#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#read LogAnalyticsQueryPackQuery#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/log_analytics_query_pack_query#update LogAnalyticsQueryPackQuery#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsQueryPackQueryTimeoutsOutputReference <a name="LogAnalyticsQueryPackQueryTimeoutsOutputReference" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_query_pack_query.LogAnalyticsQueryPackQueryTimeoutsOutputReference;

new LogAnalyticsQueryPackQueryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts">LogAnalyticsQueryPackQueryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts">LogAnalyticsQueryPackQueryTimeouts</a>

---



