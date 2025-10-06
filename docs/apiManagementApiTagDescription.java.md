# `apiManagementApiTagDescription` Submodule <a name="`apiManagementApiTagDescription` Submodule" id="@cdktf/provider-azurerm.apiManagementApiTagDescription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementApiTagDescription <a name="ApiManagementApiTagDescription" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description azurerm_api_management_api_tag_description}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_tag_description.ApiManagementApiTagDescription;

ApiManagementApiTagDescription.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiTagId(java.lang.String)
//  .description(java.lang.String)
//  .externalDocumentationDescription(java.lang.String)
//  .externalDocumentationUrl(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApiManagementApiTagDescriptionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.apiTagId">apiTagId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#api_tag_id ApiManagementApiTagDescription#api_tag_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#description ApiManagementApiTagDescription#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.externalDocumentationDescription">externalDocumentationDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#external_documentation_description ApiManagementApiTagDescription#external_documentation_description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.externalDocumentationUrl">externalDocumentationUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#external_documentation_url ApiManagementApiTagDescription#external_documentation_url}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#id ApiManagementApiTagDescription#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeouts">ApiManagementApiTagDescriptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiTagId`<sup>Required</sup> <a name="apiTagId" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.apiTagId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#api_tag_id ApiManagementApiTagDescription#api_tag_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#description ApiManagementApiTagDescription#description}.

---

##### `externalDocumentationDescription`<sup>Optional</sup> <a name="externalDocumentationDescription" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.externalDocumentationDescription"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#external_documentation_description ApiManagementApiTagDescription#external_documentation_description}.

---

##### `externalDocumentationUrl`<sup>Optional</sup> <a name="externalDocumentationUrl" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.externalDocumentationUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#external_documentation_url ApiManagementApiTagDescription#external_documentation_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#id ApiManagementApiTagDescription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeouts">ApiManagementApiTagDescriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#timeouts ApiManagementApiTagDescription#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.resetExternalDocumentationDescription">resetExternalDocumentationDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.resetExternalDocumentationUrl">resetExternalDocumentationUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.putTimeouts"></a>

```java
public void putTimeouts(ApiManagementApiTagDescriptionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeouts">ApiManagementApiTagDescriptionTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExternalDocumentationDescription` <a name="resetExternalDocumentationDescription" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.resetExternalDocumentationDescription"></a>

```java
public void resetExternalDocumentationDescription()
```

##### `resetExternalDocumentationUrl` <a name="resetExternalDocumentationUrl" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.resetExternalDocumentationUrl"></a>

```java
public void resetExternalDocumentationUrl()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementApiTagDescription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_tag_description.ApiManagementApiTagDescription;

ApiManagementApiTagDescription.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_tag_description.ApiManagementApiTagDescription;

ApiManagementApiTagDescription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_tag_description.ApiManagementApiTagDescription;

ApiManagementApiTagDescription.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_tag_description.ApiManagementApiTagDescription;

ApiManagementApiTagDescription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiManagementApiTagDescription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApiManagementApiTagDescription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiManagementApiTagDescription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiManagementApiTagDescription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementApiTagDescription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference">ApiManagementApiTagDescriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.apiTagIdInput">apiTagIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.externalDocumentationDescriptionInput">externalDocumentationDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.externalDocumentationUrlInput">externalDocumentationUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeouts">ApiManagementApiTagDescriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.apiTagId">apiTagId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.externalDocumentationDescription">externalDocumentationDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.externalDocumentationUrl">externalDocumentationUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.timeouts"></a>

```java
public ApiManagementApiTagDescriptionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference">ApiManagementApiTagDescriptionTimeoutsOutputReference</a>

---

##### `apiTagIdInput`<sup>Optional</sup> <a name="apiTagIdInput" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.apiTagIdInput"></a>

