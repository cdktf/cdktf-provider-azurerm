# `dataFactoryLinkedServiceAzureBlobStorage` Submodule <a name="`dataFactoryLinkedServiceAzureBlobStorage` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceAzureBlobStorage <a name="DataFactoryLinkedServiceAzureBlobStorage" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage azurerm_data_factory_linked_service_azure_blob_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureBlobStorage(Construct Scope, string Id, DataFactoryLinkedServiceAzureBlobStorageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig">DataFactoryLinkedServiceAzureBlobStorageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig">DataFactoryLinkedServiceAzureBlobStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putKeyVaultSasToken">PutKeyVaultSasToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putServicePrincipalLinkedKeyVaultKey">PutServicePrincipalLinkedKeyVaultKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetConnectionStringInsecure">ResetConnectionStringInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetIntegrationRuntimeName">ResetIntegrationRuntimeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetKeyVaultSasToken">ResetKeyVaultSasToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetSasUri">ResetSasUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServiceEndpoint">ResetServiceEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServicePrincipalId">ResetServicePrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServicePrincipalKey">ResetServicePrincipalKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServicePrincipalLinkedKeyVaultKey">ResetServicePrincipalLinkedKeyVaultKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetStorageKind">ResetStorageKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetUseManagedIdentity">ResetUseManagedIdentity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKeyVaultSasToken` <a name="PutKeyVaultSasToken" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putKeyVaultSasToken"></a>

