# `appConfigurationFeature` Submodule <a name="`appConfigurationFeature` Submodule" id="@cdktf/provider-azurerm.appConfigurationFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppConfigurationFeature <a name="AppConfigurationFeature" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature azurerm_app_configuration_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_configuration_feature.AppConfigurationFeature;

AppConfigurationFeature.Builder.create(Construct scope, java.lang.String id)
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
    .configurationStoreId(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .key(java.lang.String)
//  .label(java.lang.String)
//  .locked(java.lang.Boolean)
//  .locked(IResolvable)
//  .percentageFilterValue(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .targetingFilter(IResolvable)
//  .targetingFilter(java.util.List<AppConfigurationFeatureTargetingFilter>)
//  .timeouts(AppConfigurationFeatureTimeouts)
//  .timewindowFilter(IResolvable)
//  .timewindowFilter(java.util.List<AppConfigurationFeatureTimewindowFilter>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.configurationStoreId">configurationStoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#configuration_store_id AppConfigurationFeature#configuration_store_id}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#name AppConfigurationFeature#name}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#description AppConfigurationFeature#description}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#enabled AppConfigurationFeature#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.etag">etag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#etag AppConfigurationFeature#etag}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#id AppConfigurationFeature#id}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#key AppConfigurationFeature#key}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#label AppConfigurationFeature#label}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.locked">locked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#locked AppConfigurationFeature#locked}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.percentageFilterValue">percentageFilterValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#percentage_filter_value AppConfigurationFeature#percentage_filter_value}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#tags AppConfigurationFeature#tags}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.targetingFilter">targetingFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter">AppConfigurationFeatureTargetingFilter</a>></code> | targeting_filter block. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts">AppConfigurationFeatureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.timewindowFilter">timewindowFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter">AppConfigurationFeatureTimewindowFilter</a>></code> | timewindow_filter block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configurationStoreId`<sup>Required</sup> <a name="configurationStoreId" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.configurationStoreId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#configuration_store_id AppConfigurationFeature#configuration_store_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#name AppConfigurationFeature#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#description AppConfigurationFeature#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#enabled AppConfigurationFeature#enabled}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.etag"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#etag AppConfigurationFeature#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#id AppConfigurationFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.key"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#key AppConfigurationFeature#key}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.label"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#label AppConfigurationFeature#label}.

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.locked"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#locked AppConfigurationFeature#locked}.

---

##### `percentageFilterValue`<sup>Optional</sup> <a name="percentageFilterValue" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.percentageFilterValue"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#percentage_filter_value AppConfigurationFeature#percentage_filter_value}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#tags AppConfigurationFeature#tags}.

---

##### `targetingFilter`<sup>Optional</sup> <a name="targetingFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.targetingFilter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter">AppConfigurationFeatureTargetingFilter</a>>

targeting_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#targeting_filter AppConfigurationFeature#targeting_filter}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts">AppConfigurationFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#timeouts AppConfigurationFeature#timeouts}

---

##### `timewindowFilter`<sup>Optional</sup> <a name="timewindowFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.timewindowFilter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter">AppConfigurationFeatureTimewindowFilter</a>>

timewindow_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#timewindow_filter AppConfigurationFeature#timewindow_filter}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTargetingFilter">putTargetingFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTimewindowFilter">putTimewindowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetLocked">resetLocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetPercentageFilterValue">resetPercentageFilterValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTargetingFilter">resetTargetingFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTimewindowFilter">resetTimewindowFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTargetingFilter` <a name="putTargetingFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTargetingFilter"></a>

```java
public void putTargetingFilter(IResolvable OR java.util.List<AppConfigurationFeatureTargetingFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTargetingFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter">AppConfigurationFeatureTargetingFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTimeouts"></a>

```java
public void putTimeouts(AppConfigurationFeatureTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts">AppConfigurationFeatureTimeouts</a>

---

##### `putTimewindowFilter` <a name="putTimewindowFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTimewindowFilter"></a>

```java
public void putTimewindowFilter(IResolvable OR java.util.List<AppConfigurationFeatureTimewindowFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTimewindowFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter">AppConfigurationFeatureTimewindowFilter</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetEtag"></a>

```java
public void resetEtag()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetId"></a>

```java
public void resetId()
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetKey"></a>

```java
public void resetKey()
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetLabel"></a>

```java
public void resetLabel()
```

##### `resetLocked` <a name="resetLocked" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetLocked"></a>

```java
public void resetLocked()
```

##### `resetPercentageFilterValue` <a name="resetPercentageFilterValue" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetPercentageFilterValue"></a>

```java
public void resetPercentageFilterValue()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTags"></a>

```java
public void resetTags()
```

##### `resetTargetingFilter` <a name="resetTargetingFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTargetingFilter"></a>

```java
public void resetTargetingFilter()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimewindowFilter` <a name="resetTimewindowFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTimewindowFilter"></a>

```java
public void resetTimewindowFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppConfigurationFeature resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_configuration_feature.AppConfigurationFeature;

AppConfigurationFeature.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_configuration_feature.AppConfigurationFeature;

AppConfigurationFeature.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_configuration_feature.AppConfigurationFeature;

AppConfigurationFeature.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_configuration_feature.AppConfigurationFeature;

AppConfigurationFeature.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppConfigurationFeature.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AppConfigurationFeature resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppConfigurationFeature to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppConfigurationFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AppConfigurationFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.targetingFilter">targetingFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList">AppConfigurationFeatureTargetingFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference">AppConfigurationFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timewindowFilter">timewindowFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList">AppConfigurationFeatureTimewindowFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.configurationStoreIdInput">configurationStoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.etagInput">etagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.lockedInput">lockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.percentageFilterValueInput">percentageFilterValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.targetingFilterInput">targetingFilterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter">AppConfigurationFeatureTargetingFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts">AppConfigurationFeatureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timewindowFilterInput">timewindowFilterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter">AppConfigurationFeatureTimewindowFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.configurationStoreId">configurationStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.locked">locked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.percentageFilterValue">percentageFilterValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `targetingFilter`<sup>Required</sup> <a name="targetingFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.targetingFilter"></a>

```java
public AppConfigurationFeatureTargetingFilterList getTargetingFilter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList">AppConfigurationFeatureTargetingFilterList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timeouts"></a>

```java
public AppConfigurationFeatureTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference">AppConfigurationFeatureTimeoutsOutputReference</a>

---

##### `timewindowFilter`<sup>Required</sup> <a name="timewindowFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timewindowFilter"></a>

```java
public AppConfigurationFeatureTimewindowFilterList getTimewindowFilter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList">AppConfigurationFeatureTimewindowFilterList</a>

---

##### `configurationStoreIdInput`<sup>Optional</sup> <a name="configurationStoreIdInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.configurationStoreIdInput"></a>

```java
public java.lang.String getConfigurationStoreIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.etagInput"></a>

```java
public java.lang.String getEtagInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `lockedInput`<sup>Optional</sup> <a name="lockedInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.lockedInput"></a>

```java
public java.lang.Object getLockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `percentageFilterValueInput`<sup>Optional</sup> <a name="percentageFilterValueInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.percentageFilterValueInput"></a>

```java
public java.lang.Number getPercentageFilterValueInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetingFilterInput`<sup>Optional</sup> <a name="targetingFilterInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.targetingFilterInput"></a>

```java
public java.lang.Object getTargetingFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter">AppConfigurationFeatureTargetingFilter</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts">AppConfigurationFeatureTimeouts</a>

---

##### `timewindowFilterInput`<sup>Optional</sup> <a name="timewindowFilterInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timewindowFilterInput"></a>

```java
public java.lang.Object getTimewindowFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter">AppConfigurationFeatureTimewindowFilter</a>>

---

##### `configurationStoreId`<sup>Required</sup> <a name="configurationStoreId" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.configurationStoreId"></a>

```java
public java.lang.String getConfigurationStoreId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.locked"></a>

```java
public java.lang.Object getLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `percentageFilterValue`<sup>Required</sup> <a name="percentageFilterValue" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.percentageFilterValue"></a>

```java
public java.lang.Number getPercentageFilterValue();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppConfigurationFeatureConfig <a name="AppConfigurationFeatureConfig" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_configuration_feature.AppConfigurationFeatureConfig;

AppConfigurationFeatureConfig.builder()
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
    .configurationStoreId(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .key(java.lang.String)
//  .label(java.lang.String)
//  .locked(java.lang.Boolean)
//  .locked(IResolvable)
//  .percentageFilterValue(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .targetingFilter(IResolvable)
//  .targetingFilter(java.util.List<AppConfigurationFeatureTargetingFilter>)
//  .timeouts(AppConfigurationFeatureTimeouts)
//  .timewindowFilter(IResolvable)
//  .timewindowFilter(java.util.List<AppConfigurationFeatureTimewindowFilter>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.configurationStoreId">configurationStoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#configuration_store_id AppConfigurationFeature#configuration_store_id}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#name AppConfigurationFeature#name}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#description AppConfigurationFeature#description}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#enabled AppConfigurationFeature#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.etag">etag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#etag AppConfigurationFeature#etag}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#id AppConfigurationFeature#id}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#key AppConfigurationFeature#key}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#label AppConfigurationFeature#label}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.locked">locked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#locked AppConfigurationFeature#locked}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.percentageFilterValue">percentageFilterValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#percentage_filter_value AppConfigurationFeature#percentage_filter_value}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#tags AppConfigurationFeature#tags}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.targetingFilter">targetingFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter">AppConfigurationFeatureTargetingFilter</a>></code> | targeting_filter block. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts">AppConfigurationFeatureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.timewindowFilter">timewindowFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter">AppConfigurationFeatureTimewindowFilter</a>></code> | timewindow_filter block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configurationStoreId`<sup>Required</sup> <a name="configurationStoreId" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.configurationStoreId"></a>

```java
public java.lang.String getConfigurationStoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#configuration_store_id AppConfigurationFeature#configuration_store_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#name AppConfigurationFeature#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#description AppConfigurationFeature#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#enabled AppConfigurationFeature#enabled}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#etag AppConfigurationFeature#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#id AppConfigurationFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#key AppConfigurationFeature#key}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#label AppConfigurationFeature#label}.

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.locked"></a>

```java
public java.lang.Object getLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#locked AppConfigurationFeature#locked}.

---

##### `percentageFilterValue`<sup>Optional</sup> <a name="percentageFilterValue" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.percentageFilterValue"></a>

```java
public java.lang.Number getPercentageFilterValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#percentage_filter_value AppConfigurationFeature#percentage_filter_value}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#tags AppConfigurationFeature#tags}.

---

##### `targetingFilter`<sup>Optional</sup> <a name="targetingFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.targetingFilter"></a>

```java
public java.lang.Object getTargetingFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter">AppConfigurationFeatureTargetingFilter</a>>

targeting_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#targeting_filter AppConfigurationFeature#targeting_filter}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.timeouts"></a>

```java
public AppConfigurationFeatureTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts">AppConfigurationFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#timeouts AppConfigurationFeature#timeouts}

---

##### `timewindowFilter`<sup>Optional</sup> <a name="timewindowFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.timewindowFilter"></a>

```java
public java.lang.Object getTimewindowFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter">AppConfigurationFeatureTimewindowFilter</a>>

timewindow_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#timewindow_filter AppConfigurationFeature#timewindow_filter}

---

### AppConfigurationFeatureTargetingFilter <a name="AppConfigurationFeatureTargetingFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_configuration_feature.AppConfigurationFeatureTargetingFilter;

AppConfigurationFeatureTargetingFilter.builder()
    .defaultRolloutPercentage(java.lang.Number)
//  .groups(IResolvable)
//  .groups(java.util.List<AppConfigurationFeatureTargetingFilterGroups>)
//  .users(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter.property.defaultRolloutPercentage">defaultRolloutPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#default_rollout_percentage AppConfigurationFeature#default_rollout_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter.property.groups">groups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups">AppConfigurationFeatureTargetingFilterGroups</a>></code> | groups block. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter.property.users">users</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#users AppConfigurationFeature#users}. |

---

##### `defaultRolloutPercentage`<sup>Required</sup> <a name="defaultRolloutPercentage" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter.property.defaultRolloutPercentage"></a>

```java
public java.lang.Number getDefaultRolloutPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#default_rollout_percentage AppConfigurationFeature#default_rollout_percentage}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter.property.groups"></a>

```java
public java.lang.Object getGroups();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups">AppConfigurationFeatureTargetingFilterGroups</a>>

groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#groups AppConfigurationFeature#groups}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter.property.users"></a>

```java
public java.util.List<java.lang.String> getUsers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#users AppConfigurationFeature#users}.

---

### AppConfigurationFeatureTargetingFilterGroups <a name="AppConfigurationFeatureTargetingFilterGroups" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_configuration_feature.AppConfigurationFeatureTargetingFilterGroups;

AppConfigurationFeatureTargetingFilterGroups.builder()
    .name(java.lang.String)
    .rolloutPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#name AppConfigurationFeature#name}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups.property.rolloutPercentage">rolloutPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#rollout_percentage AppConfigurationFeature#rollout_percentage}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#name AppConfigurationFeature#name}.

---

##### `rolloutPercentage`<sup>Required</sup> <a name="rolloutPercentage" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups.property.rolloutPercentage"></a>

```java
public java.lang.Number getRolloutPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#rollout_percentage AppConfigurationFeature#rollout_percentage}.

---

### AppConfigurationFeatureTimeouts <a name="AppConfigurationFeatureTimeouts" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_configuration_feature.AppConfigurationFeatureTimeouts;

AppConfigurationFeatureTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#create AppConfigurationFeature#create}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#delete AppConfigurationFeature#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#read AppConfigurationFeature#read}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#update AppConfigurationFeature#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#create AppConfigurationFeature#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#delete AppConfigurationFeature#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#read AppConfigurationFeature#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#update AppConfigurationFeature#update}.

---

### AppConfigurationFeatureTimewindowFilter <a name="AppConfigurationFeatureTimewindowFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_configuration_feature.AppConfigurationFeatureTimewindowFilter;

AppConfigurationFeatureTimewindowFilter.builder()
//  .end(java.lang.String)
//  .start(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter.property.end">end</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#end AppConfigurationFeature#end}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter.property.start">start</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#start AppConfigurationFeature#start}. |

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#end AppConfigurationFeature#end}.

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_configuration_feature#start AppConfigurationFeature#start}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppConfigurationFeatureTargetingFilterGroupsList <a name="AppConfigurationFeatureTargetingFilterGroupsList" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_configuration_feature.AppConfigurationFeatureTargetingFilterGroupsList;

new AppConfigurationFeatureTargetingFilterGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.get"></a>

```java
public AppConfigurationFeatureTargetingFilterGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups">AppConfigurationFeatureTargetingFilterGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups">AppConfigurationFeatureTargetingFilterGroups</a>>

---


### AppConfigurationFeatureTargetingFilterGroupsOutputReference <a name="AppConfigurationFeatureTargetingFilterGroupsOutputReference" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_configuration_feature.AppConfigurationFeatureTargetingFilterGroupsOutputReference;

new AppConfigurationFeatureTargetingFilterGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.rolloutPercentageInput">rolloutPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.rolloutPercentage">rolloutPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups">AppConfigurationFeatureTargetingFilterGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rolloutPercentageInput`<sup>Optional</sup> <a name="rolloutPercentageInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.rolloutPercentageInput"></a>

```java
public java.lang.Number getRolloutPercentageInput();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rolloutPercentage`<sup>Required</sup> <a name="rolloutPercentage" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.rolloutPercentage"></a>

```java
public java.lang.Number getRolloutPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups">AppConfigurationFeatureTargetingFilterGroups</a>

---


### AppConfigurationFeatureTargetingFilterList <a name="AppConfigurationFeatureTargetingFilterList" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_configuration_feature.AppConfigurationFeatureTargetingFilterList;

new AppConfigurationFeatureTargetingFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.get"></a>

```java
public AppConfigurationFeatureTargetingFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter">AppConfigurationFeatureTargetingFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter">AppConfigurationFeatureTargetingFilter</a>>

---


### AppConfigurationFeatureTargetingFilterOutputReference <a name="AppConfigurationFeatureTargetingFilterOutputReference" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_configuration_feature.AppConfigurationFeatureTargetingFilterOutputReference;

new AppConfigurationFeatureTargetingFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.putGroups">putGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGroups` <a name="putGroups" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.putGroups"></a>

```java
public void putGroups(IResolvable OR java.util.List<AppConfigurationFeatureTargetingFilterGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.putGroups.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups">AppConfigurationFeatureTargetingFilterGroups</a>>

---

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.resetGroups"></a>

```java
public void resetGroups()
```

##### `resetUsers` <a name="resetUsers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.resetUsers"></a>

```java
public void resetUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.groups">groups</a></code> | <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList">AppConfigurationFeatureTargetingFilterGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.defaultRolloutPercentageInput">defaultRolloutPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.groupsInput">groupsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups">AppConfigurationFeatureTargetingFilterGroups</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.usersInput">usersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.defaultRolloutPercentage">defaultRolloutPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.users">users</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter">AppConfigurationFeatureTargetingFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.groups"></a>

```java
public AppConfigurationFeatureTargetingFilterGroupsList getGroups();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList">AppConfigurationFeatureTargetingFilterGroupsList</a>

---

##### `defaultRolloutPercentageInput`<sup>Optional</sup> <a name="defaultRolloutPercentageInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.defaultRolloutPercentageInput"></a>

```java
public java.lang.Number getDefaultRolloutPercentageInput();
```

- *Type:* java.lang.Number

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.groupsInput"></a>

```java
public java.lang.Object getGroupsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups">AppConfigurationFeatureTargetingFilterGroups</a>>

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.usersInput"></a>

```java
public java.util.List<java.lang.String> getUsersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultRolloutPercentage`<sup>Required</sup> <a name="defaultRolloutPercentage" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.defaultRolloutPercentage"></a>

```java
public java.lang.Number getDefaultRolloutPercentage();
```

- *Type:* java.lang.Number

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.users"></a>

```java
public java.util.List<java.lang.String> getUsers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter">AppConfigurationFeatureTargetingFilter</a>

---


### AppConfigurationFeatureTimeoutsOutputReference <a name="AppConfigurationFeatureTimeoutsOutputReference" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_configuration_feature.AppConfigurationFeatureTimeoutsOutputReference;

new AppConfigurationFeatureTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts">AppConfigurationFeatureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts">AppConfigurationFeatureTimeouts</a>

---


### AppConfigurationFeatureTimewindowFilterList <a name="AppConfigurationFeatureTimewindowFilterList" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_configuration_feature.AppConfigurationFeatureTimewindowFilterList;

new AppConfigurationFeatureTimewindowFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.get"></a>

```java
public AppConfigurationFeatureTimewindowFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter">AppConfigurationFeatureTimewindowFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter">AppConfigurationFeatureTimewindowFilter</a>>

---


### AppConfigurationFeatureTimewindowFilterOutputReference <a name="AppConfigurationFeatureTimewindowFilterOutputReference" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_configuration_feature.AppConfigurationFeatureTimewindowFilterOutputReference;

new AppConfigurationFeatureTimewindowFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.resetEnd">resetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.resetStart">resetStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnd` <a name="resetEnd" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.resetEnd"></a>

```java
public void resetEnd()
```

##### `resetStart` <a name="resetStart" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.resetStart"></a>

```java
public void resetStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.endInput">endInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.startInput">startInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.end">end</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.start">start</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter">AppConfigurationFeatureTimewindowFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.endInput"></a>

```java
public java.lang.String getEndInput();
```

- *Type:* java.lang.String

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.startInput"></a>

```java
public java.lang.String getStartInput();
```

- *Type:* java.lang.String

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter">AppConfigurationFeatureTimewindowFilter</a>

---