```java
public java.lang.String getApiTagIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `externalDocumentationDescriptionInput`<sup>Optional</sup> <a name="externalDocumentationDescriptionInput" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.externalDocumentationDescriptionInput"></a>

```java
public java.lang.String getExternalDocumentationDescriptionInput();
```

- *Type:* java.lang.String

---

##### `externalDocumentationUrlInput`<sup>Optional</sup> <a name="externalDocumentationUrlInput" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.externalDocumentationUrlInput"></a>

```java
public java.lang.String getExternalDocumentationUrlInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.timeoutsInput"></a>

```java
public IResolvable|ApiManagementApiTagDescriptionTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeouts">ApiManagementApiTagDescriptionTimeouts</a>

---

##### `apiTagId`<sup>Required</sup> <a name="apiTagId" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.apiTagId"></a>

```java
public java.lang.String getApiTagId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `externalDocumentationDescription`<sup>Required</sup> <a name="externalDocumentationDescription" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.externalDocumentationDescription"></a>

```java
public java.lang.String getExternalDocumentationDescription();
```

- *Type:* java.lang.String

---

##### `externalDocumentationUrl`<sup>Required</sup> <a name="externalDocumentationUrl" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.externalDocumentationUrl"></a>

```java
public java.lang.String getExternalDocumentationUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementApiTagDescriptionConfig <a name="ApiManagementApiTagDescriptionConfig" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_tag_description.ApiManagementApiTagDescriptionConfig;

ApiManagementApiTagDescriptionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiTagId(java.lang.String)
//  .description(java.lang.String)
//  .externalDocumentationDescription(java.lang.String)
//  .externalDocumentationUrl(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApiManagementApiTagDescriptionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.apiTagId">apiTagId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#api_tag_id ApiManagementApiTagDescription#api_tag_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#description ApiManagementApiTagDescription#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.externalDocumentationDescription">externalDocumentationDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#external_documentation_description ApiManagementApiTagDescription#external_documentation_description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.externalDocumentationUrl">externalDocumentationUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#external_documentation_url ApiManagementApiTagDescription#external_documentation_url}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#id ApiManagementApiTagDescription#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeouts">ApiManagementApiTagDescriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiTagId`<sup>Required</sup> <a name="apiTagId" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.apiTagId"></a>

```java
public java.lang.String getApiTagId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#api_tag_id ApiManagementApiTagDescription#api_tag_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#description ApiManagementApiTagDescription#description}.

---

##### `externalDocumentationDescription`<sup>Optional</sup> <a name="externalDocumentationDescription" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.externalDocumentationDescription"></a>

```java
public java.lang.String getExternalDocumentationDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#external_documentation_description ApiManagementApiTagDescription#external_documentation_description}.

---

##### `externalDocumentationUrl`<sup>Optional</sup> <a name="externalDocumentationUrl" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.externalDocumentationUrl"></a>

```java
public java.lang.String getExternalDocumentationUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#external_documentation_url ApiManagementApiTagDescription#external_documentation_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#id ApiManagementApiTagDescription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionConfig.property.timeouts"></a>

```java
public ApiManagementApiTagDescriptionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeouts">ApiManagementApiTagDescriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#timeouts ApiManagementApiTagDescription#timeouts}

---

### ApiManagementApiTagDescriptionTimeouts <a name="ApiManagementApiTagDescriptionTimeouts" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_tag_description.ApiManagementApiTagDescriptionTimeouts;

ApiManagementApiTagDescriptionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#create ApiManagementApiTagDescription#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#delete ApiManagementApiTagDescription#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#read ApiManagementApiTagDescription#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#update ApiManagementApiTagDescription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#create ApiManagementApiTagDescription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#delete ApiManagementApiTagDescription#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#read ApiManagementApiTagDescription#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_api_tag_description#update ApiManagementApiTagDescription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementApiTagDescriptionTimeoutsOutputReference <a name="ApiManagementApiTagDescriptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_tag_description.ApiManagementApiTagDescriptionTimeoutsOutputReference;

new ApiManagementApiTagDescriptionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeouts">ApiManagementApiTagDescriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiManagementApiTagDescriptionTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.apiManagementApiTagDescription.ApiManagementApiTagDescriptionTimeouts">ApiManagementApiTagDescriptionTimeouts</a>

---



