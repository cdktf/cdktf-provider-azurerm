# `dataFactoryLinkedServiceSnowflake` Submodule <a name="`dataFactoryLinkedServiceSnowflake` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceSnowflake <a name="DataFactoryLinkedServiceSnowflake" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake azurerm_data_factory_linked_service_snowflake}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceSnowflake(Construct Scope, string Id, DataFactoryLinkedServiceSnowflakeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig">DataFactoryLinkedServiceSnowflakeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig">DataFactoryLinkedServiceSnowflakeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.putKeyVaultPassword">PutKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetIntegrationRuntimeName">ResetIntegrationRuntimeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetKeyVaultPassword">ResetKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKeyVaultPassword` <a name="PutKeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.putKeyVaultPassword"></a>

```csharp
private void PutKeyVaultPassword(DataFactoryLinkedServiceSnowflakeKeyVaultPassword Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.putKeyVaultPassword.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword">DataFactoryLinkedServiceSnowflakeKeyVaultPassword</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.putTimeouts"></a>

```csharp
private void PutTimeouts(DataFactoryLinkedServiceSnowflakeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts">DataFactoryLinkedServiceSnowflakeTimeouts</a>

---

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetAdditionalProperties"></a>

```csharp
private void ResetAdditionalProperties()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIntegrationRuntimeName` <a name="ResetIntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetIntegrationRuntimeName"></a>

```csharp
private void ResetIntegrationRuntimeName()
```

##### `ResetKeyVaultPassword` <a name="ResetKeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetKeyVaultPassword"></a>

```csharp
private void ResetKeyVaultPassword()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryLinkedServiceSnowflake resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryLinkedServiceSnowflake.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryLinkedServiceSnowflake.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryLinkedServiceSnowflake.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryLinkedServiceSnowflake.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataFactoryLinkedServiceSnowflake resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryLinkedServiceSnowflake to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryLinkedServiceSnowflake that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceSnowflake to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.keyVaultPassword">KeyVaultPassword</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference">DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference">DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.annotationsInput">AnnotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.connectionStringInput">ConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.integrationRuntimeNameInput">IntegrationRuntimeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.keyVaultPasswordInput">KeyVaultPasswordInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword">DataFactoryLinkedServiceSnowflakeKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts">DataFactoryLinkedServiceSnowflakeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.additionalProperties">AdditionalProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.annotations">Annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.connectionString">ConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `KeyVaultPassword`<sup>Required</sup> <a name="KeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.keyVaultPassword"></a>

```csharp
public DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference KeyVaultPassword { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference">DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.timeouts"></a>

```csharp
public DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference">DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference</a>

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.additionalPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.annotationsInput"></a>

```csharp
public string[] AnnotationsInput { get; }
```

- *Type:* string[]

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.connectionStringInput"></a>

```csharp
public string ConnectionStringInput { get; }
```

- *Type:* string

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.dataFactoryIdInput"></a>

```csharp
public string DataFactoryIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntegrationRuntimeNameInput`<sup>Optional</sup> <a name="IntegrationRuntimeNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.integrationRuntimeNameInput"></a>

```csharp
public string IntegrationRuntimeNameInput { get; }
```

- *Type:* string

---

##### `KeyVaultPasswordInput`<sup>Optional</sup> <a name="KeyVaultPasswordInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.keyVaultPasswordInput"></a>

```csharp
public DataFactoryLinkedServiceSnowflakeKeyVaultPassword KeyVaultPasswordInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword">DataFactoryLinkedServiceSnowflakeKeyVaultPassword</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.timeoutsInput"></a>

```csharp
public IResolvable|DataFactoryLinkedServiceSnowflakeTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts">DataFactoryLinkedServiceSnowflakeTimeouts</a>

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.additionalProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.annotations"></a>

```csharp
public string[] Annotations { get; }
```

- *Type:* string[]

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.connectionString"></a>

```csharp
public string ConnectionString { get; }
```

- *Type:* string

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntegrationRuntimeName`<sup>Required</sup> <a name="IntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.integrationRuntimeName"></a>

```csharp
public string IntegrationRuntimeName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceSnowflakeConfig <a name="DataFactoryLinkedServiceSnowflakeConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceSnowflakeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ConnectionString,
    string DataFactoryId,
    string Name,
    System.Collections.Generic.IDictionary<string, string> AdditionalProperties = null,
    string[] Annotations = null,
    string Description = null,
    string Id = null,
    string IntegrationRuntimeName = null,
    DataFactoryLinkedServiceSnowflakeKeyVaultPassword KeyVaultPassword = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    DataFactoryLinkedServiceSnowflakeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.connectionString">ConnectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#connection_string DataFactoryLinkedServiceSnowflake#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#data_factory_id DataFactoryLinkedServiceSnowflake#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#name DataFactoryLinkedServiceSnowflake#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.additionalProperties">AdditionalProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#additional_properties DataFactoryLinkedServiceSnowflake#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.annotations">Annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#annotations DataFactoryLinkedServiceSnowflake#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#description DataFactoryLinkedServiceSnowflake#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#id DataFactoryLinkedServiceSnowflake#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#integration_runtime_name DataFactoryLinkedServiceSnowflake#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.keyVaultPassword">KeyVaultPassword</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword">DataFactoryLinkedServiceSnowflakeKeyVaultPassword</a></code> | key_vault_password block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#parameters DataFactoryLinkedServiceSnowflake#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts">DataFactoryLinkedServiceSnowflakeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.connectionString"></a>

```csharp
public string ConnectionString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#connection_string DataFactoryLinkedServiceSnowflake#connection_string}.

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#data_factory_id DataFactoryLinkedServiceSnowflake#data_factory_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#name DataFactoryLinkedServiceSnowflake#name}.

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.additionalProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#additional_properties DataFactoryLinkedServiceSnowflake#additional_properties}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.annotations"></a>

```csharp
public string[] Annotations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#annotations DataFactoryLinkedServiceSnowflake#annotations}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#description DataFactoryLinkedServiceSnowflake#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#id DataFactoryLinkedServiceSnowflake#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegrationRuntimeName`<sup>Optional</sup> <a name="IntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.integrationRuntimeName"></a>

```csharp
public string IntegrationRuntimeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#integration_runtime_name DataFactoryLinkedServiceSnowflake#integration_runtime_name}.

---

##### `KeyVaultPassword`<sup>Optional</sup> <a name="KeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.keyVaultPassword"></a>

```csharp
public DataFactoryLinkedServiceSnowflakeKeyVaultPassword KeyVaultPassword { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword">DataFactoryLinkedServiceSnowflakeKeyVaultPassword</a>

key_vault_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#key_vault_password DataFactoryLinkedServiceSnowflake#key_vault_password}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#parameters DataFactoryLinkedServiceSnowflake#parameters}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.timeouts"></a>

```csharp
public DataFactoryLinkedServiceSnowflakeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts">DataFactoryLinkedServiceSnowflakeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#timeouts DataFactoryLinkedServiceSnowflake#timeouts}

---

### DataFactoryLinkedServiceSnowflakeKeyVaultPassword <a name="DataFactoryLinkedServiceSnowflakeKeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceSnowflakeKeyVaultPassword {
    string LinkedServiceName,
    string SecretName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword.property.linkedServiceName">LinkedServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#linked_service_name DataFactoryLinkedServiceSnowflake#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword.property.secretName">SecretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#secret_name DataFactoryLinkedServiceSnowflake#secret_name}. |

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword.property.linkedServiceName"></a>

```csharp
public string LinkedServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#linked_service_name DataFactoryLinkedServiceSnowflake#linked_service_name}.

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#secret_name DataFactoryLinkedServiceSnowflake#secret_name}.

---

### DataFactoryLinkedServiceSnowflakeTimeouts <a name="DataFactoryLinkedServiceSnowflakeTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceSnowflakeTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#create DataFactoryLinkedServiceSnowflake#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#delete DataFactoryLinkedServiceSnowflake#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#read DataFactoryLinkedServiceSnowflake#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#update DataFactoryLinkedServiceSnowflake#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#create DataFactoryLinkedServiceSnowflake#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#delete DataFactoryLinkedServiceSnowflake#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#read DataFactoryLinkedServiceSnowflake#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_linked_service_snowflake#update DataFactoryLinkedServiceSnowflake#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference <a name="DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.linkedServiceNameInput">LinkedServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.linkedServiceName">LinkedServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword">DataFactoryLinkedServiceSnowflakeKeyVaultPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LinkedServiceNameInput`<sup>Optional</sup> <a name="LinkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.linkedServiceNameInput"></a>

```csharp
public string LinkedServiceNameInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.linkedServiceName"></a>

```csharp
public string LinkedServiceName { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.internalValue"></a>

```csharp
public DataFactoryLinkedServiceSnowflakeKeyVaultPassword InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword">DataFactoryLinkedServiceSnowflakeKeyVaultPassword</a>

---


### DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference <a name="DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts">DataFactoryLinkedServiceSnowflakeTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataFactoryLinkedServiceSnowflakeTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts">DataFactoryLinkedServiceSnowflakeTimeouts</a>

---



