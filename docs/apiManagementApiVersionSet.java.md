# `apiManagementApiVersionSet` Submodule <a name="`apiManagementApiVersionSet` Submodule" id="@cdktf/provider-azurerm.apiManagementApiVersionSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementApiVersionSet <a name="ApiManagementApiVersionSet" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set azurerm_api_management_api_version_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_version_set.ApiManagementApiVersionSet;

ApiManagementApiVersionSet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiManagementName(java.lang.String)
    .displayName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .versioningScheme(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApiManagementApiVersionSetTimeouts)
//  .versionHeaderName(java.lang.String)
//  .versionQueryName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.apiManagementName">apiManagementName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#api_management_name ApiManagementApiVersionSet#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#display_name ApiManagementApiVersionSet#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#name ApiManagementApiVersionSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#resource_group_name ApiManagementApiVersionSet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.versioningScheme">versioningScheme</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#versioning_scheme ApiManagementApiVersionSet#versioning_scheme}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#description ApiManagementApiVersionSet#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#id ApiManagementApiVersionSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeouts">ApiManagementApiVersionSetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.versionHeaderName">versionHeaderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#version_header_name ApiManagementApiVersionSet#version_header_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.versionQueryName">versionQueryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#version_query_name ApiManagementApiVersionSet#version_query_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.apiManagementName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#api_management_name ApiManagementApiVersionSet#api_management_name}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#display_name ApiManagementApiVersionSet#display_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#name ApiManagementApiVersionSet#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#resource_group_name ApiManagementApiVersionSet#resource_group_name}.

---

##### `versioningScheme`<sup>Required</sup> <a name="versioningScheme" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.versioningScheme"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#versioning_scheme ApiManagementApiVersionSet#versioning_scheme}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#description ApiManagementApiVersionSet#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#id ApiManagementApiVersionSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeouts">ApiManagementApiVersionSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#timeouts ApiManagementApiVersionSet#timeouts}

---

##### `versionHeaderName`<sup>Optional</sup> <a name="versionHeaderName" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.versionHeaderName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#version_header_name ApiManagementApiVersionSet#version_header_name}.

---

##### `versionQueryName`<sup>Optional</sup> <a name="versionQueryName" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.Initializer.parameter.versionQueryName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#version_query_name ApiManagementApiVersionSet#version_query_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.resetVersionHeaderName">resetVersionHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.resetVersionQueryName">resetVersionQueryName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.putTimeouts"></a>

```java
public void putTimeouts(ApiManagementApiVersionSetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeouts">ApiManagementApiVersionSetTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVersionHeaderName` <a name="resetVersionHeaderName" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.resetVersionHeaderName"></a>

```java
public void resetVersionHeaderName()
```

##### `resetVersionQueryName` <a name="resetVersionQueryName" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.resetVersionQueryName"></a>

```java
public void resetVersionQueryName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementApiVersionSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_version_set.ApiManagementApiVersionSet;

ApiManagementApiVersionSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_version_set.ApiManagementApiVersionSet;

ApiManagementApiVersionSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_version_set.ApiManagementApiVersionSet;

ApiManagementApiVersionSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_version_set.ApiManagementApiVersionSet;

ApiManagementApiVersionSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiManagementApiVersionSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApiManagementApiVersionSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiManagementApiVersionSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiManagementApiVersionSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementApiVersionSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference">ApiManagementApiVersionSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.apiManagementNameInput">apiManagementNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeouts">ApiManagementApiVersionSetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.versionHeaderNameInput">versionHeaderNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.versioningSchemeInput">versioningSchemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.versionQueryNameInput">versionQueryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.apiManagementName">apiManagementName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.versionHeaderName">versionHeaderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.versioningScheme">versioningScheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.versionQueryName">versionQueryName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.timeouts"></a>

```java
public ApiManagementApiVersionSetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference">ApiManagementApiVersionSetTimeoutsOutputReference</a>

---

##### `apiManagementNameInput`<sup>Optional</sup> <a name="apiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.apiManagementNameInput"></a>

```java
public java.lang.String getApiManagementNameInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.timeoutsInput"></a>

```java
public IResolvable|ApiManagementApiVersionSetTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeouts">ApiManagementApiVersionSetTimeouts</a>

---

##### `versionHeaderNameInput`<sup>Optional</sup> <a name="versionHeaderNameInput" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.versionHeaderNameInput"></a>

