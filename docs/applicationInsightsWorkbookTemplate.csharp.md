# `applicationInsightsWorkbookTemplate` Submodule <a name="`applicationInsightsWorkbookTemplate` Submodule" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationInsightsWorkbookTemplate <a name="ApplicationInsightsWorkbookTemplate" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template azurerm_application_insights_workbook_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsWorkbookTemplate(Construct Scope, string Id, ApplicationInsightsWorkbookTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig">ApplicationInsightsWorkbookTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig">ApplicationInsightsWorkbookTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.putGalleries">PutGalleries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetAuthor">ResetAuthor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetLocalized">ResetLocalized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGalleries` <a name="PutGalleries" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.putGalleries"></a>

```csharp
private void PutGalleries(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.putGalleries.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.putTimeouts"></a>

```csharp
private void PutTimeouts(ApplicationInsightsWorkbookTemplateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts">ApplicationInsightsWorkbookTemplateTimeouts</a>

---

##### `ResetAuthor` <a name="ResetAuthor" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetAuthor"></a>

```csharp
private void ResetAuthor()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocalized` <a name="ResetLocalized" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetLocalized"></a>

```csharp
private void ResetLocalized()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationInsightsWorkbookTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApplicationInsightsWorkbookTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApplicationInsightsWorkbookTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApplicationInsightsWorkbookTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApplicationInsightsWorkbookTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApplicationInsightsWorkbookTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationInsightsWorkbookTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationInsightsWorkbookTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationInsightsWorkbookTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.galleries">Galleries</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList">ApplicationInsightsWorkbookTemplateGalleriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference">ApplicationInsightsWorkbookTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.authorInput">AuthorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.galleriesInput">GalleriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.localizedInput">LocalizedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.templateDataInput">TemplateDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.author">Author</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.localized">Localized</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.templateData">TemplateData</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Galleries`<sup>Required</sup> <a name="Galleries" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.galleries"></a>

```csharp
public ApplicationInsightsWorkbookTemplateGalleriesList Galleries { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList">ApplicationInsightsWorkbookTemplateGalleriesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.timeouts"></a>

```csharp
public ApplicationInsightsWorkbookTemplateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference">ApplicationInsightsWorkbookTemplateTimeoutsOutputReference</a>

---

##### `AuthorInput`<sup>Optional</sup> <a name="AuthorInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.authorInput"></a>

```csharp
public string AuthorInput { get; }
```

- *Type:* string

---

##### `GalleriesInput`<sup>Optional</sup> <a name="GalleriesInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.galleriesInput"></a>

```csharp
public object GalleriesInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocalizedInput`<sup>Optional</sup> <a name="LocalizedInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.localizedInput"></a>

```csharp
public string LocalizedInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemplateDataInput`<sup>Optional</sup> <a name="TemplateDataInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.templateDataInput"></a>

```csharp
public string TemplateDataInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Author`<sup>Required</sup> <a name="Author" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.author"></a>

```csharp
public string Author { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Localized`<sup>Required</sup> <a name="Localized" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.localized"></a>

```csharp
public string Localized { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemplateData`<sup>Required</sup> <a name="TemplateData" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.templateData"></a>

```csharp
public string TemplateData { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationInsightsWorkbookTemplateConfig <a name="ApplicationInsightsWorkbookTemplateConfig" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsWorkbookTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Galleries,
    string Location,
    string Name,
    string ResourceGroupName,
    string TemplateData,
    string Author = null,
    string Id = null,
    string Localized = null,
    double Priority = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ApplicationInsightsWorkbookTemplateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.galleries">Galleries</a></code> | <code>object</code> | galleries block. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#location ApplicationInsightsWorkbookTemplate#location}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#name ApplicationInsightsWorkbookTemplate#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#resource_group_name ApplicationInsightsWorkbookTemplate#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.templateData">TemplateData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#template_data ApplicationInsightsWorkbookTemplate#template_data}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.author">Author</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#author ApplicationInsightsWorkbookTemplate#author}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#id ApplicationInsightsWorkbookTemplate#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.localized">Localized</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#localized ApplicationInsightsWorkbookTemplate#localized}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#priority ApplicationInsightsWorkbookTemplate#priority}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#tags ApplicationInsightsWorkbookTemplate#tags}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts">ApplicationInsightsWorkbookTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Galleries`<sup>Required</sup> <a name="Galleries" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.galleries"></a>

```csharp
public object Galleries { get; set; }
```

- *Type:* object

galleries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#galleries ApplicationInsightsWorkbookTemplate#galleries}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#location ApplicationInsightsWorkbookTemplate#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#name ApplicationInsightsWorkbookTemplate#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#resource_group_name ApplicationInsightsWorkbookTemplate#resource_group_name}.

---

##### `TemplateData`<sup>Required</sup> <a name="TemplateData" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.templateData"></a>

```csharp
public string TemplateData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#template_data ApplicationInsightsWorkbookTemplate#template_data}.

---

##### `Author`<sup>Optional</sup> <a name="Author" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.author"></a>

```csharp
public string Author { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#author ApplicationInsightsWorkbookTemplate#author}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#id ApplicationInsightsWorkbookTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Localized`<sup>Optional</sup> <a name="Localized" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.localized"></a>

```csharp
public string Localized { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#localized ApplicationInsightsWorkbookTemplate#localized}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#priority ApplicationInsightsWorkbookTemplate#priority}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#tags ApplicationInsightsWorkbookTemplate#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.timeouts"></a>

```csharp
public ApplicationInsightsWorkbookTemplateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts">ApplicationInsightsWorkbookTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#timeouts ApplicationInsightsWorkbookTemplate#timeouts}

---

### ApplicationInsightsWorkbookTemplateGalleries <a name="ApplicationInsightsWorkbookTemplateGalleries" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsWorkbookTemplateGalleries {
    string Category,
    string Name,
    double Order = null,
    string ResourceType = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.category">Category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#category ApplicationInsightsWorkbookTemplate#category}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#name ApplicationInsightsWorkbookTemplate#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.order">Order</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#order ApplicationInsightsWorkbookTemplate#order}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#resource_type ApplicationInsightsWorkbookTemplate#resource_type}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#type ApplicationInsightsWorkbookTemplate#type}. |

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#category ApplicationInsightsWorkbookTemplate#category}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#name ApplicationInsightsWorkbookTemplate#name}.

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.order"></a>

```csharp
public double Order { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#order ApplicationInsightsWorkbookTemplate#order}.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#resource_type ApplicationInsightsWorkbookTemplate#resource_type}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#type ApplicationInsightsWorkbookTemplate#type}.

---

### ApplicationInsightsWorkbookTemplateTimeouts <a name="ApplicationInsightsWorkbookTemplateTimeouts" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsWorkbookTemplateTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#create ApplicationInsightsWorkbookTemplate#create}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#delete ApplicationInsightsWorkbookTemplate#delete}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#read ApplicationInsightsWorkbookTemplate#read}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#update ApplicationInsightsWorkbookTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#create ApplicationInsightsWorkbookTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#delete ApplicationInsightsWorkbookTemplate#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#read ApplicationInsightsWorkbookTemplate#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/application_insights_workbook_template#update ApplicationInsightsWorkbookTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationInsightsWorkbookTemplateGalleriesList <a name="ApplicationInsightsWorkbookTemplateGalleriesList" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsWorkbookTemplateGalleriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.get"></a>

```csharp
private ApplicationInsightsWorkbookTemplateGalleriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationInsightsWorkbookTemplateGalleriesOutputReference <a name="ApplicationInsightsWorkbookTemplateGalleriesOutputReference" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsWorkbookTemplateGalleriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resetResourceType"></a>

```csharp
private void ResetResourceType()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.orderInput">OrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.order">Order</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.orderInput"></a>

```csharp
public double OrderInput { get; }
```

- *Type:* double

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.order"></a>

```csharp
public double Order { get; }
```

- *Type:* double

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationInsightsWorkbookTemplateTimeoutsOutputReference <a name="ApplicationInsightsWorkbookTemplateTimeoutsOutputReference" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsWorkbookTemplateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



