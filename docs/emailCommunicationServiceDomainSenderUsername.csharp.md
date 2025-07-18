# `emailCommunicationServiceDomainSenderUsername` Submodule <a name="`emailCommunicationServiceDomainSenderUsername` Submodule" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailCommunicationServiceDomainSenderUsername <a name="EmailCommunicationServiceDomainSenderUsername" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/email_communication_service_domain_sender_username azurerm_email_communication_service_domain_sender_username}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EmailCommunicationServiceDomainSenderUsername(Construct Scope, string Id, EmailCommunicationServiceDomainSenderUsernameConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig">EmailCommunicationServiceDomainSenderUsernameConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig">EmailCommunicationServiceDomainSenderUsernameConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.putTimeouts"></a>

```csharp
private void PutTimeouts(EmailCommunicationServiceDomainSenderUsernameTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts">EmailCommunicationServiceDomainSenderUsernameTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EmailCommunicationServiceDomainSenderUsername resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

EmailCommunicationServiceDomainSenderUsername.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

EmailCommunicationServiceDomainSenderUsername.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

EmailCommunicationServiceDomainSenderUsername.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

EmailCommunicationServiceDomainSenderUsername.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EmailCommunicationServiceDomainSenderUsername resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmailCommunicationServiceDomainSenderUsername to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmailCommunicationServiceDomainSenderUsername that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/email_communication_service_domain_sender_username#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EmailCommunicationServiceDomainSenderUsername to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference">EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.emailServiceDomainIdInput">EmailServiceDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.emailServiceDomainId">EmailServiceDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.timeouts"></a>

```csharp
public EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference">EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailServiceDomainIdInput`<sup>Optional</sup> <a name="EmailServiceDomainIdInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.emailServiceDomainIdInput"></a>

```csharp
public string EmailServiceDomainIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EmailServiceDomainId`<sup>Required</sup> <a name="EmailServiceDomainId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.emailServiceDomainId"></a>

```csharp
public string EmailServiceDomainId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailCommunicationServiceDomainSenderUsernameConfig <a name="EmailCommunicationServiceDomainSenderUsernameConfig" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EmailCommunicationServiceDomainSenderUsernameConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EmailServiceDomainId,
    string Name,
    string DisplayName = null,
    string Id = null,
    EmailCommunicationServiceDomainSenderUsernameTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.emailServiceDomainId">EmailServiceDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/email_communication_service_domain_sender_username#email_service_domain_id EmailCommunicationServiceDomainSenderUsername#email_service_domain_id}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/email_communication_service_domain_sender_username#name EmailCommunicationServiceDomainSenderUsername#name}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/email_communication_service_domain_sender_username#display_name EmailCommunicationServiceDomainSenderUsername#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/email_communication_service_domain_sender_username#id EmailCommunicationServiceDomainSenderUsername#id}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts">EmailCommunicationServiceDomainSenderUsernameTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EmailServiceDomainId`<sup>Required</sup> <a name="EmailServiceDomainId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.emailServiceDomainId"></a>

```csharp
public string EmailServiceDomainId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/email_communication_service_domain_sender_username#email_service_domain_id EmailCommunicationServiceDomainSenderUsername#email_service_domain_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/email_communication_service_domain_sender_username#name EmailCommunicationServiceDomainSenderUsername#name}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/email_communication_service_domain_sender_username#display_name EmailCommunicationServiceDomainSenderUsername#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/email_communication_service_domain_sender_username#id EmailCommunicationServiceDomainSenderUsername#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.timeouts"></a>

```csharp
public EmailCommunicationServiceDomainSenderUsernameTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts">EmailCommunicationServiceDomainSenderUsernameTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/email_communication_service_domain_sender_username#timeouts EmailCommunicationServiceDomainSenderUsername#timeouts}

---

### EmailCommunicationServiceDomainSenderUsernameTimeouts <a name="EmailCommunicationServiceDomainSenderUsernameTimeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EmailCommunicationServiceDomainSenderUsernameTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/email_communication_service_domain_sender_username#create EmailCommunicationServiceDomainSenderUsername#create}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/email_communication_service_domain_sender_username#delete EmailCommunicationServiceDomainSenderUsername#delete}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/email_communication_service_domain_sender_username#read EmailCommunicationServiceDomainSenderUsername#read}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/email_communication_service_domain_sender_username#update EmailCommunicationServiceDomainSenderUsername#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/email_communication_service_domain_sender_username#create EmailCommunicationServiceDomainSenderUsername#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/email_communication_service_domain_sender_username#delete EmailCommunicationServiceDomainSenderUsername#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/email_communication_service_domain_sender_username#read EmailCommunicationServiceDomainSenderUsername#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/email_communication_service_domain_sender_username#update EmailCommunicationServiceDomainSenderUsername#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference <a name="EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