```java
public java.lang.String getVersionHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `versioningSchemeInput`<sup>Optional</sup> <a name="versioningSchemeInput" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.versioningSchemeInput"></a>

```java
public java.lang.String getVersioningSchemeInput();
```

- *Type:* java.lang.String

---

##### `versionQueryNameInput`<sup>Optional</sup> <a name="versionQueryNameInput" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.versionQueryNameInput"></a>

```java
public java.lang.String getVersionQueryNameInput();
```

- *Type:* java.lang.String

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.apiManagementName"></a>

```java
public java.lang.String getApiManagementName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `versionHeaderName`<sup>Required</sup> <a name="versionHeaderName" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.versionHeaderName"></a>

```java
public java.lang.String getVersionHeaderName();
```

- *Type:* java.lang.String

---

##### `versioningScheme`<sup>Required</sup> <a name="versioningScheme" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.versioningScheme"></a>

```java
public java.lang.String getVersioningScheme();
```

- *Type:* java.lang.String

---

##### `versionQueryName`<sup>Required</sup> <a name="versionQueryName" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.versionQueryName"></a>

```java
public java.lang.String getVersionQueryName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementApiVersionSetConfig <a name="ApiManagementApiVersionSetConfig" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_version_set.ApiManagementApiVersionSetConfig;

ApiManagementApiVersionSetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiManagementName(java.lang.String)
    .displayName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .versioningScheme(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApiManagementApiVersionSetTimeouts)
//  .versionHeaderName(java.lang.String)
//  .versionQueryName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.apiManagementName">apiManagementName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#api_management_name ApiManagementApiVersionSet#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#display_name ApiManagementApiVersionSet#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#name ApiManagementApiVersionSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#resource_group_name ApiManagementApiVersionSet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.versioningScheme">versioningScheme</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#versioning_scheme ApiManagementApiVersionSet#versioning_scheme}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#description ApiManagementApiVersionSet#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#id ApiManagementApiVersionSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeouts">ApiManagementApiVersionSetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.versionHeaderName">versionHeaderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#version_header_name ApiManagementApiVersionSet#version_header_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.versionQueryName">versionQueryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#version_query_name ApiManagementApiVersionSet#version_query_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.apiManagementName"></a>

```java
public java.lang.String getApiManagementName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#api_management_name ApiManagementApiVersionSet#api_management_name}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#display_name ApiManagementApiVersionSet#display_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#name ApiManagementApiVersionSet#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#resource_group_name ApiManagementApiVersionSet#resource_group_name}.

---

##### `versioningScheme`<sup>Required</sup> <a name="versioningScheme" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.versioningScheme"></a>

```java
public java.lang.String getVersioningScheme();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#versioning_scheme ApiManagementApiVersionSet#versioning_scheme}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#description ApiManagementApiVersionSet#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#id ApiManagementApiVersionSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.timeouts"></a>

```java
public ApiManagementApiVersionSetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeouts">ApiManagementApiVersionSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#timeouts ApiManagementApiVersionSet#timeouts}

---

##### `versionHeaderName`<sup>Optional</sup> <a name="versionHeaderName" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.versionHeaderName"></a>

```java
public java.lang.String getVersionHeaderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#version_header_name ApiManagementApiVersionSet#version_header_name}.

---

##### `versionQueryName`<sup>Optional</sup> <a name="versionQueryName" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetConfig.property.versionQueryName"></a>

```java
public java.lang.String getVersionQueryName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#version_query_name ApiManagementApiVersionSet#version_query_name}.

---

### ApiManagementApiVersionSetTimeouts <a name="ApiManagementApiVersionSetTimeouts" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_version_set.ApiManagementApiVersionSetTimeouts;

ApiManagementApiVersionSetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#create ApiManagementApiVersionSet#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#delete ApiManagementApiVersionSet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#read ApiManagementApiVersionSet#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#update ApiManagementApiVersionSet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#create ApiManagementApiVersionSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#delete ApiManagementApiVersionSet#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#read ApiManagementApiVersionSet#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_version_set#update ApiManagementApiVersionSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementApiVersionSetTimeoutsOutputReference <a name="ApiManagementApiVersionSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_version_set.ApiManagementApiVersionSetTimeoutsOutputReference;

new ApiManagementApiVersionSetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeouts">ApiManagementApiVersionSetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiManagementApiVersionSetTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.apiManagementApiVersionSet.ApiManagementApiVersionSetTimeouts">ApiManagementApiVersionSetTimeouts</a>

---



