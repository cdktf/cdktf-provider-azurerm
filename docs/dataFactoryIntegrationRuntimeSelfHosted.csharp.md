# `dataFactoryIntegrationRuntimeSelfHosted` Submodule <a name="`dataFactoryIntegrationRuntimeSelfHosted` Submodule" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryIntegrationRuntimeSelfHosted <a name="DataFactoryIntegrationRuntimeSelfHosted" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/data_factory_integration_runtime_self_hosted azurerm_data_factory_integration_runtime_self_hosted}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryIntegrationRuntimeSelfHosted(Construct Scope, string Id, DataFactoryIntegrationRuntimeSelfHostedConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig">DataFactoryIntegrationRuntimeSelfHostedConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig">DataFactoryIntegrationRuntimeSelfHostedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.putRbacAuthorization">PutRbacAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetRbacAuthorization">ResetRbacAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRbacAuthorization` <a name="PutRbacAuthorization" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.putRbacAuthorization"></a>

```csharp
private void PutRbacAuthorization(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.putRbacAuthorization.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.putTimeouts"></a>

```csharp
private void PutTimeouts(DataFactoryIntegrationRuntimeSelfHostedTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts">DataFactoryIntegrationRuntimeSelfHostedTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRbacAuthorization` <a name="ResetRbacAuthorization" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetRbacAuthorization"></a>

```csharp
private void ResetRbacAuthorization()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryIntegrationRuntimeSelfHosted resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryIntegrationRuntimeSelfHosted.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryIntegrationRuntimeSelfHosted.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryIntegrationRuntimeSelfHosted.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryIntegrationRuntimeSelfHosted.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataFactoryIntegrationRuntimeSelfHosted resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryIntegrationRuntimeSelfHosted to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryIntegrationRuntimeSelfHosted that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/data_factory_integration_runtime_self_hosted#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryIntegrationRuntimeSelfHosted to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.primaryAuthorizationKey">PrimaryAuthorizationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.rbacAuthorization">RbacAuthorization</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.secondaryAuthorizationKey">SecondaryAuthorizationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference">DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.rbacAuthorizationInput">RbacAuthorizationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PrimaryAuthorizationKey`<sup>Required</sup> <a name="PrimaryAuthorizationKey" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.primaryAuthorizationKey"></a>

```csharp
public string PrimaryAuthorizationKey { get; }
```

- *Type:* string

---

##### `RbacAuthorization`<sup>Required</sup> <a name="RbacAuthorization" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.rbacAuthorization"></a>

```csharp
public DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList RbacAuthorization { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList</a>

---

##### `SecondaryAuthorizationKey`<sup>Required</sup> <a name="SecondaryAuthorizationKey" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.secondaryAuthorizationKey"></a>

```csharp
public string SecondaryAuthorizationKey { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.timeouts"></a>

```csharp
public DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference">DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference</a>

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.dataFactoryIdInput"></a>

```csharp
public string DataFactoryIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RbacAuthorizationInput`<sup>Optional</sup> <a name="RbacAuthorizationInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.rbacAuthorizationInput"></a>

```csharp
public object RbacAuthorizationInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryIntegrationRuntimeSelfHostedConfig <a name="DataFactoryIntegrationRuntimeSelfHostedConfig" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryIntegrationRuntimeSelfHostedConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataFactoryId,
    string Name,
    string Description = null,
    string Id = null,
    object RbacAuthorization = null,
    DataFactoryIntegrationRuntimeSelfHostedTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/data_factory_integration_runtime_self_hosted#data_factory_id DataFactoryIntegrationRuntimeSelfHosted#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/data_factory_integration_runtime_self_hosted#name DataFactoryIntegrationRuntimeSelfHosted#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/data_factory_integration_runtime_self_hosted#description DataFactoryIntegrationRuntimeSelfHosted#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/data_factory_integration_runtime_self_hosted#id DataFactoryIntegrationRuntimeSelfHosted#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.rbacAuthorization">RbacAuthorization</a></code> | <code>object</code> | rbac_authorization block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts">DataFactoryIntegrationRuntimeSelfHostedTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/data_factory_integration_runtime_self_hosted#data_factory_id DataFactoryIntegrationRuntimeSelfHosted#data_factory_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/data_factory_integration_runtime_self_hosted#name DataFactoryIntegrationRuntimeSelfHosted#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/data_factory_integration_runtime_self_hosted#description DataFactoryIntegrationRuntimeSelfHosted#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/data_factory_integration_runtime_self_hosted#id DataFactoryIntegrationRuntimeSelfHosted#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RbacAuthorization`<sup>Optional</sup> <a name="RbacAuthorization" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.rbacAuthorization"></a>

```csharp
public object RbacAuthorization { get; set; }
```

- *Type:* object

rbac_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/data_factory_integration_runtime_self_hosted#rbac_authorization DataFactoryIntegrationRuntimeSelfHosted#rbac_authorization}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.timeouts"></a>

```csharp
public DataFactoryIntegrationRuntimeSelfHostedTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts">DataFactoryIntegrationRuntimeSelfHostedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/data_factory_integration_runtime_self_hosted#timeouts DataFactoryIntegrationRuntimeSelfHosted#timeouts}

---

### DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization <a name="DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization {
    string ResourceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/data_factory_integration_runtime_self_hosted#resource_id DataFactoryIntegrationRuntimeSelfHosted#resource_id}. |

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/data_factory_integration_runtime_self_hosted#resource_id DataFactoryIntegrationRuntimeSelfHosted#resource_id}.

---

### DataFactoryIntegrationRuntimeSelfHostedTimeouts <a name="DataFactoryIntegrationRuntimeSelfHostedTimeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryIntegrationRuntimeSelfHostedTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/data_factory_integration_runtime_self_hosted#create DataFactoryIntegrationRuntimeSelfHosted#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/data_factory_integration_runtime_self_hosted#delete DataFactoryIntegrationRuntimeSelfHosted#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/data_factory_integration_runtime_self_hosted#read DataFactoryIntegrationRuntimeSelfHosted#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/data_factory_integration_runtime_self_hosted#update DataFactoryIntegrationRuntimeSelfHosted#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/data_factory_integration_runtime_self_hosted#create DataFactoryIntegrationRuntimeSelfHosted#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/data_factory_integration_runtime_self_hosted#delete DataFactoryIntegrationRuntimeSelfHosted#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/data_factory_integration_runtime_self_hosted#read DataFactoryIntegrationRuntimeSelfHosted#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/data_factory_integration_runtime_self_hosted#update DataFactoryIntegrationRuntimeSelfHosted#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList <a name="DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.get"></a>

```csharp
private DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference <a name="DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference <a name="DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



