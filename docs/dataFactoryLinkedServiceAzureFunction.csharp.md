# `dataFactoryLinkedServiceAzureFunction` Submodule <a name="`dataFactoryLinkedServiceAzureFunction` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceAzureFunction <a name="DataFactoryLinkedServiceAzureFunction" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function azurerm_data_factory_linked_service_azure_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureFunction(Construct Scope, string Id, DataFactoryLinkedServiceAzureFunctionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig">DataFactoryLinkedServiceAzureFunctionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig">DataFactoryLinkedServiceAzureFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.putKeyVaultKey">PutKeyVaultKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetIntegrationRuntimeName">ResetIntegrationRuntimeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetKeyVaultKey">ResetKeyVaultKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKeyVaultKey` <a name="PutKeyVaultKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.putKeyVaultKey"></a>

```csharp
private void PutKeyVaultKey(DataFactoryLinkedServiceAzureFunctionKeyVaultKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.putKeyVaultKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey">DataFactoryLinkedServiceAzureFunctionKeyVaultKey</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.putTimeouts"></a>

```csharp
private void PutTimeouts(DataFactoryLinkedServiceAzureFunctionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts">DataFactoryLinkedServiceAzureFunctionTimeouts</a>

---

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetAdditionalProperties"></a>

```csharp
private void ResetAdditionalProperties()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIntegrationRuntimeName` <a name="ResetIntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetIntegrationRuntimeName"></a>

```csharp
private void ResetIntegrationRuntimeName()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetKeyVaultKey` <a name="ResetKeyVaultKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetKeyVaultKey"></a>

```csharp
private void ResetKeyVaultKey()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryLinkedServiceAzureFunction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryLinkedServiceAzureFunction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryLinkedServiceAzureFunction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryLinkedServiceAzureFunction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryLinkedServiceAzureFunction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataFactoryLinkedServiceAzureFunction resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryLinkedServiceAzureFunction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryLinkedServiceAzureFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceAzureFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.keyVaultKey">KeyVaultKey</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference">DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference">DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.annotationsInput">AnnotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.integrationRuntimeNameInput">IntegrationRuntimeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.keyVaultKeyInput">KeyVaultKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey">DataFactoryLinkedServiceAzureFunctionKeyVaultKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.additionalProperties">AdditionalProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.annotations">Annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.url">Url</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `KeyVaultKey`<sup>Required</sup> <a name="KeyVaultKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.keyVaultKey"></a>

```csharp
public DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference KeyVaultKey { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference">DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.timeouts"></a>

```csharp
public DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference">DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference</a>

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.additionalPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.annotationsInput"></a>

```csharp
public string[] AnnotationsInput { get; }
```

- *Type:* string[]

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.dataFactoryIdInput"></a>

```csharp
public string DataFactoryIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntegrationRuntimeNameInput`<sup>Optional</sup> <a name="IntegrationRuntimeNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.integrationRuntimeNameInput"></a>

```csharp
public string IntegrationRuntimeNameInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `KeyVaultKeyInput`<sup>Optional</sup> <a name="KeyVaultKeyInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.keyVaultKeyInput"></a>

```csharp
public DataFactoryLinkedServiceAzureFunctionKeyVaultKey KeyVaultKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey">DataFactoryLinkedServiceAzureFunctionKeyVaultKey</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.additionalProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.annotations"></a>

```csharp
public string[] Annotations { get; }
```

- *Type:* string[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntegrationRuntimeName`<sup>Required</sup> <a name="IntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.integrationRuntimeName"></a>

```csharp
public string IntegrationRuntimeName { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceAzureFunctionConfig <a name="DataFactoryLinkedServiceAzureFunctionConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureFunctionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataFactoryId,
    string Name,
    string Url,
    System.Collections.Generic.IDictionary<string, string> AdditionalProperties = null,
    string[] Annotations = null,
    string Description = null,
    string Id = null,
    string IntegrationRuntimeName = null,
    string Key = null,
    DataFactoryLinkedServiceAzureFunctionKeyVaultKey KeyVaultKey = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    DataFactoryLinkedServiceAzureFunctionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#data_factory_id DataFactoryLinkedServiceAzureFunction#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#name DataFactoryLinkedServiceAzureFunction#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#url DataFactoryLinkedServiceAzureFunction#url}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.additionalProperties">AdditionalProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#additional_properties DataFactoryLinkedServiceAzureFunction#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.annotations">Annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#annotations DataFactoryLinkedServiceAzureFunction#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#description DataFactoryLinkedServiceAzureFunction#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#id DataFactoryLinkedServiceAzureFunction#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#integration_runtime_name DataFactoryLinkedServiceAzureFunction#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#key DataFactoryLinkedServiceAzureFunction#key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.keyVaultKey">KeyVaultKey</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey">DataFactoryLinkedServiceAzureFunctionKeyVaultKey</a></code> | key_vault_key block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#parameters DataFactoryLinkedServiceAzureFunction#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts">DataFactoryLinkedServiceAzureFunctionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#data_factory_id DataFactoryLinkedServiceAzureFunction#data_factory_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#name DataFactoryLinkedServiceAzureFunction#name}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#url DataFactoryLinkedServiceAzureFunction#url}.

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.additionalProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#additional_properties DataFactoryLinkedServiceAzureFunction#additional_properties}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.annotations"></a>

```csharp
public string[] Annotations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#annotations DataFactoryLinkedServiceAzureFunction#annotations}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#description DataFactoryLinkedServiceAzureFunction#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#id DataFactoryLinkedServiceAzureFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegrationRuntimeName`<sup>Optional</sup> <a name="IntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.integrationRuntimeName"></a>

```csharp
public string IntegrationRuntimeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#integration_runtime_name DataFactoryLinkedServiceAzureFunction#integration_runtime_name}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#key DataFactoryLinkedServiceAzureFunction#key}.

---

##### `KeyVaultKey`<sup>Optional</sup> <a name="KeyVaultKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.keyVaultKey"></a>

```csharp
public DataFactoryLinkedServiceAzureFunctionKeyVaultKey KeyVaultKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey">DataFactoryLinkedServiceAzureFunctionKeyVaultKey</a>

key_vault_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#key_vault_key DataFactoryLinkedServiceAzureFunction#key_vault_key}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#parameters DataFactoryLinkedServiceAzureFunction#parameters}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.timeouts"></a>

```csharp
public DataFactoryLinkedServiceAzureFunctionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts">DataFactoryLinkedServiceAzureFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#timeouts DataFactoryLinkedServiceAzureFunction#timeouts}

---

### DataFactoryLinkedServiceAzureFunctionKeyVaultKey <a name="DataFactoryLinkedServiceAzureFunctionKeyVaultKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureFunctionKeyVaultKey {
    string LinkedServiceName,
    string SecretName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey.property.linkedServiceName">LinkedServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#linked_service_name DataFactoryLinkedServiceAzureFunction#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey.property.secretName">SecretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#secret_name DataFactoryLinkedServiceAzureFunction#secret_name}. |

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey.property.linkedServiceName"></a>

```csharp
public string LinkedServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#linked_service_name DataFactoryLinkedServiceAzureFunction#linked_service_name}.

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#secret_name DataFactoryLinkedServiceAzureFunction#secret_name}.

---

### DataFactoryLinkedServiceAzureFunctionTimeouts <a name="DataFactoryLinkedServiceAzureFunctionTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureFunctionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#create DataFactoryLinkedServiceAzureFunction#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#delete DataFactoryLinkedServiceAzureFunction#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#read DataFactoryLinkedServiceAzureFunction#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#update DataFactoryLinkedServiceAzureFunction#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#create DataFactoryLinkedServiceAzureFunction#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#delete DataFactoryLinkedServiceAzureFunction#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#read DataFactoryLinkedServiceAzureFunction#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_linked_service_azure_function#update DataFactoryLinkedServiceAzureFunction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference <a name="DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.linkedServiceNameInput">LinkedServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.linkedServiceName">LinkedServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey">DataFactoryLinkedServiceAzureFunctionKeyVaultKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LinkedServiceNameInput`<sup>Optional</sup> <a name="LinkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.linkedServiceNameInput"></a>

```csharp
public string LinkedServiceNameInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.linkedServiceName"></a>

```csharp
public string LinkedServiceName { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.internalValue"></a>

```csharp
public DataFactoryLinkedServiceAzureFunctionKeyVaultKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey">DataFactoryLinkedServiceAzureFunctionKeyVaultKey</a>

---


### DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference <a name="DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



