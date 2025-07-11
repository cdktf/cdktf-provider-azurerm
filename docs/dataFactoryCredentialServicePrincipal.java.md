# `dataFactoryCredentialServicePrincipal` Submodule <a name="`dataFactoryCredentialServicePrincipal` Submodule" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryCredentialServicePrincipal <a name="DataFactoryCredentialServicePrincipal" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal azurerm_data_factory_credential_service_principal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_credential_service_principal.DataFactoryCredentialServicePrincipal;

DataFactoryCredentialServicePrincipal.Builder.create(Construct scope, java.lang.String id)
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
    .dataFactoryId(java.lang.String)
    .name(java.lang.String)
    .servicePrincipalId(java.lang.String)
    .tenantId(java.lang.String)
//  .annotations(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .servicePrincipalKey(DataFactoryCredentialServicePrincipalServicePrincipalKey)
//  .timeouts(DataFactoryCredentialServicePrincipalTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | The resource ID of the parent Data Factory. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The desired name of the credential resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.String</code> | The Client ID of the Service Principal. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The Tenant ID of the Service Principal. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | (Optional) List of string annotations. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | (Optional) Short text description. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#id DataFactoryCredentialServicePrincipal#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.servicePrincipalKey">servicePrincipalKey</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey">DataFactoryCredentialServicePrincipalServicePrincipalKey</a></code> | service_principal_key block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts">DataFactoryCredentialServicePrincipalTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.dataFactoryId"></a>

- *Type:* java.lang.String

The resource ID of the parent Data Factory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#data_factory_id DataFactoryCredentialServicePrincipal#data_factory_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The desired name of the credential resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#name DataFactoryCredentialServicePrincipal#name}

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.servicePrincipalId"></a>

- *Type:* java.lang.String

The Client ID of the Service Principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#service_principal_id DataFactoryCredentialServicePrincipal#service_principal_id}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

The Tenant ID of the Service Principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#tenant_id DataFactoryCredentialServicePrincipal#tenant_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.annotations"></a>

- *Type:* java.util.List<java.lang.String>

(Optional) List of string annotations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#annotations DataFactoryCredentialServicePrincipal#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.description"></a>

- *Type:* java.lang.String

(Optional) Short text description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#description DataFactoryCredentialServicePrincipal#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#id DataFactoryCredentialServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `servicePrincipalKey`<sup>Optional</sup> <a name="servicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.servicePrincipalKey"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey">DataFactoryCredentialServicePrincipalServicePrincipalKey</a>

service_principal_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#service_principal_key DataFactoryCredentialServicePrincipal#service_principal_key}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts">DataFactoryCredentialServicePrincipalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#timeouts DataFactoryCredentialServicePrincipal#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.putServicePrincipalKey">putServicePrincipalKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetServicePrincipalKey">resetServicePrincipalKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putServicePrincipalKey` <a name="putServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.putServicePrincipalKey"></a>

