# `apiManagementApiSchema` Submodule <a name="`apiManagementApiSchema` Submodule" id="@cdktf/provider-azurerm.apiManagementApiSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementApiSchema <a name="ApiManagementApiSchema" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema azurerm_api_management_api_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_schema.ApiManagementApiSchema;

ApiManagementApiSchema.Builder.create(Construct scope, java.lang.String id)
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
    .apiManagementName(java.lang.String)
    .apiName(java.lang.String)
    .contentType(java.lang.String)
    .resourceGroupName(java.lang.String)
    .schemaId(java.lang.String)
//  .components(java.lang.String)
//  .definitions(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApiManagementApiSchemaTimeouts)
//  .value(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.apiManagementName">apiManagementName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#api_management_name ApiManagementApiSchema#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.apiName">apiName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#api_name ApiManagementApiSchema#api_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#content_type ApiManagementApiSchema#content_type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#resource_group_name ApiManagementApiSchema#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.schemaId">schemaId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#schema_id ApiManagementApiSchema#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.components">components</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#components ApiManagementApiSchema#components}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.definitions">definitions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#definitions ApiManagementApiSchema#definitions}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#id ApiManagementApiSchema#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeouts">ApiManagementApiSchemaTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#value ApiManagementApiSchema#value}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.apiManagementName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#api_management_name ApiManagementApiSchema#api_management_name}.

---

##### `apiName`<sup>Required</sup> <a name="apiName" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.apiName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#api_name ApiManagementApiSchema#api_name}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.contentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#content_type ApiManagementApiSchema#content_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#resource_group_name ApiManagementApiSchema#resource_group_name}.

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.schemaId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#schema_id ApiManagementApiSchema#schema_id}.

---

##### `components`<sup>Optional</sup> <a name="components" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.components"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#components ApiManagementApiSchema#components}.

---

##### `definitions`<sup>Optional</sup> <a name="definitions" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.definitions"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#definitions ApiManagementApiSchema#definitions}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#id ApiManagementApiSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeouts">ApiManagementApiSchemaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#timeouts ApiManagementApiSchema#timeouts}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.Initializer.parameter.value"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#value ApiManagementApiSchema#value}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.resetComponents">resetComponents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.resetDefinitions">resetDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.resetValue">resetValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.putTimeouts"></a>

```java
public void putTimeouts(ApiManagementApiSchemaTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeouts">ApiManagementApiSchemaTimeouts</a>

---

##### `resetComponents` <a name="resetComponents" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.resetComponents"></a>

```java
public void resetComponents()
```

##### `resetDefinitions` <a name="resetDefinitions" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.resetDefinitions"></a>

```java
public void resetDefinitions()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.resetValue"></a>

```java
public void resetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementApiSchema resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_schema.ApiManagementApiSchema;

ApiManagementApiSchema.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_schema.ApiManagementApiSchema;

ApiManagementApiSchema.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_schema.ApiManagementApiSchema;

ApiManagementApiSchema.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_schema.ApiManagementApiSchema;

ApiManagementApiSchema.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiManagementApiSchema.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApiManagementApiSchema resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiManagementApiSchema to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiManagementApiSchema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementApiSchema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference">ApiManagementApiSchemaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.apiManagementNameInput">apiManagementNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.apiNameInput">apiNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.componentsInput">componentsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.definitionsInput">definitionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.schemaIdInput">schemaIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeouts">ApiManagementApiSchemaTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.apiManagementName">apiManagementName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.apiName">apiName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.components">components</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.definitions">definitions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.schemaId">schemaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.timeouts"></a>

```java
public ApiManagementApiSchemaTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference">ApiManagementApiSchemaTimeoutsOutputReference</a>

---

##### `apiManagementNameInput`<sup>Optional</sup> <a name="apiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.apiManagementNameInput"></a>

```java
public java.lang.String getApiManagementNameInput();
```

- *Type:* java.lang.String

---

##### `apiNameInput`<sup>Optional</sup> <a name="apiNameInput" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.apiNameInput"></a>

```java
public java.lang.String getApiNameInput();
```

- *Type:* java.lang.String

---