```csharp
private void PutKeyVaultSasToken(DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putKeyVaultSasToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken</a>

---

##### `PutServicePrincipalLinkedKeyVaultKey` <a name="PutServicePrincipalLinkedKeyVaultKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putServicePrincipalLinkedKeyVaultKey"></a>

```csharp
private void PutServicePrincipalLinkedKeyVaultKey(DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putServicePrincipalLinkedKeyVaultKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putTimeouts"></a>

```csharp
private void PutTimeouts(DataFactoryLinkedServiceAzureBlobStorageTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts">DataFactoryLinkedServiceAzureBlobStorageTimeouts</a>

---

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetAdditionalProperties"></a>

```csharp
private void ResetAdditionalProperties()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetConnectionString` <a name="ResetConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetConnectionString"></a>

```csharp
private void ResetConnectionString()
```

##### `ResetConnectionStringInsecure` <a name="ResetConnectionStringInsecure" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetConnectionStringInsecure"></a>

```csharp
private void ResetConnectionStringInsecure()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIntegrationRuntimeName` <a name="ResetIntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetIntegrationRuntimeName"></a>

```csharp
private void ResetIntegrationRuntimeName()
```

##### `ResetKeyVaultSasToken` <a name="ResetKeyVaultSasToken" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetKeyVaultSasToken"></a>

```csharp
private void ResetKeyVaultSasToken()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetSasUri` <a name="ResetSasUri" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetSasUri"></a>

```csharp
private void ResetSasUri()
```

##### `ResetServiceEndpoint` <a name="ResetServiceEndpoint" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServiceEndpoint"></a>

```csharp
private void ResetServiceEndpoint()
```

##### `ResetServicePrincipalId` <a name="ResetServicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServicePrincipalId"></a>

```csharp
private void ResetServicePrincipalId()
```

##### `ResetServicePrincipalKey` <a name="ResetServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServicePrincipalKey"></a>

```csharp
private void ResetServicePrincipalKey()
```

##### `ResetServicePrincipalLinkedKeyVaultKey` <a name="ResetServicePrincipalLinkedKeyVaultKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServicePrincipalLinkedKeyVaultKey"></a>

```csharp
private void ResetServicePrincipalLinkedKeyVaultKey()
```

##### `ResetStorageKind` <a name="ResetStorageKind" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetStorageKind"></a>

```csharp
private void ResetStorageKind()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUseManagedIdentity` <a name="ResetUseManagedIdentity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetUseManagedIdentity"></a>

```csharp
private void ResetUseManagedIdentity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryLinkedServiceAzureBlobStorage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryLinkedServiceAzureBlobStorage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryLinkedServiceAzureBlobStorage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryLinkedServiceAzureBlobStorage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryLinkedServiceAzureBlobStorage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataFactoryLinkedServiceAzureBlobStorage resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryLinkedServiceAzureBlobStorage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryLinkedServiceAzureBlobStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceAzureBlobStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.keyVaultSasToken">KeyVaultSasToken</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalLinkedKeyVaultKey">ServicePrincipalLinkedKeyVaultKey</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference">DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.annotationsInput">AnnotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionStringInput">ConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionStringInsecureInput">ConnectionStringInsecureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.integrationRuntimeNameInput">IntegrationRuntimeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.keyVaultSasTokenInput">KeyVaultSasTokenInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.sasUriInput">SasUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.serviceEndpointInput">ServiceEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalKeyInput">ServicePrincipalKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalLinkedKeyVaultKeyInput">ServicePrincipalLinkedKeyVaultKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.storageKindInput">StorageKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.useManagedIdentityInput">UseManagedIdentityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.additionalProperties">AdditionalProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.annotations">Annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionString">ConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionStringInsecure">ConnectionStringInsecure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.sasUri">SasUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.serviceEndpoint">ServiceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalKey">ServicePrincipalKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.storageKind">StorageKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.useManagedIdentity">UseManagedIdentity</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `KeyVaultSasToken`<sup>Required</sup> <a name="KeyVaultSasToken" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.keyVaultSasToken"></a>

```csharp
public DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference KeyVaultSasToken { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference</a>

---

##### `ServicePrincipalLinkedKeyVaultKey`<sup>Required</sup> <a name="ServicePrincipalLinkedKeyVaultKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalLinkedKeyVaultKey"></a>

```csharp
public DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference ServicePrincipalLinkedKeyVaultKey { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.timeouts"></a>

```csharp
public DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference">DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference</a>

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.additionalPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.annotationsInput"></a>

```csharp
public string[] AnnotationsInput { get; }
```

- *Type:* string[]

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionStringInput"></a>

```csharp
public string ConnectionStringInput { get; }
```

- *Type:* string

---

##### `ConnectionStringInsecureInput`<sup>Optional</sup> <a name="ConnectionStringInsecureInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionStringInsecureInput"></a>

```csharp
public string ConnectionStringInsecureInput { get; }
```

- *Type:* string

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.dataFactoryIdInput"></a>

```csharp
public string DataFactoryIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntegrationRuntimeNameInput`<sup>Optional</sup> <a name="IntegrationRuntimeNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.integrationRuntimeNameInput"></a>

```csharp
public string IntegrationRuntimeNameInput { get; }
```

- *Type:* string

---

##### `KeyVaultSasTokenInput`<sup>Optional</sup> <a name="KeyVaultSasTokenInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.keyVaultSasTokenInput"></a>

```csharp
public DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken KeyVaultSasTokenInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SasUriInput`<sup>Optional</sup> <a name="SasUriInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.sasUriInput"></a>

```csharp
public string SasUriInput { get; }
```

- *Type:* string

---

##### `ServiceEndpointInput`<sup>Optional</sup> <a name="ServiceEndpointInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.serviceEndpointInput"></a>

```csharp
public string ServiceEndpointInput { get; }
```

- *Type:* string

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalIdInput"></a>

```csharp
public string ServicePrincipalIdInput { get; }
```

- *Type:* string

---

##### `ServicePrincipalKeyInput`<sup>Optional</sup> <a name="ServicePrincipalKeyInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalKeyInput"></a>

```csharp
public string ServicePrincipalKeyInput { get; }
```

- *Type:* string

---

##### `ServicePrincipalLinkedKeyVaultKeyInput`<sup>Optional</sup> <a name="ServicePrincipalLinkedKeyVaultKeyInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalLinkedKeyVaultKeyInput"></a>

```csharp
public DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey ServicePrincipalLinkedKeyVaultKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey</a>

---

##### `StorageKindInput`<sup>Optional</sup> <a name="StorageKindInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.storageKindInput"></a>

```csharp
public string StorageKindInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UseManagedIdentityInput`<sup>Optional</sup> <a name="UseManagedIdentityInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.useManagedIdentityInput"></a>

```csharp
public object UseManagedIdentityInput { get; }
```

- *Type:* object

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.additionalProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.annotations"></a>

```csharp
public string[] Annotations { get; }
```

- *Type:* string[]

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionString"></a>

```csharp
public string ConnectionString { get; }
```

- *Type:* string

---

##### `ConnectionStringInsecure`<sup>Required</sup> <a name="ConnectionStringInsecure" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionStringInsecure"></a>

```csharp
public string ConnectionStringInsecure { get; }
```

- *Type:* string

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntegrationRuntimeName`<sup>Required</sup> <a name="IntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.integrationRuntimeName"></a>

```csharp
public string IntegrationRuntimeName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SasUri`<sup>Required</sup> <a name="SasUri" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.sasUri"></a>

```csharp
public string SasUri { get; }
```

- *Type:* string

---

##### `ServiceEndpoint`<sup>Required</sup> <a name="ServiceEndpoint" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.serviceEndpoint"></a>

```csharp
public string ServiceEndpoint { get; }
```

- *Type:* string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalId"></a>

```csharp
public string ServicePrincipalId { get; }
```

- *Type:* string

---

##### `ServicePrincipalKey`<sup>Required</sup> <a name="ServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalKey"></a>

```csharp
public string ServicePrincipalKey { get; }
```

- *Type:* string

---

##### `StorageKind`<sup>Required</sup> <a name="StorageKind" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.storageKind"></a>

```csharp
public string StorageKind { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `UseManagedIdentity`<sup>Required</sup> <a name="UseManagedIdentity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.useManagedIdentity"></a>

```csharp
public object UseManagedIdentity { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceAzureBlobStorageConfig <a name="DataFactoryLinkedServiceAzureBlobStorageConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureBlobStorageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataFactoryId,
    string Name,
    System.Collections.Generic.IDictionary<string, string> AdditionalProperties = null,
    string[] Annotations = null,
    string ConnectionString = null,
    string ConnectionStringInsecure = null,
    string Description = null,
    string Id = null,
    string IntegrationRuntimeName = null,
    DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken KeyVaultSasToken = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string SasUri = null,
    string ServiceEndpoint = null,
    string ServicePrincipalId = null,
    string ServicePrincipalKey = null,
    DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey ServicePrincipalLinkedKeyVaultKey = null,
    string StorageKind = null,
    string TenantId = null,
    DataFactoryLinkedServiceAzureBlobStorageTimeouts Timeouts = null,
    object UseManagedIdentity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#data_factory_id DataFactoryLinkedServiceAzureBlobStorage#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#name DataFactoryLinkedServiceAzureBlobStorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.additionalProperties">AdditionalProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#additional_properties DataFactoryLinkedServiceAzureBlobStorage#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.annotations">Annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#annotations DataFactoryLinkedServiceAzureBlobStorage#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.connectionString">ConnectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#connection_string DataFactoryLinkedServiceAzureBlobStorage#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.connectionStringInsecure">ConnectionStringInsecure</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#connection_string_insecure DataFactoryLinkedServiceAzureBlobStorage#connection_string_insecure}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#description DataFactoryLinkedServiceAzureBlobStorage#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#id DataFactoryLinkedServiceAzureBlobStorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#integration_runtime_name DataFactoryLinkedServiceAzureBlobStorage#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.keyVaultSasToken">KeyVaultSasToken</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken</a></code> | key_vault_sas_token block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#parameters DataFactoryLinkedServiceAzureBlobStorage#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.sasUri">SasUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#sas_uri DataFactoryLinkedServiceAzureBlobStorage#sas_uri}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.serviceEndpoint">ServiceEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_endpoint DataFactoryLinkedServiceAzureBlobStorage#service_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_principal_id DataFactoryLinkedServiceAzureBlobStorage#service_principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.servicePrincipalKey">ServicePrincipalKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_principal_key DataFactoryLinkedServiceAzureBlobStorage#service_principal_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.servicePrincipalLinkedKeyVaultKey">ServicePrincipalLinkedKeyVaultKey</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey</a></code> | service_principal_linked_key_vault_key block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.storageKind">StorageKind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#storage_kind DataFactoryLinkedServiceAzureBlobStorage#storage_kind}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#tenant_id DataFactoryLinkedServiceAzureBlobStorage#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts">DataFactoryLinkedServiceAzureBlobStorageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.useManagedIdentity">UseManagedIdentity</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#use_managed_identity DataFactoryLinkedServiceAzureBlobStorage#use_managed_identity}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#data_factory_id DataFactoryLinkedServiceAzureBlobStorage#data_factory_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#name DataFactoryLinkedServiceAzureBlobStorage#name}.

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.additionalProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#additional_properties DataFactoryLinkedServiceAzureBlobStorage#additional_properties}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.annotations"></a>

```csharp
public string[] Annotations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#annotations DataFactoryLinkedServiceAzureBlobStorage#annotations}.

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.connectionString"></a>

```csharp
public string ConnectionString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#connection_string DataFactoryLinkedServiceAzureBlobStorage#connection_string}.

---

##### `ConnectionStringInsecure`<sup>Optional</sup> <a name="ConnectionStringInsecure" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.connectionStringInsecure"></a>

```csharp
public string ConnectionStringInsecure { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#connection_string_insecure DataFactoryLinkedServiceAzureBlobStorage#connection_string_insecure}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#description DataFactoryLinkedServiceAzureBlobStorage#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#id DataFactoryLinkedServiceAzureBlobStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegrationRuntimeName`<sup>Optional</sup> <a name="IntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.integrationRuntimeName"></a>

```csharp
public string IntegrationRuntimeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#integration_runtime_name DataFactoryLinkedServiceAzureBlobStorage#integration_runtime_name}.

---

##### `KeyVaultSasToken`<sup>Optional</sup> <a name="KeyVaultSasToken" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.keyVaultSasToken"></a>

```csharp
public DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken KeyVaultSasToken { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken</a>

key_vault_sas_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#key_vault_sas_token DataFactoryLinkedServiceAzureBlobStorage#key_vault_sas_token}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#parameters DataFactoryLinkedServiceAzureBlobStorage#parameters}.

---

##### `SasUri`<sup>Optional</sup> <a name="SasUri" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.sasUri"></a>

```csharp
public string SasUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#sas_uri DataFactoryLinkedServiceAzureBlobStorage#sas_uri}.

---

##### `ServiceEndpoint`<sup>Optional</sup> <a name="ServiceEndpoint" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.serviceEndpoint"></a>

```csharp
public string ServiceEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_endpoint DataFactoryLinkedServiceAzureBlobStorage#service_endpoint}.

---

##### `ServicePrincipalId`<sup>Optional</sup> <a name="ServicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.servicePrincipalId"></a>

```csharp
public string ServicePrincipalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_principal_id DataFactoryLinkedServiceAzureBlobStorage#service_principal_id}.

---

##### `ServicePrincipalKey`<sup>Optional</sup> <a name="ServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.servicePrincipalKey"></a>

```csharp
public string ServicePrincipalKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_principal_key DataFactoryLinkedServiceAzureBlobStorage#service_principal_key}.

---

##### `ServicePrincipalLinkedKeyVaultKey`<sup>Optional</sup> <a name="ServicePrincipalLinkedKeyVaultKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.servicePrincipalLinkedKeyVaultKey"></a>

```csharp
public DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey ServicePrincipalLinkedKeyVaultKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey</a>

service_principal_linked_key_vault_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_principal_linked_key_vault_key DataFactoryLinkedServiceAzureBlobStorage#service_principal_linked_key_vault_key}

---

##### `StorageKind`<sup>Optional</sup> <a name="StorageKind" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.storageKind"></a>

```csharp
public string StorageKind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#storage_kind DataFactoryLinkedServiceAzureBlobStorage#storage_kind}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#tenant_id DataFactoryLinkedServiceAzureBlobStorage#tenant_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.timeouts"></a>

```csharp
public DataFactoryLinkedServiceAzureBlobStorageTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts">DataFactoryLinkedServiceAzureBlobStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#timeouts DataFactoryLinkedServiceAzureBlobStorage#timeouts}

---

##### `UseManagedIdentity`<sup>Optional</sup> <a name="UseManagedIdentity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.useManagedIdentity"></a>

```csharp
public object UseManagedIdentity { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#use_managed_identity DataFactoryLinkedServiceAzureBlobStorage#use_managed_identity}.

---

### DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken <a name="DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken {
    string LinkedServiceName,
    string SecretName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken.property.linkedServiceName">LinkedServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#linked_service_name DataFactoryLinkedServiceAzureBlobStorage#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken.property.secretName">SecretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#secret_name DataFactoryLinkedServiceAzureBlobStorage#secret_name}. |

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken.property.linkedServiceName"></a>

```csharp
public string LinkedServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#linked_service_name DataFactoryLinkedServiceAzureBlobStorage#linked_service_name}.

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#secret_name DataFactoryLinkedServiceAzureBlobStorage#secret_name}.

---

### DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey <a name="DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey {
    string LinkedServiceName,
    string SecretName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey.property.linkedServiceName">LinkedServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#linked_service_name DataFactoryLinkedServiceAzureBlobStorage#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey.property.secretName">SecretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#secret_name DataFactoryLinkedServiceAzureBlobStorage#secret_name}. |

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey.property.linkedServiceName"></a>

```csharp
public string LinkedServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#linked_service_name DataFactoryLinkedServiceAzureBlobStorage#linked_service_name}.

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#secret_name DataFactoryLinkedServiceAzureBlobStorage#secret_name}.

---

### DataFactoryLinkedServiceAzureBlobStorageTimeouts <a name="DataFactoryLinkedServiceAzureBlobStorageTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureBlobStorageTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#create DataFactoryLinkedServiceAzureBlobStorage#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#delete DataFactoryLinkedServiceAzureBlobStorage#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#read DataFactoryLinkedServiceAzureBlobStorage#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#update DataFactoryLinkedServiceAzureBlobStorage#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#create DataFactoryLinkedServiceAzureBlobStorage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#delete DataFactoryLinkedServiceAzureBlobStorage#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#read DataFactoryLinkedServiceAzureBlobStorage#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/data_factory_linked_service_azure_blob_storage#update DataFactoryLinkedServiceAzureBlobStorage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference <a name="DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.linkedServiceNameInput">LinkedServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.linkedServiceName">LinkedServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LinkedServiceNameInput`<sup>Optional</sup> <a name="LinkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.linkedServiceNameInput"></a>

```csharp
public string LinkedServiceNameInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.linkedServiceName"></a>

```csharp
public string LinkedServiceName { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.internalValue"></a>

```csharp
public DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken</a>

---


### DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference <a name="DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.linkedServiceNameInput">LinkedServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.linkedServiceName">LinkedServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LinkedServiceNameInput`<sup>Optional</sup> <a name="LinkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.linkedServiceNameInput"></a>

```csharp
public string LinkedServiceNameInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.linkedServiceName"></a>

```csharp
public string LinkedServiceName { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.internalValue"></a>

```csharp
public DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey</a>

---


### DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference <a name="DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



