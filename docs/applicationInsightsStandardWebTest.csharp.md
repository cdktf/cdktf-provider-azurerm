# `applicationInsightsStandardWebTest` Submodule <a name="`applicationInsightsStandardWebTest` Submodule" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationInsightsStandardWebTest <a name="ApplicationInsightsStandardWebTest" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test azurerm_application_insights_standard_web_test}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsStandardWebTest(Construct Scope, string Id, ApplicationInsightsStandardWebTestConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig">ApplicationInsightsStandardWebTestConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig">ApplicationInsightsStandardWebTestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putRequest">PutRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putValidationRules">PutValidationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetRetryEnabled">ResetRetryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetValidationRules">ResetValidationRules</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRequest` <a name="PutRequest" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putRequest"></a>

```csharp
private void PutRequest(ApplicationInsightsStandardWebTestRequest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest">ApplicationInsightsStandardWebTestRequest</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putTimeouts"></a>

```csharp
private void PutTimeouts(ApplicationInsightsStandardWebTestTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts">ApplicationInsightsStandardWebTestTimeouts</a>

---

##### `PutValidationRules` <a name="PutValidationRules" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putValidationRules"></a>

```csharp
private void PutValidationRules(ApplicationInsightsStandardWebTestValidationRules Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putValidationRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules">ApplicationInsightsStandardWebTestValidationRules</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetFrequency"></a>

```csharp
private void ResetFrequency()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRetryEnabled` <a name="ResetRetryEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetRetryEnabled"></a>

```csharp
private void ResetRetryEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetValidationRules` <a name="ResetValidationRules" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetValidationRules"></a>

```csharp
private void ResetValidationRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationInsightsStandardWebTest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApplicationInsightsStandardWebTest.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApplicationInsightsStandardWebTest.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApplicationInsightsStandardWebTest.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApplicationInsightsStandardWebTest.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApplicationInsightsStandardWebTest resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationInsightsStandardWebTest to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationInsightsStandardWebTest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationInsightsStandardWebTest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.request">Request</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference">ApplicationInsightsStandardWebTestRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.syntheticMonitorId">SyntheticMonitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference">ApplicationInsightsStandardWebTestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.validationRules">ValidationRules</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference">ApplicationInsightsStandardWebTestValidationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.applicationInsightsIdInput">ApplicationInsightsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.frequencyInput">FrequencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.geoLocationsInput">GeoLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.requestInput">RequestInput</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest">ApplicationInsightsStandardWebTestRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.retryEnabledInput">RetryEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.validationRulesInput">ValidationRulesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules">ApplicationInsightsStandardWebTestValidationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.applicationInsightsId">ApplicationInsightsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.frequency">Frequency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.geoLocations">GeoLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.retryEnabled">RetryEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.request"></a>

```csharp
public ApplicationInsightsStandardWebTestRequestOutputReference Request { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference">ApplicationInsightsStandardWebTestRequestOutputReference</a>

---

##### `SyntheticMonitorId`<sup>Required</sup> <a name="SyntheticMonitorId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.syntheticMonitorId"></a>

```csharp
public string SyntheticMonitorId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeouts"></a>

```csharp
public ApplicationInsightsStandardWebTestTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference">ApplicationInsightsStandardWebTestTimeoutsOutputReference</a>

---

##### `ValidationRules`<sup>Required</sup> <a name="ValidationRules" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.validationRules"></a>

```csharp
public ApplicationInsightsStandardWebTestValidationRulesOutputReference ValidationRules { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference">ApplicationInsightsStandardWebTestValidationRulesOutputReference</a>

---

##### `ApplicationInsightsIdInput`<sup>Optional</sup> <a name="ApplicationInsightsIdInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.applicationInsightsIdInput"></a>

```csharp
public string ApplicationInsightsIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.frequencyInput"></a>

```csharp
public double FrequencyInput { get; }
```

- *Type:* double

---

##### `GeoLocationsInput`<sup>Optional</sup> <a name="GeoLocationsInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.geoLocationsInput"></a>

```csharp
public string[] GeoLocationsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RequestInput`<sup>Optional</sup> <a name="RequestInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.requestInput"></a>

```csharp
public ApplicationInsightsStandardWebTestRequest RequestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest">ApplicationInsightsStandardWebTestRequest</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RetryEnabledInput`<sup>Optional</sup> <a name="RetryEnabledInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.retryEnabledInput"></a>

```csharp
public object RetryEnabledInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ValidationRulesInput`<sup>Optional</sup> <a name="ValidationRulesInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.validationRulesInput"></a>

```csharp
public ApplicationInsightsStandardWebTestValidationRules ValidationRulesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules">ApplicationInsightsStandardWebTestValidationRules</a>

---

##### `ApplicationInsightsId`<sup>Required</sup> <a name="ApplicationInsightsId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.applicationInsightsId"></a>

```csharp
public string ApplicationInsightsId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.frequency"></a>

```csharp
public double Frequency { get; }
```

- *Type:* double

---

##### `GeoLocations`<sup>Required</sup> <a name="GeoLocations" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.geoLocations"></a>

```csharp
public string[] GeoLocations { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `RetryEnabled`<sup>Required</sup> <a name="RetryEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.retryEnabled"></a>

```csharp
public object RetryEnabled { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationInsightsStandardWebTestConfig <a name="ApplicationInsightsStandardWebTestConfig" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsStandardWebTestConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApplicationInsightsId,
    string[] GeoLocations,
    string Location,
    string Name,
    ApplicationInsightsStandardWebTestRequest Request,
    string ResourceGroupName,
    string Description = null,
    object Enabled = null,
    double Frequency = null,
    string Id = null,
    object RetryEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    double Timeout = null,
    ApplicationInsightsStandardWebTestTimeouts Timeouts = null,
    ApplicationInsightsStandardWebTestValidationRules ValidationRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.applicationInsightsId">ApplicationInsightsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#application_insights_id ApplicationInsightsStandardWebTest#application_insights_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.geoLocations">GeoLocations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#geo_locations ApplicationInsightsStandardWebTest#geo_locations}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#location ApplicationInsightsStandardWebTest#location}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#name ApplicationInsightsStandardWebTest#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.request">Request</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest">ApplicationInsightsStandardWebTestRequest</a></code> | request block. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#resource_group_name ApplicationInsightsStandardWebTest#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#description ApplicationInsightsStandardWebTest#description}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#enabled ApplicationInsightsStandardWebTest#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.frequency">Frequency</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#frequency ApplicationInsightsStandardWebTest#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#id ApplicationInsightsStandardWebTest#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.retryEnabled">RetryEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#retry_enabled ApplicationInsightsStandardWebTest#retry_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#tags ApplicationInsightsStandardWebTest#tags}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.timeout">Timeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#timeout ApplicationInsightsStandardWebTest#timeout}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts">ApplicationInsightsStandardWebTestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.validationRules">ValidationRules</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules">ApplicationInsightsStandardWebTestValidationRules</a></code> | validation_rules block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationInsightsId`<sup>Required</sup> <a name="ApplicationInsightsId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.applicationInsightsId"></a>

```csharp
public string ApplicationInsightsId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#application_insights_id ApplicationInsightsStandardWebTest#application_insights_id}.

---

##### `GeoLocations`<sup>Required</sup> <a name="GeoLocations" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.geoLocations"></a>

```csharp
public string[] GeoLocations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#geo_locations ApplicationInsightsStandardWebTest#geo_locations}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#location ApplicationInsightsStandardWebTest#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#name ApplicationInsightsStandardWebTest#name}.

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.request"></a>

```csharp
public ApplicationInsightsStandardWebTestRequest Request { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest">ApplicationInsightsStandardWebTestRequest</a>

request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#request ApplicationInsightsStandardWebTest#request}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#resource_group_name ApplicationInsightsStandardWebTest#resource_group_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#description ApplicationInsightsStandardWebTest#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#enabled ApplicationInsightsStandardWebTest#enabled}.

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.frequency"></a>

```csharp
public double Frequency { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#frequency ApplicationInsightsStandardWebTest#frequency}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#id ApplicationInsightsStandardWebTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RetryEnabled`<sup>Optional</sup> <a name="RetryEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.retryEnabled"></a>

```csharp
public object RetryEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#retry_enabled ApplicationInsightsStandardWebTest#retry_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#tags ApplicationInsightsStandardWebTest#tags}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#timeout ApplicationInsightsStandardWebTest#timeout}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.timeouts"></a>

```csharp
public ApplicationInsightsStandardWebTestTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts">ApplicationInsightsStandardWebTestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#timeouts ApplicationInsightsStandardWebTest#timeouts}

---

##### `ValidationRules`<sup>Optional</sup> <a name="ValidationRules" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.validationRules"></a>

```csharp
public ApplicationInsightsStandardWebTestValidationRules ValidationRules { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules">ApplicationInsightsStandardWebTestValidationRules</a>

validation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#validation_rules ApplicationInsightsStandardWebTest#validation_rules}

---

### ApplicationInsightsStandardWebTestRequest <a name="ApplicationInsightsStandardWebTestRequest" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsStandardWebTestRequest {
    string Url,
    string Body = null,
    object FollowRedirectsEnabled = null,
    object Header = null,
    string HttpVerb = null,
    object ParseDependentRequestsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#url ApplicationInsightsStandardWebTest#url}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.body">Body</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#body ApplicationInsightsStandardWebTest#body}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.followRedirectsEnabled">FollowRedirectsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#follow_redirects_enabled ApplicationInsightsStandardWebTest#follow_redirects_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.header">Header</a></code> | <code>object</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.httpVerb">HttpVerb</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#http_verb ApplicationInsightsStandardWebTest#http_verb}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.parseDependentRequestsEnabled">ParseDependentRequestsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#parse_dependent_requests_enabled ApplicationInsightsStandardWebTest#parse_dependent_requests_enabled}. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#url ApplicationInsightsStandardWebTest#url}.

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.body"></a>

```csharp
public string Body { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#body ApplicationInsightsStandardWebTest#body}.

---

##### `FollowRedirectsEnabled`<sup>Optional</sup> <a name="FollowRedirectsEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.followRedirectsEnabled"></a>

```csharp
public object FollowRedirectsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#follow_redirects_enabled ApplicationInsightsStandardWebTest#follow_redirects_enabled}.

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.header"></a>

```csharp
public object Header { get; set; }
```

- *Type:* object

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#header ApplicationInsightsStandardWebTest#header}

---

##### `HttpVerb`<sup>Optional</sup> <a name="HttpVerb" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.httpVerb"></a>

```csharp
public string HttpVerb { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#http_verb ApplicationInsightsStandardWebTest#http_verb}.

---

##### `ParseDependentRequestsEnabled`<sup>Optional</sup> <a name="ParseDependentRequestsEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.parseDependentRequestsEnabled"></a>

```csharp
public object ParseDependentRequestsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#parse_dependent_requests_enabled ApplicationInsightsStandardWebTest#parse_dependent_requests_enabled}.

---

### ApplicationInsightsStandardWebTestRequestHeader <a name="ApplicationInsightsStandardWebTestRequestHeader" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsStandardWebTestRequestHeader {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#name ApplicationInsightsStandardWebTest#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#value ApplicationInsightsStandardWebTest#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#name ApplicationInsightsStandardWebTest#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#value ApplicationInsightsStandardWebTest#value}.

---

### ApplicationInsightsStandardWebTestTimeouts <a name="ApplicationInsightsStandardWebTestTimeouts" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsStandardWebTestTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#create ApplicationInsightsStandardWebTest#create}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#delete ApplicationInsightsStandardWebTest#delete}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#read ApplicationInsightsStandardWebTest#read}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#update ApplicationInsightsStandardWebTest#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#create ApplicationInsightsStandardWebTest#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#delete ApplicationInsightsStandardWebTest#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#read ApplicationInsightsStandardWebTest#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#update ApplicationInsightsStandardWebTest#update}.

---

### ApplicationInsightsStandardWebTestValidationRules <a name="ApplicationInsightsStandardWebTestValidationRules" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsStandardWebTestValidationRules {
    ApplicationInsightsStandardWebTestValidationRulesContent Content = null,
    double ExpectedStatusCode = null,
    double SslCertRemainingLifetime = null,
    object SslCheckEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.content">Content</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent">ApplicationInsightsStandardWebTestValidationRulesContent</a></code> | content block. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.expectedStatusCode">ExpectedStatusCode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#expected_status_code ApplicationInsightsStandardWebTest#expected_status_code}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.sslCertRemainingLifetime">SslCertRemainingLifetime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#ssl_cert_remaining_lifetime ApplicationInsightsStandardWebTest#ssl_cert_remaining_lifetime}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.sslCheckEnabled">SslCheckEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#ssl_check_enabled ApplicationInsightsStandardWebTest#ssl_check_enabled}. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.content"></a>

```csharp
public ApplicationInsightsStandardWebTestValidationRulesContent Content { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent">ApplicationInsightsStandardWebTestValidationRulesContent</a>

content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#content ApplicationInsightsStandardWebTest#content}

---

##### `ExpectedStatusCode`<sup>Optional</sup> <a name="ExpectedStatusCode" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.expectedStatusCode"></a>

```csharp
public double ExpectedStatusCode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#expected_status_code ApplicationInsightsStandardWebTest#expected_status_code}.

---

##### `SslCertRemainingLifetime`<sup>Optional</sup> <a name="SslCertRemainingLifetime" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.sslCertRemainingLifetime"></a>

```csharp
public double SslCertRemainingLifetime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#ssl_cert_remaining_lifetime ApplicationInsightsStandardWebTest#ssl_cert_remaining_lifetime}.

---

##### `SslCheckEnabled`<sup>Optional</sup> <a name="SslCheckEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.sslCheckEnabled"></a>

```csharp
public object SslCheckEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#ssl_check_enabled ApplicationInsightsStandardWebTest#ssl_check_enabled}.

---

### ApplicationInsightsStandardWebTestValidationRulesContent <a name="ApplicationInsightsStandardWebTestValidationRulesContent" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsStandardWebTestValidationRulesContent {
    string ContentMatch,
    object IgnoreCase = null,
    object PassIfTextFound = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent.property.contentMatch">ContentMatch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#content_match ApplicationInsightsStandardWebTest#content_match}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent.property.ignoreCase">IgnoreCase</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#ignore_case ApplicationInsightsStandardWebTest#ignore_case}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent.property.passIfTextFound">PassIfTextFound</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#pass_if_text_found ApplicationInsightsStandardWebTest#pass_if_text_found}. |

---

##### `ContentMatch`<sup>Required</sup> <a name="ContentMatch" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent.property.contentMatch"></a>

```csharp
public string ContentMatch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#content_match ApplicationInsightsStandardWebTest#content_match}.

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent.property.ignoreCase"></a>

```csharp
public object IgnoreCase { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#ignore_case ApplicationInsightsStandardWebTest#ignore_case}.

---

##### `PassIfTextFound`<sup>Optional</sup> <a name="PassIfTextFound" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent.property.passIfTextFound"></a>

```csharp
public object PassIfTextFound { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/application_insights_standard_web_test#pass_if_text_found ApplicationInsightsStandardWebTest#pass_if_text_found}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationInsightsStandardWebTestRequestHeaderList <a name="ApplicationInsightsStandardWebTestRequestHeaderList" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsStandardWebTestRequestHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.get"></a>

```csharp
private ApplicationInsightsStandardWebTestRequestHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationInsightsStandardWebTestRequestHeaderOutputReference <a name="ApplicationInsightsStandardWebTestRequestHeaderOutputReference" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsStandardWebTestRequestHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationInsightsStandardWebTestRequestOutputReference <a name="ApplicationInsightsStandardWebTestRequestOutputReference" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsStandardWebTestRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetFollowRedirectsEnabled">ResetFollowRedirectsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetHttpVerb">ResetHttpVerb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetParseDependentRequestsEnabled">ResetParseDependentRequestsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.putHeader"></a>

```csharp
private void PutHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.putHeader.parameter.value"></a>

- *Type:* object

---

##### `ResetBody` <a name="ResetBody" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetFollowRedirectsEnabled` <a name="ResetFollowRedirectsEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetFollowRedirectsEnabled"></a>

```csharp
private void ResetFollowRedirectsEnabled()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetHeader"></a>

```csharp
private void ResetHeader()
```

##### `ResetHttpVerb` <a name="ResetHttpVerb" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetHttpVerb"></a>

```csharp
private void ResetHttpVerb()
```

##### `ResetParseDependentRequestsEnabled` <a name="ResetParseDependentRequestsEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetParseDependentRequestsEnabled"></a>

```csharp
private void ResetParseDependentRequestsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList">ApplicationInsightsStandardWebTestRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.bodyInput">BodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.followRedirectsEnabledInput">FollowRedirectsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.headerInput">HeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.httpVerbInput">HttpVerbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.parseDependentRequestsEnabledInput">ParseDependentRequestsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.followRedirectsEnabled">FollowRedirectsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.httpVerb">HttpVerb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.parseDependentRequestsEnabled">ParseDependentRequestsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest">ApplicationInsightsStandardWebTestRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.header"></a>

```csharp
public ApplicationInsightsStandardWebTestRequestHeaderList Header { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList">ApplicationInsightsStandardWebTestRequestHeaderList</a>

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.bodyInput"></a>

```csharp
public string BodyInput { get; }
```

- *Type:* string

---

##### `FollowRedirectsEnabledInput`<sup>Optional</sup> <a name="FollowRedirectsEnabledInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.followRedirectsEnabledInput"></a>

```csharp
public object FollowRedirectsEnabledInput { get; }
```

- *Type:* object

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.headerInput"></a>

```csharp
public object HeaderInput { get; }
```

- *Type:* object

---

##### `HttpVerbInput`<sup>Optional</sup> <a name="HttpVerbInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.httpVerbInput"></a>

```csharp
public string HttpVerbInput { get; }
```

- *Type:* string

---

##### `ParseDependentRequestsEnabledInput`<sup>Optional</sup> <a name="ParseDependentRequestsEnabledInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.parseDependentRequestsEnabledInput"></a>

```csharp
public object ParseDependentRequestsEnabledInput { get; }
```

- *Type:* object

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `FollowRedirectsEnabled`<sup>Required</sup> <a name="FollowRedirectsEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.followRedirectsEnabled"></a>

```csharp
public object FollowRedirectsEnabled { get; }
```

- *Type:* object

---

##### `HttpVerb`<sup>Required</sup> <a name="HttpVerb" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.httpVerb"></a>

```csharp
public string HttpVerb { get; }
```

- *Type:* string

---

##### `ParseDependentRequestsEnabled`<sup>Required</sup> <a name="ParseDependentRequestsEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.parseDependentRequestsEnabled"></a>

```csharp
public object ParseDependentRequestsEnabled { get; }
```

- *Type:* object

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.internalValue"></a>

```csharp
public ApplicationInsightsStandardWebTestRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest">ApplicationInsightsStandardWebTestRequest</a>

---


### ApplicationInsightsStandardWebTestTimeoutsOutputReference <a name="ApplicationInsightsStandardWebTestTimeoutsOutputReference" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsStandardWebTestTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationInsightsStandardWebTestValidationRulesContentOutputReference <a name="ApplicationInsightsStandardWebTestValidationRulesContentOutputReference" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsStandardWebTestValidationRulesContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.resetPassIfTextFound">ResetPassIfTextFound</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.resetIgnoreCase"></a>

```csharp
private void ResetIgnoreCase()
```

##### `ResetPassIfTextFound` <a name="ResetPassIfTextFound" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.resetPassIfTextFound"></a>

```csharp
private void ResetPassIfTextFound()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.contentMatchInput">ContentMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.passIfTextFoundInput">PassIfTextFoundInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.contentMatch">ContentMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.passIfTextFound">PassIfTextFound</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent">ApplicationInsightsStandardWebTestValidationRulesContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentMatchInput`<sup>Optional</sup> <a name="ContentMatchInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.contentMatchInput"></a>

```csharp
public string ContentMatchInput { get; }
```

- *Type:* string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.ignoreCaseInput"></a>

```csharp
public object IgnoreCaseInput { get; }
```

- *Type:* object

---

##### `PassIfTextFoundInput`<sup>Optional</sup> <a name="PassIfTextFoundInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.passIfTextFoundInput"></a>

```csharp
public object PassIfTextFoundInput { get; }
```

- *Type:* object

---

##### `ContentMatch`<sup>Required</sup> <a name="ContentMatch" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.contentMatch"></a>

```csharp
public string ContentMatch { get; }
```

- *Type:* string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.ignoreCase"></a>

```csharp
public object IgnoreCase { get; }
```

- *Type:* object

---

##### `PassIfTextFound`<sup>Required</sup> <a name="PassIfTextFound" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.passIfTextFound"></a>

```csharp
public object PassIfTextFound { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.internalValue"></a>

```csharp
public ApplicationInsightsStandardWebTestValidationRulesContent InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent">ApplicationInsightsStandardWebTestValidationRulesContent</a>

---


### ApplicationInsightsStandardWebTestValidationRulesOutputReference <a name="ApplicationInsightsStandardWebTestValidationRulesOutputReference" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsStandardWebTestValidationRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.putContent">PutContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetExpectedStatusCode">ResetExpectedStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetSslCertRemainingLifetime">ResetSslCertRemainingLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetSslCheckEnabled">ResetSslCheckEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContent` <a name="PutContent" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.putContent"></a>

```csharp
private void PutContent(ApplicationInsightsStandardWebTestValidationRulesContent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent">ApplicationInsightsStandardWebTestValidationRulesContent</a>

---

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetExpectedStatusCode` <a name="ResetExpectedStatusCode" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetExpectedStatusCode"></a>

```csharp
private void ResetExpectedStatusCode()
```

##### `ResetSslCertRemainingLifetime` <a name="ResetSslCertRemainingLifetime" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetSslCertRemainingLifetime"></a>

```csharp
private void ResetSslCertRemainingLifetime()
```

##### `ResetSslCheckEnabled` <a name="ResetSslCheckEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetSslCheckEnabled"></a>

```csharp
private void ResetSslCheckEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.content">Content</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference">ApplicationInsightsStandardWebTestValidationRulesContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.contentInput">ContentInput</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent">ApplicationInsightsStandardWebTestValidationRulesContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.expectedStatusCodeInput">ExpectedStatusCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCertRemainingLifetimeInput">SslCertRemainingLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCheckEnabledInput">SslCheckEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.expectedStatusCode">ExpectedStatusCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCertRemainingLifetime">SslCertRemainingLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCheckEnabled">SslCheckEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules">ApplicationInsightsStandardWebTestValidationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.content"></a>

```csharp
public ApplicationInsightsStandardWebTestValidationRulesContentOutputReference Content { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference">ApplicationInsightsStandardWebTestValidationRulesContentOutputReference</a>

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.contentInput"></a>

```csharp
public ApplicationInsightsStandardWebTestValidationRulesContent ContentInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent">ApplicationInsightsStandardWebTestValidationRulesContent</a>

---

##### `ExpectedStatusCodeInput`<sup>Optional</sup> <a name="ExpectedStatusCodeInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.expectedStatusCodeInput"></a>

```csharp
public double ExpectedStatusCodeInput { get; }
```

- *Type:* double

---

##### `SslCertRemainingLifetimeInput`<sup>Optional</sup> <a name="SslCertRemainingLifetimeInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCertRemainingLifetimeInput"></a>

```csharp
public double SslCertRemainingLifetimeInput { get; }
```

- *Type:* double

---

##### `SslCheckEnabledInput`<sup>Optional</sup> <a name="SslCheckEnabledInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCheckEnabledInput"></a>

```csharp
public object SslCheckEnabledInput { get; }
```

- *Type:* object

---

##### `ExpectedStatusCode`<sup>Required</sup> <a name="ExpectedStatusCode" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.expectedStatusCode"></a>

```csharp
public double ExpectedStatusCode { get; }
```

- *Type:* double

---

##### `SslCertRemainingLifetime`<sup>Required</sup> <a name="SslCertRemainingLifetime" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCertRemainingLifetime"></a>

```csharp
public double SslCertRemainingLifetime { get; }
```

- *Type:* double

---

##### `SslCheckEnabled`<sup>Required</sup> <a name="SslCheckEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCheckEnabled"></a>

```csharp
public object SslCheckEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.internalValue"></a>

```csharp
public ApplicationInsightsStandardWebTestValidationRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules">ApplicationInsightsStandardWebTestValidationRules</a>

---