```java
public void putServicePrincipalKey(DataFactoryCredentialServicePrincipalServicePrincipalKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.putServicePrincipalKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey">DataFactoryCredentialServicePrincipalServicePrincipalKey</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.putTimeouts"></a>

```java
public void putTimeouts(DataFactoryCredentialServicePrincipalTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts">DataFactoryCredentialServicePrincipalTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetId"></a>

```java
public void resetId()
```

##### `resetServicePrincipalKey` <a name="resetServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetServicePrincipalKey"></a>

```java
public void resetServicePrincipalKey()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryCredentialServicePrincipal resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_credential_service_principal.DataFactoryCredentialServicePrincipal;

DataFactoryCredentialServicePrincipal.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_credential_service_principal.DataFactoryCredentialServicePrincipal;

DataFactoryCredentialServicePrincipal.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_credential_service_principal.DataFactoryCredentialServicePrincipal;

DataFactoryCredentialServicePrincipal.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_credential_service_principal.DataFactoryCredentialServicePrincipal;

DataFactoryCredentialServicePrincipal.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataFactoryCredentialServicePrincipal.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataFactoryCredentialServicePrincipal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataFactoryCredentialServicePrincipal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataFactoryCredentialServicePrincipal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryCredentialServicePrincipal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalKey">servicePrincipalKey</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference">DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference">DataFactoryCredentialServicePrincipalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.annotationsInput">annotationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalIdInput">servicePrincipalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalKeyInput">servicePrincipalKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey">DataFactoryCredentialServicePrincipalServicePrincipalKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts">DataFactoryCredentialServicePrincipalTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `servicePrincipalKey`<sup>Required</sup> <a name="servicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalKey"></a>

```java
public DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference getServicePrincipalKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference">DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.timeouts"></a>

```java
public DataFactoryCredentialServicePrincipalTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference">DataFactoryCredentialServicePrincipalTimeoutsOutputReference</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.annotationsInput"></a>

```java
public java.util.List<java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.dataFactoryIdInput"></a>

```java
public java.lang.String getDataFactoryIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `servicePrincipalIdInput`<sup>Optional</sup> <a name="servicePrincipalIdInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalIdInput"></a>

```java
public java.lang.String getServicePrincipalIdInput();
```

- *Type:* java.lang.String

---

##### `servicePrincipalKeyInput`<sup>Optional</sup> <a name="servicePrincipalKeyInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalKeyInput"></a>

```java
public DataFactoryCredentialServicePrincipalServicePrincipalKey getServicePrincipalKeyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey">DataFactoryCredentialServicePrincipalServicePrincipalKey</a>

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts">DataFactoryCredentialServicePrincipalTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalId"></a>

```java
public java.lang.String getServicePrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryCredentialServicePrincipalConfig <a name="DataFactoryCredentialServicePrincipalConfig" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_credential_service_principal.DataFactoryCredentialServicePrincipalConfig;

DataFactoryCredentialServicePrincipalConfig.builder()
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
    .dataFactoryId(java.lang.String)
    .name(java.lang.String)
    .servicePrincipalId(java.lang.String)
    .tenantId(java.lang.String)
//  .annotations(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .servicePrincipalKey(DataFactoryCredentialServicePrincipalServicePrincipalKey)
//  .timeouts(DataFactoryCredentialServicePrincipalTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | The resource ID of the parent Data Factory. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.name">name</a></code> | <code>java.lang.String</code> | The desired name of the credential resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.String</code> | The Client ID of the Service Principal. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The Tenant ID of the Service Principal. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | (Optional) List of string annotations. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.description">description</a></code> | <code>java.lang.String</code> | (Optional) Short text description. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#id DataFactoryCredentialServicePrincipal#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.servicePrincipalKey">servicePrincipalKey</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey">DataFactoryCredentialServicePrincipalServicePrincipalKey</a></code> | service_principal_key block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts">DataFactoryCredentialServicePrincipalTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

The resource ID of the parent Data Factory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#data_factory_id DataFactoryCredentialServicePrincipal#data_factory_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The desired name of the credential resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#name DataFactoryCredentialServicePrincipal#name}

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.servicePrincipalId"></a>

```java
public java.lang.String getServicePrincipalId();
```

- *Type:* java.lang.String

The Client ID of the Service Principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#service_principal_id DataFactoryCredentialServicePrincipal#service_principal_id}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

The Tenant ID of the Service Principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#tenant_id DataFactoryCredentialServicePrincipal#tenant_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

(Optional) List of string annotations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#annotations DataFactoryCredentialServicePrincipal#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

(Optional) Short text description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#description DataFactoryCredentialServicePrincipal#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#id DataFactoryCredentialServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `servicePrincipalKey`<sup>Optional</sup> <a name="servicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.servicePrincipalKey"></a>

```java
public DataFactoryCredentialServicePrincipalServicePrincipalKey getServicePrincipalKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey">DataFactoryCredentialServicePrincipalServicePrincipalKey</a>

service_principal_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#service_principal_key DataFactoryCredentialServicePrincipal#service_principal_key}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.timeouts"></a>

```java
public DataFactoryCredentialServicePrincipalTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts">DataFactoryCredentialServicePrincipalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#timeouts DataFactoryCredentialServicePrincipal#timeouts}

---

### DataFactoryCredentialServicePrincipalServicePrincipalKey <a name="DataFactoryCredentialServicePrincipalServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_credential_service_principal.DataFactoryCredentialServicePrincipalServicePrincipalKey;

DataFactoryCredentialServicePrincipalServicePrincipalKey.builder()
    .linkedServiceName(java.lang.String)
    .secretName(java.lang.String)
//  .secretVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey.property.linkedServiceName">linkedServiceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#linked_service_name DataFactoryCredentialServicePrincipal#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey.property.secretName">secretName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#secret_name DataFactoryCredentialServicePrincipal#secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey.property.secretVersion">secretVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#secret_version DataFactoryCredentialServicePrincipal#secret_version}. |

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey.property.linkedServiceName"></a>

```java
public java.lang.String getLinkedServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#linked_service_name DataFactoryCredentialServicePrincipal#linked_service_name}.

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#secret_name DataFactoryCredentialServicePrincipal#secret_name}.

---

##### `secretVersion`<sup>Optional</sup> <a name="secretVersion" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey.property.secretVersion"></a>

```java
public java.lang.String getSecretVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#secret_version DataFactoryCredentialServicePrincipal#secret_version}.

---

### DataFactoryCredentialServicePrincipalTimeouts <a name="DataFactoryCredentialServicePrincipalTimeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_credential_service_principal.DataFactoryCredentialServicePrincipalTimeouts;

DataFactoryCredentialServicePrincipalTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#create DataFactoryCredentialServicePrincipal#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#delete DataFactoryCredentialServicePrincipal#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#read DataFactoryCredentialServicePrincipal#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#update DataFactoryCredentialServicePrincipal#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#create DataFactoryCredentialServicePrincipal#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#delete DataFactoryCredentialServicePrincipal#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#read DataFactoryCredentialServicePrincipal#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_credential_service_principal#update DataFactoryCredentialServicePrincipal#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference <a name="DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_credential_service_principal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference;

new DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.resetSecretVersion">resetSecretVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretVersion` <a name="resetSecretVersion" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.resetSecretVersion"></a>

```java
public void resetSecretVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.linkedServiceNameInput">linkedServiceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.linkedServiceName">linkedServiceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretVersion">secretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey">DataFactoryCredentialServicePrincipalServicePrincipalKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `linkedServiceNameInput`<sup>Optional</sup> <a name="linkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.linkedServiceNameInput"></a>

```java
public java.lang.String getLinkedServiceNameInput();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretVersionInput"></a>

```java
public java.lang.String getSecretVersionInput();
```

- *Type:* java.lang.String

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.linkedServiceName"></a>

```java
public java.lang.String getLinkedServiceName();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretVersion"></a>

```java
public java.lang.String getSecretVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.internalValue"></a>

```java
public DataFactoryCredentialServicePrincipalServicePrincipalKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey">DataFactoryCredentialServicePrincipalServicePrincipalKey</a>

---


### DataFactoryCredentialServicePrincipalTimeoutsOutputReference <a name="DataFactoryCredentialServicePrincipalTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_credential_service_principal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference;

new DataFactoryCredentialServicePrincipalTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts">DataFactoryCredentialServicePrincipalTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts">DataFactoryCredentialServicePrincipalTimeouts</a>

---



