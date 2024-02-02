# `logicAppIntegrationAccountAgreement` Submodule <a name="`logicAppIntegrationAccountAgreement` Submodule" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogicAppIntegrationAccountAgreement <a name="LogicAppIntegrationAccountAgreement" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement azurerm_logic_app_integration_account_agreement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppIntegrationAccountAgreement(Construct Scope, string Id, LogicAppIntegrationAccountAgreementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig">LogicAppIntegrationAccountAgreementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig">LogicAppIntegrationAccountAgreementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.putGuestIdentity">PutGuestIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.putHostIdentity">PutHostIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGuestIdentity` <a name="PutGuestIdentity" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.putGuestIdentity"></a>

```csharp
private void PutGuestIdentity(LogicAppIntegrationAccountAgreementGuestIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.putGuestIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity">LogicAppIntegrationAccountAgreementGuestIdentity</a>

---

##### `PutHostIdentity` <a name="PutHostIdentity" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.putHostIdentity"></a>

```csharp
private void PutHostIdentity(LogicAppIntegrationAccountAgreementHostIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.putHostIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity">LogicAppIntegrationAccountAgreementHostIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.putTimeouts"></a>

```csharp
private void PutTimeouts(LogicAppIntegrationAccountAgreementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts">LogicAppIntegrationAccountAgreementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogicAppIntegrationAccountAgreement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogicAppIntegrationAccountAgreement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogicAppIntegrationAccountAgreement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogicAppIntegrationAccountAgreement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogicAppIntegrationAccountAgreement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LogicAppIntegrationAccountAgreement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogicAppIntegrationAccountAgreement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogicAppIntegrationAccountAgreement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LogicAppIntegrationAccountAgreement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.guestIdentity">GuestIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference">LogicAppIntegrationAccountAgreementGuestIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.hostIdentity">HostIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference">LogicAppIntegrationAccountAgreementHostIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference">LogicAppIntegrationAccountAgreementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.agreementTypeInput">AgreementTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.guestIdentityInput">GuestIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity">LogicAppIntegrationAccountAgreementGuestIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.guestPartnerNameInput">GuestPartnerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.hostIdentityInput">HostIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity">LogicAppIntegrationAccountAgreementHostIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.hostPartnerNameInput">HostPartnerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.integrationAccountNameInput">IntegrationAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.agreementType">AgreementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.guestPartnerName">GuestPartnerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.hostPartnerName">HostPartnerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.integrationAccountName">IntegrationAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `GuestIdentity`<sup>Required</sup> <a name="GuestIdentity" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.guestIdentity"></a>

```csharp
public LogicAppIntegrationAccountAgreementGuestIdentityOutputReference GuestIdentity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference">LogicAppIntegrationAccountAgreementGuestIdentityOutputReference</a>

---

##### `HostIdentity`<sup>Required</sup> <a name="HostIdentity" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.hostIdentity"></a>

```csharp
public LogicAppIntegrationAccountAgreementHostIdentityOutputReference HostIdentity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference">LogicAppIntegrationAccountAgreementHostIdentityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.timeouts"></a>

```csharp
public LogicAppIntegrationAccountAgreementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference">LogicAppIntegrationAccountAgreementTimeoutsOutputReference</a>

---

##### `AgreementTypeInput`<sup>Optional</sup> <a name="AgreementTypeInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.agreementTypeInput"></a>

```csharp
public string AgreementTypeInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `GuestIdentityInput`<sup>Optional</sup> <a name="GuestIdentityInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.guestIdentityInput"></a>

```csharp
public LogicAppIntegrationAccountAgreementGuestIdentity GuestIdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity">LogicAppIntegrationAccountAgreementGuestIdentity</a>

---

##### `GuestPartnerNameInput`<sup>Optional</sup> <a name="GuestPartnerNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.guestPartnerNameInput"></a>

```csharp
public string GuestPartnerNameInput { get; }
```

- *Type:* string

---

##### `HostIdentityInput`<sup>Optional</sup> <a name="HostIdentityInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.hostIdentityInput"></a>

```csharp
public LogicAppIntegrationAccountAgreementHostIdentity HostIdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity">LogicAppIntegrationAccountAgreementHostIdentity</a>

---

##### `HostPartnerNameInput`<sup>Optional</sup> <a name="HostPartnerNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.hostPartnerNameInput"></a>

```csharp
public string HostPartnerNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntegrationAccountNameInput`<sup>Optional</sup> <a name="IntegrationAccountNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.integrationAccountNameInput"></a>

```csharp
public string IntegrationAccountNameInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AgreementType`<sup>Required</sup> <a name="AgreementType" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.agreementType"></a>

```csharp
public string AgreementType { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `GuestPartnerName`<sup>Required</sup> <a name="GuestPartnerName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.guestPartnerName"></a>

```csharp
public string GuestPartnerName { get; }
```

- *Type:* string

---

##### `HostPartnerName`<sup>Required</sup> <a name="HostPartnerName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.hostPartnerName"></a>

```csharp
public string HostPartnerName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntegrationAccountName`<sup>Required</sup> <a name="IntegrationAccountName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.integrationAccountName"></a>

```csharp
public string IntegrationAccountName { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogicAppIntegrationAccountAgreementConfig <a name="LogicAppIntegrationAccountAgreementConfig" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppIntegrationAccountAgreementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AgreementType,
    string Content,
    LogicAppIntegrationAccountAgreementGuestIdentity GuestIdentity,
    string GuestPartnerName,
    LogicAppIntegrationAccountAgreementHostIdentity HostIdentity,
    string HostPartnerName,
    string IntegrationAccountName,
    string Name,
    string ResourceGroupName,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    LogicAppIntegrationAccountAgreementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.agreementType">AgreementType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#agreement_type LogicAppIntegrationAccountAgreement#agreement_type}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#content LogicAppIntegrationAccountAgreement#content}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.guestIdentity">GuestIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity">LogicAppIntegrationAccountAgreementGuestIdentity</a></code> | guest_identity block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.guestPartnerName">GuestPartnerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#guest_partner_name LogicAppIntegrationAccountAgreement#guest_partner_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.hostIdentity">HostIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity">LogicAppIntegrationAccountAgreementHostIdentity</a></code> | host_identity block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.hostPartnerName">HostPartnerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#host_partner_name LogicAppIntegrationAccountAgreement#host_partner_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.integrationAccountName">IntegrationAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#integration_account_name LogicAppIntegrationAccountAgreement#integration_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#name LogicAppIntegrationAccountAgreement#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#resource_group_name LogicAppIntegrationAccountAgreement#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#id LogicAppIntegrationAccountAgreement#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#metadata LogicAppIntegrationAccountAgreement#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts">LogicAppIntegrationAccountAgreementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AgreementType`<sup>Required</sup> <a name="AgreementType" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.agreementType"></a>

```csharp
public string AgreementType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#agreement_type LogicAppIntegrationAccountAgreement#agreement_type}.

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#content LogicAppIntegrationAccountAgreement#content}.

---

##### `GuestIdentity`<sup>Required</sup> <a name="GuestIdentity" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.guestIdentity"></a>

```csharp
public LogicAppIntegrationAccountAgreementGuestIdentity GuestIdentity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity">LogicAppIntegrationAccountAgreementGuestIdentity</a>

guest_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#guest_identity LogicAppIntegrationAccountAgreement#guest_identity}

---

##### `GuestPartnerName`<sup>Required</sup> <a name="GuestPartnerName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.guestPartnerName"></a>

```csharp
public string GuestPartnerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#guest_partner_name LogicAppIntegrationAccountAgreement#guest_partner_name}.

---

##### `HostIdentity`<sup>Required</sup> <a name="HostIdentity" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.hostIdentity"></a>

```csharp
public LogicAppIntegrationAccountAgreementHostIdentity HostIdentity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity">LogicAppIntegrationAccountAgreementHostIdentity</a>

host_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#host_identity LogicAppIntegrationAccountAgreement#host_identity}

---

##### `HostPartnerName`<sup>Required</sup> <a name="HostPartnerName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.hostPartnerName"></a>

```csharp
public string HostPartnerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#host_partner_name LogicAppIntegrationAccountAgreement#host_partner_name}.

---

##### `IntegrationAccountName`<sup>Required</sup> <a name="IntegrationAccountName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.integrationAccountName"></a>

```csharp
public string IntegrationAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#integration_account_name LogicAppIntegrationAccountAgreement#integration_account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#name LogicAppIntegrationAccountAgreement#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#resource_group_name LogicAppIntegrationAccountAgreement#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#id LogicAppIntegrationAccountAgreement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#metadata LogicAppIntegrationAccountAgreement#metadata}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.timeouts"></a>

```csharp
public LogicAppIntegrationAccountAgreementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts">LogicAppIntegrationAccountAgreementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#timeouts LogicAppIntegrationAccountAgreement#timeouts}

---

### LogicAppIntegrationAccountAgreementGuestIdentity <a name="LogicAppIntegrationAccountAgreementGuestIdentity" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppIntegrationAccountAgreementGuestIdentity {
    string Qualifier,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity.property.qualifier">Qualifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#qualifier LogicAppIntegrationAccountAgreement#qualifier}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#value LogicAppIntegrationAccountAgreement#value}. |

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity.property.qualifier"></a>

```csharp
public string Qualifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#qualifier LogicAppIntegrationAccountAgreement#qualifier}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#value LogicAppIntegrationAccountAgreement#value}.

---

### LogicAppIntegrationAccountAgreementHostIdentity <a name="LogicAppIntegrationAccountAgreementHostIdentity" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppIntegrationAccountAgreementHostIdentity {
    string Qualifier,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity.property.qualifier">Qualifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#qualifier LogicAppIntegrationAccountAgreement#qualifier}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#value LogicAppIntegrationAccountAgreement#value}. |

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity.property.qualifier"></a>

```csharp
public string Qualifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#qualifier LogicAppIntegrationAccountAgreement#qualifier}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#value LogicAppIntegrationAccountAgreement#value}.

---

### LogicAppIntegrationAccountAgreementTimeouts <a name="LogicAppIntegrationAccountAgreementTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppIntegrationAccountAgreementTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#create LogicAppIntegrationAccountAgreement#create}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#delete LogicAppIntegrationAccountAgreement#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#read LogicAppIntegrationAccountAgreement#read}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#update LogicAppIntegrationAccountAgreement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#create LogicAppIntegrationAccountAgreement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#delete LogicAppIntegrationAccountAgreement#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#read LogicAppIntegrationAccountAgreement#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/logic_app_integration_account_agreement#update LogicAppIntegrationAccountAgreement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogicAppIntegrationAccountAgreementGuestIdentityOutputReference <a name="LogicAppIntegrationAccountAgreementGuestIdentityOutputReference" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppIntegrationAccountAgreementGuestIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.qualifierInput">QualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.qualifier">Qualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity">LogicAppIntegrationAccountAgreementGuestIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QualifierInput`<sup>Optional</sup> <a name="QualifierInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.qualifierInput"></a>

```csharp
public string QualifierInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.qualifier"></a>

```csharp
public string Qualifier { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.internalValue"></a>

```csharp
public LogicAppIntegrationAccountAgreementGuestIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity">LogicAppIntegrationAccountAgreementGuestIdentity</a>

---


### LogicAppIntegrationAccountAgreementHostIdentityOutputReference <a name="LogicAppIntegrationAccountAgreementHostIdentityOutputReference" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppIntegrationAccountAgreementHostIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.qualifierInput">QualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.qualifier">Qualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity">LogicAppIntegrationAccountAgreementHostIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QualifierInput`<sup>Optional</sup> <a name="QualifierInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.qualifierInput"></a>

```csharp
public string QualifierInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.qualifier"></a>

```csharp
public string Qualifier { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.internalValue"></a>

```csharp
public LogicAppIntegrationAccountAgreementHostIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity">LogicAppIntegrationAccountAgreementHostIdentity</a>

---


### LogicAppIntegrationAccountAgreementTimeoutsOutputReference <a name="LogicAppIntegrationAccountAgreementTimeoutsOutputReference" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppIntegrationAccountAgreementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