##### `componentsInput`<sup>Optional</sup> <a name="componentsInput" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.componentsInput"></a>

```java
public java.lang.String getComponentsInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `definitionsInput`<sup>Optional</sup> <a name="definitionsInput" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.definitionsInput"></a>

```java
public java.lang.String getDefinitionsInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.schemaIdInput"></a>

```java
public java.lang.String getSchemaIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeouts">ApiManagementApiSchemaTimeouts</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.apiManagementName"></a>

```java
public java.lang.String getApiManagementName();
```

- *Type:* java.lang.String

---

##### `apiName`<sup>Required</sup> <a name="apiName" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.apiName"></a>

```java
public java.lang.String getApiName();
```

- *Type:* java.lang.String

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.components"></a>

```java
public java.lang.String getComponents();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `definitions`<sup>Required</sup> <a name="definitions" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.definitions"></a>

```java
public java.lang.String getDefinitions();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.schemaId"></a>

```java
public java.lang.String getSchemaId();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchema.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementApiSchemaConfig <a name="ApiManagementApiSchemaConfig" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_schema.ApiManagementApiSchemaConfig;

ApiManagementApiSchemaConfig.builder()
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
    .apiManagementName(java.lang.String)
    .apiName(java.lang.String)
    .contentType(java.lang.String)
    .resourceGroupName(java.lang.String)
    .schemaId(java.lang.String)
//  .components(java.lang.String)
//  .definitions(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApiManagementApiSchemaTimeouts)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.apiManagementName">apiManagementName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#api_management_name ApiManagementApiSchema#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.apiName">apiName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#api_name ApiManagementApiSchema#api_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#content_type ApiManagementApiSchema#content_type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#resource_group_name ApiManagementApiSchema#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.schemaId">schemaId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#schema_id ApiManagementApiSchema#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.components">components</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#components ApiManagementApiSchema#components}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.definitions">definitions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#definitions ApiManagementApiSchema#definitions}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#id ApiManagementApiSchema#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeouts">ApiManagementApiSchemaTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#value ApiManagementApiSchema#value}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.apiManagementName"></a>

```java
public java.lang.String getApiManagementName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#api_management_name ApiManagementApiSchema#api_management_name}.

---

##### `apiName`<sup>Required</sup> <a name="apiName" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.apiName"></a>

```java
public java.lang.String getApiName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#api_name ApiManagementApiSchema#api_name}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#content_type ApiManagementApiSchema#content_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#resource_group_name ApiManagementApiSchema#resource_group_name}.

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.schemaId"></a>

```java
public java.lang.String getSchemaId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#schema_id ApiManagementApiSchema#schema_id}.

---

##### `components`<sup>Optional</sup> <a name="components" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.components"></a>

```java
public java.lang.String getComponents();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#components ApiManagementApiSchema#components}.

---

##### `definitions`<sup>Optional</sup> <a name="definitions" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.definitions"></a>

```java
public java.lang.String getDefinitions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#definitions ApiManagementApiSchema#definitions}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#id ApiManagementApiSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.timeouts"></a>

```java
public ApiManagementApiSchemaTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeouts">ApiManagementApiSchemaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#timeouts ApiManagementApiSchema#timeouts}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#value ApiManagementApiSchema#value}.

---

### ApiManagementApiSchemaTimeouts <a name="ApiManagementApiSchemaTimeouts" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_schema.ApiManagementApiSchemaTimeouts;

ApiManagementApiSchemaTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#create ApiManagementApiSchema#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#delete ApiManagementApiSchema#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#read ApiManagementApiSchema#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#update ApiManagementApiSchema#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#create ApiManagementApiSchema#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#delete ApiManagementApiSchema#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#read ApiManagementApiSchema#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/api_management_api_schema#update ApiManagementApiSchema#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementApiSchemaTimeoutsOutputReference <a name="ApiManagementApiSchemaTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_api_schema.ApiManagementApiSchemaTimeoutsOutputReference;

new ApiManagementApiSchemaTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeouts">ApiManagementApiSchemaTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementApiSchema.ApiManagementApiSchemaTimeouts">ApiManagementApiSchemaTimeouts</a>

---



