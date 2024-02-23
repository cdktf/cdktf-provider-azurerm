# `automationConnectionType` Submodule <a name="`automationConnectionType` Submodule" id="@cdktf/provider-azurerm.automationConnectionType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationConnectionType <a name="AutomationConnectionType" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type azurerm_automation_connection_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationConnectionType(Construct Scope, string Id, AutomationConnectionTypeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig">AutomationConnectionTypeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig">AutomationConnectionTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.putField">PutField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.resetIsGlobal">ResetIsGlobal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutField` <a name="PutField" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.putField"></a>

```csharp
private void PutField(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.putField.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.putTimeouts"></a>

```csharp
private void PutTimeouts(AutomationConnectionTypeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeouts">AutomationConnectionTypeTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsGlobal` <a name="ResetIsGlobal" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.resetIsGlobal"></a>

```csharp
private void ResetIsGlobal()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AutomationConnectionType resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AutomationConnectionType.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AutomationConnectionType.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AutomationConnectionType.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AutomationConnectionType.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AutomationConnectionType resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutomationConnectionType to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutomationConnectionType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AutomationConnectionType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.field">Field</a></code> | <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList">AutomationConnectionTypeFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference">AutomationConnectionTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.automationAccountNameInput">AutomationAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.fieldInput">FieldInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.isGlobalInput">IsGlobalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.automationAccountName">AutomationAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.isGlobal">IsGlobal</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.field"></a>

```csharp
public AutomationConnectionTypeFieldList Field { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList">AutomationConnectionTypeFieldList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.timeouts"></a>

```csharp
public AutomationConnectionTypeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference">AutomationConnectionTypeTimeoutsOutputReference</a>

---

##### `AutomationAccountNameInput`<sup>Optional</sup> <a name="AutomationAccountNameInput" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.automationAccountNameInput"></a>

```csharp
public string AutomationAccountNameInput { get; }
```

- *Type:* string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.fieldInput"></a>

```csharp
public object FieldInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsGlobalInput`<sup>Optional</sup> <a name="IsGlobalInput" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.isGlobalInput"></a>

```csharp
public object IsGlobalInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AutomationAccountName`<sup>Required</sup> <a name="AutomationAccountName" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.automationAccountName"></a>

```csharp
public string AutomationAccountName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsGlobal`<sup>Required</sup> <a name="IsGlobal" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.isGlobal"></a>

```csharp
public object IsGlobal { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionType.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationConnectionTypeConfig <a name="AutomationConnectionTypeConfig" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationConnectionTypeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AutomationAccountName,
    object Field,
    string Name,
    string ResourceGroupName,
    string Id = null,
    object IsGlobal = null,
    AutomationConnectionTypeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.automationAccountName">AutomationAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#automation_account_name AutomationConnectionType#automation_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.field">Field</a></code> | <code>object</code> | field block. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#name AutomationConnectionType#name}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#resource_group_name AutomationConnectionType#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#id AutomationConnectionType#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.isGlobal">IsGlobal</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#is_global AutomationConnectionType#is_global}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeouts">AutomationConnectionTypeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutomationAccountName`<sup>Required</sup> <a name="AutomationAccountName" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.automationAccountName"></a>

```csharp
public string AutomationAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#automation_account_name AutomationConnectionType#automation_account_name}.

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.field"></a>

```csharp
public object Field { get; set; }
```

- *Type:* object

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#field AutomationConnectionType#field}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#name AutomationConnectionType#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#resource_group_name AutomationConnectionType#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#id AutomationConnectionType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsGlobal`<sup>Optional</sup> <a name="IsGlobal" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.isGlobal"></a>

```csharp
public object IsGlobal { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#is_global AutomationConnectionType#is_global}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeConfig.property.timeouts"></a>

```csharp
public AutomationConnectionTypeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeouts">AutomationConnectionTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#timeouts AutomationConnectionType#timeouts}

---

### AutomationConnectionTypeField <a name="AutomationConnectionTypeField" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeField.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationConnectionTypeField {
    string Name,
    string Type,
    object IsEncrypted = null,
    object IsOptional = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeField.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#name AutomationConnectionType#name}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeField.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#type AutomationConnectionType#type}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeField.property.isEncrypted">IsEncrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#is_encrypted AutomationConnectionType#is_encrypted}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeField.property.isOptional">IsOptional</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#is_optional AutomationConnectionType#is_optional}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeField.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#name AutomationConnectionType#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeField.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#type AutomationConnectionType#type}.

---

##### `IsEncrypted`<sup>Optional</sup> <a name="IsEncrypted" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeField.property.isEncrypted"></a>

```csharp
public object IsEncrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#is_encrypted AutomationConnectionType#is_encrypted}.

---

##### `IsOptional`<sup>Optional</sup> <a name="IsOptional" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeField.property.isOptional"></a>

```csharp
public object IsOptional { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#is_optional AutomationConnectionType#is_optional}.

---

### AutomationConnectionTypeTimeouts <a name="AutomationConnectionTypeTimeouts" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationConnectionTypeTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#create AutomationConnectionType#create}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#delete AutomationConnectionType#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#read AutomationConnectionType#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#create AutomationConnectionType#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#delete AutomationConnectionType#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_connection_type#read AutomationConnectionType#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationConnectionTypeFieldList <a name="AutomationConnectionTypeFieldList" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationConnectionTypeFieldList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.get"></a>

```csharp
private AutomationConnectionTypeFieldOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AutomationConnectionTypeFieldOutputReference <a name="AutomationConnectionTypeFieldOutputReference" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationConnectionTypeFieldOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.resetIsEncrypted">ResetIsEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.resetIsOptional">ResetIsOptional</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEncrypted` <a name="ResetIsEncrypted" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.resetIsEncrypted"></a>

```csharp
private void ResetIsEncrypted()
```

##### `ResetIsOptional` <a name="ResetIsOptional" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.resetIsOptional"></a>

```csharp
private void ResetIsOptional()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.property.isEncryptedInput">IsEncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.property.isOptionalInput">IsOptionalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.property.isEncrypted">IsEncrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.property.isOptional">IsOptional</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEncryptedInput`<sup>Optional</sup> <a name="IsEncryptedInput" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.property.isEncryptedInput"></a>

```csharp
public object IsEncryptedInput { get; }
```

- *Type:* object

---

##### `IsOptionalInput`<sup>Optional</sup> <a name="IsOptionalInput" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.property.isOptionalInput"></a>

```csharp
public object IsOptionalInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IsEncrypted`<sup>Required</sup> <a name="IsEncrypted" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.property.isEncrypted"></a>

```csharp
public object IsEncrypted { get; }
```

- *Type:* object

---

##### `IsOptional`<sup>Required</sup> <a name="IsOptional" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.property.isOptional"></a>

```csharp
public object IsOptional { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeFieldOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AutomationConnectionTypeTimeoutsOutputReference <a name="AutomationConnectionTypeTimeoutsOutputReference" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationConnectionTypeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationConnectionType.AutomationConnectionTypeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



