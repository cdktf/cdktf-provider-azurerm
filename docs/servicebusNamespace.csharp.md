# `servicebusNamespace` Submodule <a name="`servicebusNamespace` Submodule" id="@cdktf/provider-azurerm.servicebusNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusNamespace <a name="ServicebusNamespace" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace azurerm_servicebus_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusNamespace(Construct Scope, string Id, ServicebusNamespaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig">ServicebusNamespaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig">ServicebusNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.putCustomerManagedKey">PutCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.putNetworkRuleSet">PutNetworkRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetCapacity">ResetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetCustomerManagedKey">ResetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetLocalAuthEnabled">ResetLocalAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetMinimumTlsVersion">ResetMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetNetworkRuleSet">ResetNetworkRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetPremiumMessagingPartitions">ResetPremiumMessagingPartitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomerManagedKey` <a name="PutCustomerManagedKey" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.putCustomerManagedKey"></a>

```csharp
private void PutCustomerManagedKey(ServicebusNamespaceCustomerManagedKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.putCustomerManagedKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey">ServicebusNamespaceCustomerManagedKey</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.putIdentity"></a>

```csharp
private void PutIdentity(ServicebusNamespaceIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity">ServicebusNamespaceIdentity</a>

---

##### `PutNetworkRuleSet` <a name="PutNetworkRuleSet" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.putNetworkRuleSet"></a>

```csharp
private void PutNetworkRuleSet(ServicebusNamespaceNetworkRuleSet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.putNetworkRuleSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSet">ServicebusNamespaceNetworkRuleSet</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.putTimeouts"></a>

```csharp
private void PutTimeouts(ServicebusNamespaceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts">ServicebusNamespaceTimeouts</a>

---

##### `ResetCapacity` <a name="ResetCapacity" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetCapacity"></a>

```csharp
private void ResetCapacity()
```

##### `ResetCustomerManagedKey` <a name="ResetCustomerManagedKey" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetCustomerManagedKey"></a>

```csharp
private void ResetCustomerManagedKey()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetLocalAuthEnabled` <a name="ResetLocalAuthEnabled" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetLocalAuthEnabled"></a>

```csharp
private void ResetLocalAuthEnabled()
```

##### `ResetMinimumTlsVersion` <a name="ResetMinimumTlsVersion" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetMinimumTlsVersion"></a>

```csharp
private void ResetMinimumTlsVersion()
```

##### `ResetNetworkRuleSet` <a name="ResetNetworkRuleSet" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetNetworkRuleSet"></a>

```csharp
private void ResetNetworkRuleSet()
```

##### `ResetPremiumMessagingPartitions` <a name="ResetPremiumMessagingPartitions" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetPremiumMessagingPartitions"></a>

```csharp
private void ResetPremiumMessagingPartitions()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServicebusNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ServicebusNamespace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ServicebusNamespace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ServicebusNamespace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ServicebusNamespace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ServicebusNamespace resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicebusNamespace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicebusNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ServicebusNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.customerManagedKey">CustomerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference">ServicebusNamespaceCustomerManagedKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.defaultPrimaryConnectionString">DefaultPrimaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.defaultPrimaryKey">DefaultPrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.defaultSecondaryConnectionString">DefaultSecondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.defaultSecondaryKey">DefaultSecondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference">ServicebusNamespaceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.networkRuleSet">NetworkRuleSet</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference">ServicebusNamespaceNetworkRuleSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference">ServicebusNamespaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.capacityInput">CapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.customerManagedKeyInput">CustomerManagedKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey">ServicebusNamespaceCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity">ServicebusNamespaceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.localAuthEnabledInput">LocalAuthEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.minimumTlsVersionInput">MinimumTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.networkRuleSetInput">NetworkRuleSetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSet">ServicebusNamespaceNetworkRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.premiumMessagingPartitionsInput">PremiumMessagingPartitionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.capacity">Capacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.minimumTlsVersion">MinimumTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.premiumMessagingPartitions">PremiumMessagingPartitions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CustomerManagedKey`<sup>Required</sup> <a name="CustomerManagedKey" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.customerManagedKey"></a>

```csharp
public ServicebusNamespaceCustomerManagedKeyOutputReference CustomerManagedKey { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference">ServicebusNamespaceCustomerManagedKeyOutputReference</a>

---

##### `DefaultPrimaryConnectionString`<sup>Required</sup> <a name="DefaultPrimaryConnectionString" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.defaultPrimaryConnectionString"></a>

```csharp
public string DefaultPrimaryConnectionString { get; }
```

- *Type:* string

---

##### `DefaultPrimaryKey`<sup>Required</sup> <a name="DefaultPrimaryKey" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.defaultPrimaryKey"></a>

```csharp
public string DefaultPrimaryKey { get; }
```

- *Type:* string

---

##### `DefaultSecondaryConnectionString`<sup>Required</sup> <a name="DefaultSecondaryConnectionString" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.defaultSecondaryConnectionString"></a>

```csharp
public string DefaultSecondaryConnectionString { get; }
```

- *Type:* string

---

##### `DefaultSecondaryKey`<sup>Required</sup> <a name="DefaultSecondaryKey" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.defaultSecondaryKey"></a>

```csharp
public string DefaultSecondaryKey { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.identity"></a>

```csharp
public ServicebusNamespaceIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference">ServicebusNamespaceIdentityOutputReference</a>

---

##### `NetworkRuleSet`<sup>Required</sup> <a name="NetworkRuleSet" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.networkRuleSet"></a>

```csharp
public ServicebusNamespaceNetworkRuleSetOutputReference NetworkRuleSet { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference">ServicebusNamespaceNetworkRuleSetOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.timeouts"></a>

```csharp
public ServicebusNamespaceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference">ServicebusNamespaceTimeoutsOutputReference</a>

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.capacityInput"></a>

```csharp
public double CapacityInput { get; }
```

- *Type:* double

---

##### `CustomerManagedKeyInput`<sup>Optional</sup> <a name="CustomerManagedKeyInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.customerManagedKeyInput"></a>

```csharp
public ServicebusNamespaceCustomerManagedKey CustomerManagedKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey">ServicebusNamespaceCustomerManagedKey</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.identityInput"></a>

```csharp
public ServicebusNamespaceIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity">ServicebusNamespaceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocalAuthEnabledInput`<sup>Optional</sup> <a name="LocalAuthEnabledInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.localAuthEnabledInput"></a>

```csharp
public object LocalAuthEnabledInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MinimumTlsVersionInput`<sup>Optional</sup> <a name="MinimumTlsVersionInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.minimumTlsVersionInput"></a>

```csharp
public string MinimumTlsVersionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkRuleSetInput`<sup>Optional</sup> <a name="NetworkRuleSetInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.networkRuleSetInput"></a>

```csharp
public ServicebusNamespaceNetworkRuleSet NetworkRuleSetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSet">ServicebusNamespaceNetworkRuleSet</a>

---

##### `PremiumMessagingPartitionsInput`<sup>Optional</sup> <a name="PremiumMessagingPartitionsInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.premiumMessagingPartitionsInput"></a>

```csharp
public double PremiumMessagingPartitionsInput { get; }
```

- *Type:* double

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.publicNetworkAccessEnabledInput"></a>

```csharp
public object PublicNetworkAccessEnabledInput { get; }
```

- *Type:* object

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.capacity"></a>

```csharp
public double Capacity { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocalAuthEnabled`<sup>Required</sup> <a name="LocalAuthEnabled" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.localAuthEnabled"></a>

```csharp
public object LocalAuthEnabled { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MinimumTlsVersion`<sup>Required</sup> <a name="MinimumTlsVersion" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.minimumTlsVersion"></a>

```csharp
public string MinimumTlsVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PremiumMessagingPartitions`<sup>Required</sup> <a name="PremiumMessagingPartitions" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.premiumMessagingPartitions"></a>

```csharp
public double PremiumMessagingPartitions { get; }
```

- *Type:* double

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; }
```

- *Type:* object

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusNamespaceConfig <a name="ServicebusNamespaceConfig" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusNamespaceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string ResourceGroupName,
    string Sku,
    double Capacity = null,
    ServicebusNamespaceCustomerManagedKey CustomerManagedKey = null,
    string Id = null,
    ServicebusNamespaceIdentity Identity = null,
    object LocalAuthEnabled = null,
    string MinimumTlsVersion = null,
    ServicebusNamespaceNetworkRuleSet NetworkRuleSet = null,
    double PremiumMessagingPartitions = null,
    object PublicNetworkAccessEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ServicebusNamespaceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#location ServicebusNamespace#location}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#name ServicebusNamespace#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#resource_group_name ServicebusNamespace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#sku ServicebusNamespace#sku}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.capacity">Capacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#capacity ServicebusNamespace#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.customerManagedKey">CustomerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey">ServicebusNamespaceCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#id ServicebusNamespace#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity">ServicebusNamespaceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#local_auth_enabled ServicebusNamespace#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.minimumTlsVersion">MinimumTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#minimum_tls_version ServicebusNamespace#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.networkRuleSet">NetworkRuleSet</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSet">ServicebusNamespaceNetworkRuleSet</a></code> | network_rule_set block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.premiumMessagingPartitions">PremiumMessagingPartitions</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#premium_messaging_partitions ServicebusNamespace#premium_messaging_partitions}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#public_network_access_enabled ServicebusNamespace#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#tags ServicebusNamespace#tags}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts">ServicebusNamespaceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#location ServicebusNamespace#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#name ServicebusNamespace#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#resource_group_name ServicebusNamespace#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#sku ServicebusNamespace#sku}.

---

##### `Capacity`<sup>Optional</sup> <a name="Capacity" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.capacity"></a>

```csharp
public double Capacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#capacity ServicebusNamespace#capacity}.

---

##### `CustomerManagedKey`<sup>Optional</sup> <a name="CustomerManagedKey" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.customerManagedKey"></a>

```csharp
public ServicebusNamespaceCustomerManagedKey CustomerManagedKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey">ServicebusNamespaceCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#customer_managed_key ServicebusNamespace#customer_managed_key}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#id ServicebusNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.identity"></a>

```csharp
public ServicebusNamespaceIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity">ServicebusNamespaceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#identity ServicebusNamespace#identity}

---

##### `LocalAuthEnabled`<sup>Optional</sup> <a name="LocalAuthEnabled" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.localAuthEnabled"></a>

```csharp
public object LocalAuthEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#local_auth_enabled ServicebusNamespace#local_auth_enabled}.

---

##### `MinimumTlsVersion`<sup>Optional</sup> <a name="MinimumTlsVersion" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.minimumTlsVersion"></a>

```csharp
public string MinimumTlsVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#minimum_tls_version ServicebusNamespace#minimum_tls_version}.

---

##### `NetworkRuleSet`<sup>Optional</sup> <a name="NetworkRuleSet" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.networkRuleSet"></a>

```csharp
public ServicebusNamespaceNetworkRuleSet NetworkRuleSet { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSet">ServicebusNamespaceNetworkRuleSet</a>

network_rule_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#network_rule_set ServicebusNamespace#network_rule_set}

---

##### `PremiumMessagingPartitions`<sup>Optional</sup> <a name="PremiumMessagingPartitions" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.premiumMessagingPartitions"></a>

```csharp
public double PremiumMessagingPartitions { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#premium_messaging_partitions ServicebusNamespace#premium_messaging_partitions}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#public_network_access_enabled ServicebusNamespace#public_network_access_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#tags ServicebusNamespace#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.timeouts"></a>

```csharp
public ServicebusNamespaceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts">ServicebusNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#timeouts ServicebusNamespace#timeouts}

---

### ServicebusNamespaceCustomerManagedKey <a name="ServicebusNamespaceCustomerManagedKey" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusNamespaceCustomerManagedKey {
    string IdentityId,
    string KeyVaultKeyId,
    object InfrastructureEncryptionEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey.property.identityId">IdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#identity_id ServicebusNamespace#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#key_vault_key_id ServicebusNamespace#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey.property.infrastructureEncryptionEnabled">InfrastructureEncryptionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#infrastructure_encryption_enabled ServicebusNamespace#infrastructure_encryption_enabled}. |

---

##### `IdentityId`<sup>Required</sup> <a name="IdentityId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey.property.identityId"></a>

```csharp
public string IdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#identity_id ServicebusNamespace#identity_id}.

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#key_vault_key_id ServicebusNamespace#key_vault_key_id}.

---

##### `InfrastructureEncryptionEnabled`<sup>Optional</sup> <a name="InfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey.property.infrastructureEncryptionEnabled"></a>

```csharp
public object InfrastructureEncryptionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#infrastructure_encryption_enabled ServicebusNamespace#infrastructure_encryption_enabled}.

---

### ServicebusNamespaceIdentity <a name="ServicebusNamespaceIdentity" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusNamespaceIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#type ServicebusNamespace#type}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#identity_ids ServicebusNamespace#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#type ServicebusNamespace#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#identity_ids ServicebusNamespace#identity_ids}.

---

### ServicebusNamespaceNetworkRuleSet <a name="ServicebusNamespaceNetworkRuleSet" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusNamespaceNetworkRuleSet {
    string DefaultAction = null,
    string[] IpRules = null,
    object NetworkRules = null,
    object PublicNetworkAccessEnabled = null,
    object TrustedServicesAllowed = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSet.property.defaultAction">DefaultAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#default_action ServicebusNamespace#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSet.property.ipRules">IpRules</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#ip_rules ServicebusNamespace#ip_rules}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSet.property.networkRules">NetworkRules</a></code> | <code>object</code> | network_rules block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSet.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#public_network_access_enabled ServicebusNamespace#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSet.property.trustedServicesAllowed">TrustedServicesAllowed</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#trusted_services_allowed ServicebusNamespace#trusted_services_allowed}. |

---

##### `DefaultAction`<sup>Optional</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSet.property.defaultAction"></a>

```csharp
public string DefaultAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#default_action ServicebusNamespace#default_action}.

---

##### `IpRules`<sup>Optional</sup> <a name="IpRules" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSet.property.ipRules"></a>

```csharp
public string[] IpRules { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#ip_rules ServicebusNamespace#ip_rules}.

---

##### `NetworkRules`<sup>Optional</sup> <a name="NetworkRules" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSet.property.networkRules"></a>

```csharp
public object NetworkRules { get; set; }
```

- *Type:* object

network_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#network_rules ServicebusNamespace#network_rules}

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSet.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#public_network_access_enabled ServicebusNamespace#public_network_access_enabled}.

---

##### `TrustedServicesAllowed`<sup>Optional</sup> <a name="TrustedServicesAllowed" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSet.property.trustedServicesAllowed"></a>

```csharp
public object TrustedServicesAllowed { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#trusted_services_allowed ServicebusNamespace#trusted_services_allowed}.

---

### ServicebusNamespaceNetworkRuleSetNetworkRules <a name="ServicebusNamespaceNetworkRuleSetNetworkRules" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusNamespaceNetworkRuleSetNetworkRules {
    string SubnetId,
    object IgnoreMissingVnetServiceEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRules.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#subnet_id ServicebusNamespace#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRules.property.ignoreMissingVnetServiceEndpoint">IgnoreMissingVnetServiceEndpoint</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#ignore_missing_vnet_service_endpoint ServicebusNamespace#ignore_missing_vnet_service_endpoint}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRules.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#subnet_id ServicebusNamespace#subnet_id}.

---

##### `IgnoreMissingVnetServiceEndpoint`<sup>Optional</sup> <a name="IgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRules.property.ignoreMissingVnetServiceEndpoint"></a>

```csharp
public object IgnoreMissingVnetServiceEndpoint { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#ignore_missing_vnet_service_endpoint ServicebusNamespace#ignore_missing_vnet_service_endpoint}.

---

### ServicebusNamespaceTimeouts <a name="ServicebusNamespaceTimeouts" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusNamespaceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#create ServicebusNamespace#create}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#delete ServicebusNamespace#delete}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#read ServicebusNamespace#read}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#update ServicebusNamespace#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#create ServicebusNamespace#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#delete ServicebusNamespace#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#read ServicebusNamespace#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/servicebus_namespace#update ServicebusNamespace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusNamespaceCustomerManagedKeyOutputReference <a name="ServicebusNamespaceCustomerManagedKeyOutputReference" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusNamespaceCustomerManagedKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.resetInfrastructureEncryptionEnabled">ResetInfrastructureEncryptionEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInfrastructureEncryptionEnabled` <a name="ResetInfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.resetInfrastructureEncryptionEnabled"></a>

```csharp
private void ResetInfrastructureEncryptionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.identityIdInput">IdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.infrastructureEncryptionEnabledInput">InfrastructureEncryptionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.identityId">IdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.infrastructureEncryptionEnabled">InfrastructureEncryptionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey">ServicebusNamespaceCustomerManagedKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityIdInput`<sup>Optional</sup> <a name="IdentityIdInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.identityIdInput"></a>

```csharp
public string IdentityIdInput { get; }
```

- *Type:* string

---

##### `InfrastructureEncryptionEnabledInput`<sup>Optional</sup> <a name="InfrastructureEncryptionEnabledInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.infrastructureEncryptionEnabledInput"></a>

```csharp
public object InfrastructureEncryptionEnabledInput { get; }
```

- *Type:* object

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput"></a>

```csharp
public string KeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `IdentityId`<sup>Required</sup> <a name="IdentityId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.identityId"></a>

```csharp
public string IdentityId { get; }
```

- *Type:* string

---

##### `InfrastructureEncryptionEnabled`<sup>Required</sup> <a name="InfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.infrastructureEncryptionEnabled"></a>

```csharp
public object InfrastructureEncryptionEnabled { get; }
```

- *Type:* object

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.internalValue"></a>

```csharp
public ServicebusNamespaceCustomerManagedKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey">ServicebusNamespaceCustomerManagedKey</a>

---


### ServicebusNamespaceIdentityOutputReference <a name="ServicebusNamespaceIdentityOutputReference" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusNamespaceIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity">ServicebusNamespaceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.internalValue"></a>

```csharp
public ServicebusNamespaceIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity">ServicebusNamespaceIdentity</a>

---


### ServicebusNamespaceNetworkRuleSetNetworkRulesList <a name="ServicebusNamespaceNetworkRuleSetNetworkRulesList" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusNamespaceNetworkRuleSetNetworkRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.get"></a>

```csharp
private ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference <a name="ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.resetIgnoreMissingVnetServiceEndpoint">ResetIgnoreMissingVnetServiceEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreMissingVnetServiceEndpoint` <a name="ResetIgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.resetIgnoreMissingVnetServiceEndpoint"></a>

```csharp
private void ResetIgnoreMissingVnetServiceEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpointInput">IgnoreMissingVnetServiceEndpointInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpoint">IgnoreMissingVnetServiceEndpoint</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IgnoreMissingVnetServiceEndpointInput`<sup>Optional</sup> <a name="IgnoreMissingVnetServiceEndpointInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpointInput"></a>

```csharp
public object IgnoreMissingVnetServiceEndpointInput { get; }
```

- *Type:* object

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `IgnoreMissingVnetServiceEndpoint`<sup>Required</sup> <a name="IgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpoint"></a>

```csharp
public object IgnoreMissingVnetServiceEndpoint { get; }
```

- *Type:* object

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServicebusNamespaceNetworkRuleSetOutputReference <a name="ServicebusNamespaceNetworkRuleSetOutputReference" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusNamespaceNetworkRuleSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.putNetworkRules">PutNetworkRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.resetDefaultAction">ResetDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.resetIpRules">ResetIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.resetNetworkRules">ResetNetworkRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.resetTrustedServicesAllowed">ResetTrustedServicesAllowed</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkRules` <a name="PutNetworkRules" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.putNetworkRules"></a>

```csharp
private void PutNetworkRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.putNetworkRules.parameter.value"></a>

- *Type:* object

---

##### `ResetDefaultAction` <a name="ResetDefaultAction" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.resetDefaultAction"></a>

```csharp
private void ResetDefaultAction()
```

##### `ResetIpRules` <a name="ResetIpRules" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.resetIpRules"></a>

```csharp
private void ResetIpRules()
```

##### `ResetNetworkRules` <a name="ResetNetworkRules" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.resetNetworkRules"></a>

```csharp
private void ResetNetworkRules()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetTrustedServicesAllowed` <a name="ResetTrustedServicesAllowed" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.resetTrustedServicesAllowed"></a>

```csharp
private void ResetTrustedServicesAllowed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.networkRules">NetworkRules</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList">ServicebusNamespaceNetworkRuleSetNetworkRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.defaultActionInput">DefaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.ipRulesInput">IpRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.networkRulesInput">NetworkRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.trustedServicesAllowedInput">TrustedServicesAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.defaultAction">DefaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.ipRules">IpRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.trustedServicesAllowed">TrustedServicesAllowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSet">ServicebusNamespaceNetworkRuleSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkRules`<sup>Required</sup> <a name="NetworkRules" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.networkRules"></a>

```csharp
public ServicebusNamespaceNetworkRuleSetNetworkRulesList NetworkRules { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetNetworkRulesList">ServicebusNamespaceNetworkRuleSetNetworkRulesList</a>

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.defaultActionInput"></a>

```csharp
public string DefaultActionInput { get; }
```

- *Type:* string

---

##### `IpRulesInput`<sup>Optional</sup> <a name="IpRulesInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.ipRulesInput"></a>

```csharp
public string[] IpRulesInput { get; }
```

- *Type:* string[]

---

##### `NetworkRulesInput`<sup>Optional</sup> <a name="NetworkRulesInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.networkRulesInput"></a>

```csharp
public object NetworkRulesInput { get; }
```

- *Type:* object

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.publicNetworkAccessEnabledInput"></a>

```csharp
public object PublicNetworkAccessEnabledInput { get; }
```

- *Type:* object

---

##### `TrustedServicesAllowedInput`<sup>Optional</sup> <a name="TrustedServicesAllowedInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.trustedServicesAllowedInput"></a>

```csharp
public object TrustedServicesAllowedInput { get; }
```

- *Type:* object

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.defaultAction"></a>

```csharp
public string DefaultAction { get; }
```

- *Type:* string

---

##### `IpRules`<sup>Required</sup> <a name="IpRules" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.ipRules"></a>

```csharp
public string[] IpRules { get; }
```

- *Type:* string[]

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; }
```

- *Type:* object

---

##### `TrustedServicesAllowed`<sup>Required</sup> <a name="TrustedServicesAllowed" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.trustedServicesAllowed"></a>

```csharp
public object TrustedServicesAllowed { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSetOutputReference.property.internalValue"></a>

```csharp
public ServicebusNamespaceNetworkRuleSet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceNetworkRuleSet">ServicebusNamespaceNetworkRuleSet</a>

---


### ServicebusNamespaceTimeoutsOutputReference <a name="ServicebusNamespaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusNamespaceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



