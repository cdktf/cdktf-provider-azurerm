# `azurerm_virtual_machine_scale_set_extension`

Refer to the Terraform Registory for docs: [`azurerm_virtual_machine_scale_set_extension`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension).

# `virtualMachineScaleSetExtension` Submodule <a name="`virtualMachineScaleSetExtension` Submodule" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineScaleSetExtensionA <a name="VirtualMachineScaleSetExtensionA" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension azurerm_virtual_machine_scale_set_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineScaleSetExtensionA(Construct Scope, string Id, VirtualMachineScaleSetExtensionAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig">VirtualMachineScaleSetExtensionAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig">VirtualMachineScaleSetExtensionAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putProtectedSettingsFromKeyVault">PutProtectedSettingsFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetAutomaticUpgradeEnabled">ResetAutomaticUpgradeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetAutoUpgradeMinorVersion">ResetAutoUpgradeMinorVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetFailureSuppressionEnabled">ResetFailureSuppressionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetForceUpdateTag">ResetForceUpdateTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetProtectedSettings">ResetProtectedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetProtectedSettingsFromKeyVault">ResetProtectedSettingsFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetProvisionAfterExtensions">ResetProvisionAfterExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProtectedSettingsFromKeyVault` <a name="PutProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putProtectedSettingsFromKeyVault"></a>

```csharp
private void PutProtectedSettingsFromKeyVault(VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putProtectedSettingsFromKeyVault.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putTimeouts"></a>

```csharp
private void PutTimeouts(VirtualMachineScaleSetExtensionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a>

---

##### `ResetAutomaticUpgradeEnabled` <a name="ResetAutomaticUpgradeEnabled" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetAutomaticUpgradeEnabled"></a>

```csharp
private void ResetAutomaticUpgradeEnabled()
```

##### `ResetAutoUpgradeMinorVersion` <a name="ResetAutoUpgradeMinorVersion" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetAutoUpgradeMinorVersion"></a>

```csharp
private void ResetAutoUpgradeMinorVersion()
```

##### `ResetFailureSuppressionEnabled` <a name="ResetFailureSuppressionEnabled" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetFailureSuppressionEnabled"></a>

```csharp
private void ResetFailureSuppressionEnabled()
```

##### `ResetForceUpdateTag` <a name="ResetForceUpdateTag" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetForceUpdateTag"></a>

```csharp
private void ResetForceUpdateTag()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProtectedSettings` <a name="ResetProtectedSettings" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetProtectedSettings"></a>

```csharp
private void ResetProtectedSettings()
```

##### `ResetProtectedSettingsFromKeyVault` <a name="ResetProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetProtectedSettingsFromKeyVault"></a>

```csharp
private void ResetProtectedSettingsFromKeyVault()
```

##### `ResetProvisionAfterExtensions` <a name="ResetProvisionAfterExtensions" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetProvisionAfterExtensions"></a>

```csharp
private void ResetProvisionAfterExtensions()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetSettings"></a>

```csharp
private void ResetSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualMachineScaleSetExtensionA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualMachineScaleSetExtensionA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualMachineScaleSetExtensionA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettingsFromKeyVault">ProtectedSettingsFromKeyVault</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference">VirtualMachineScaleSetExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.automaticUpgradeEnabledInput">AutomaticUpgradeEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.autoUpgradeMinorVersionInput">AutoUpgradeMinorVersionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.failureSuppressionEnabledInput">FailureSuppressionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forceUpdateTagInput">ForceUpdateTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettingsFromKeyVaultInput">ProtectedSettingsFromKeyVaultInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettingsInput">ProtectedSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provisionAfterExtensionsInput">ProvisionAfterExtensionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.publisherInput">PublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.settingsInput">SettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeHandlerVersionInput">TypeHandlerVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.virtualMachineScaleSetIdInput">VirtualMachineScaleSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.automaticUpgradeEnabled">AutomaticUpgradeEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.autoUpgradeMinorVersion">AutoUpgradeMinorVersion</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.failureSuppressionEnabled">FailureSuppressionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forceUpdateTag">ForceUpdateTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettings">ProtectedSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provisionAfterExtensions">ProvisionAfterExtensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.settings">Settings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeHandlerVersion">TypeHandlerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.virtualMachineScaleSetId">VirtualMachineScaleSetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ProtectedSettingsFromKeyVault`<sup>Required</sup> <a name="ProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettingsFromKeyVault"></a>

```csharp
public VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference ProtectedSettingsFromKeyVault { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.timeouts"></a>

```csharp
public VirtualMachineScaleSetExtensionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference">VirtualMachineScaleSetExtensionTimeoutsOutputReference</a>

---

##### `AutomaticUpgradeEnabledInput`<sup>Optional</sup> <a name="AutomaticUpgradeEnabledInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.automaticUpgradeEnabledInput"></a>

```csharp
public object AutomaticUpgradeEnabledInput { get; }
```

- *Type:* object

---

##### `AutoUpgradeMinorVersionInput`<sup>Optional</sup> <a name="AutoUpgradeMinorVersionInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.autoUpgradeMinorVersionInput"></a>

```csharp
public object AutoUpgradeMinorVersionInput { get; }
```

- *Type:* object

---

##### `FailureSuppressionEnabledInput`<sup>Optional</sup> <a name="FailureSuppressionEnabledInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.failureSuppressionEnabledInput"></a>

```csharp
public object FailureSuppressionEnabledInput { get; }
```

- *Type:* object

---

##### `ForceUpdateTagInput`<sup>Optional</sup> <a name="ForceUpdateTagInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forceUpdateTagInput"></a>

```csharp
public string ForceUpdateTagInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtectedSettingsFromKeyVaultInput`<sup>Optional</sup> <a name="ProtectedSettingsFromKeyVaultInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettingsFromKeyVaultInput"></a>

```csharp
public VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault ProtectedSettingsFromKeyVaultInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

---

##### `ProtectedSettingsInput`<sup>Optional</sup> <a name="ProtectedSettingsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettingsInput"></a>

```csharp
public string ProtectedSettingsInput { get; }
```

- *Type:* string

---

##### `ProvisionAfterExtensionsInput`<sup>Optional</sup> <a name="ProvisionAfterExtensionsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provisionAfterExtensionsInput"></a>

```csharp
public string[] ProvisionAfterExtensionsInput { get; }
```

- *Type:* string[]

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.publisherInput"></a>

```csharp
public string PublisherInput { get; }
```

- *Type:* string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.settingsInput"></a>

```csharp
public string SettingsInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeHandlerVersionInput`<sup>Optional</sup> <a name="TypeHandlerVersionInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeHandlerVersionInput"></a>

```csharp
public string TypeHandlerVersionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VirtualMachineScaleSetIdInput`<sup>Optional</sup> <a name="VirtualMachineScaleSetIdInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.virtualMachineScaleSetIdInput"></a>

```csharp
public string VirtualMachineScaleSetIdInput { get; }
```

- *Type:* string

---

##### `AutomaticUpgradeEnabled`<sup>Required</sup> <a name="AutomaticUpgradeEnabled" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.automaticUpgradeEnabled"></a>

```csharp
public object AutomaticUpgradeEnabled { get; }
```

- *Type:* object

---

##### `AutoUpgradeMinorVersion`<sup>Required</sup> <a name="AutoUpgradeMinorVersion" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.autoUpgradeMinorVersion"></a>

```csharp
public object AutoUpgradeMinorVersion { get; }
```

- *Type:* object

---

##### `FailureSuppressionEnabled`<sup>Required</sup> <a name="FailureSuppressionEnabled" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.failureSuppressionEnabled"></a>

```csharp
public object FailureSuppressionEnabled { get; }
```

- *Type:* object

---

##### `ForceUpdateTag`<sup>Required</sup> <a name="ForceUpdateTag" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forceUpdateTag"></a>

```csharp
public string ForceUpdateTag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProtectedSettings`<sup>Required</sup> <a name="ProtectedSettings" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettings"></a>

```csharp
public string ProtectedSettings { get; }
```

- *Type:* string

---

##### `ProvisionAfterExtensions`<sup>Required</sup> <a name="ProvisionAfterExtensions" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provisionAfterExtensions"></a>

```csharp
public string[] ProvisionAfterExtensions { get; }
```

- *Type:* string[]

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.settings"></a>

```csharp
public string Settings { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `TypeHandlerVersion`<sup>Required</sup> <a name="TypeHandlerVersion" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeHandlerVersion"></a>

```csharp
public string TypeHandlerVersion { get; }
```

- *Type:* string

---

##### `VirtualMachineScaleSetId`<sup>Required</sup> <a name="VirtualMachineScaleSetId" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.virtualMachineScaleSetId"></a>

```csharp
public string VirtualMachineScaleSetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineScaleSetExtensionAConfig <a name="VirtualMachineScaleSetExtensionAConfig" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineScaleSetExtensionAConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Publisher,
    string Type,
    string TypeHandlerVersion,
    string VirtualMachineScaleSetId,
    object AutomaticUpgradeEnabled = null,
    object AutoUpgradeMinorVersion = null,
    object FailureSuppressionEnabled = null,
    string ForceUpdateTag = null,
    string Id = null,
    string ProtectedSettings = null,
    VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault ProtectedSettingsFromKeyVault = null,
    string[] ProvisionAfterExtensions = null,
    string Settings = null,
    VirtualMachineScaleSetExtensionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#name VirtualMachineScaleSetExtensionA#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.publisher">Publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#publisher VirtualMachineScaleSetExtensionA#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#type VirtualMachineScaleSetExtensionA#type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.typeHandlerVersion">TypeHandlerVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#type_handler_version VirtualMachineScaleSetExtensionA#type_handler_version}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.virtualMachineScaleSetId">VirtualMachineScaleSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#virtual_machine_scale_set_id VirtualMachineScaleSetExtensionA#virtual_machine_scale_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.automaticUpgradeEnabled">AutomaticUpgradeEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#automatic_upgrade_enabled VirtualMachineScaleSetExtensionA#automatic_upgrade_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.autoUpgradeMinorVersion">AutoUpgradeMinorVersion</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#auto_upgrade_minor_version VirtualMachineScaleSetExtensionA#auto_upgrade_minor_version}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.failureSuppressionEnabled">FailureSuppressionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#failure_suppression_enabled VirtualMachineScaleSetExtensionA#failure_suppression_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.forceUpdateTag">ForceUpdateTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#force_update_tag VirtualMachineScaleSetExtensionA#force_update_tag}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#id VirtualMachineScaleSetExtensionA#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.protectedSettings">ProtectedSettings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#protected_settings VirtualMachineScaleSetExtensionA#protected_settings}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.protectedSettingsFromKeyVault">ProtectedSettingsFromKeyVault</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a></code> | protected_settings_from_key_vault block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.provisionAfterExtensions">ProvisionAfterExtensions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#provision_after_extensions VirtualMachineScaleSetExtensionA#provision_after_extensions}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.settings">Settings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#settings VirtualMachineScaleSetExtensionA#settings}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#name VirtualMachineScaleSetExtensionA#name}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.publisher"></a>

```csharp
public string Publisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#publisher VirtualMachineScaleSetExtensionA#publisher}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#type VirtualMachineScaleSetExtensionA#type}.

---

##### `TypeHandlerVersion`<sup>Required</sup> <a name="TypeHandlerVersion" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.typeHandlerVersion"></a>

```csharp
public string TypeHandlerVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#type_handler_version VirtualMachineScaleSetExtensionA#type_handler_version}.

---

##### `VirtualMachineScaleSetId`<sup>Required</sup> <a name="VirtualMachineScaleSetId" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.virtualMachineScaleSetId"></a>

```csharp
public string VirtualMachineScaleSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#virtual_machine_scale_set_id VirtualMachineScaleSetExtensionA#virtual_machine_scale_set_id}.

---

##### `AutomaticUpgradeEnabled`<sup>Optional</sup> <a name="AutomaticUpgradeEnabled" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.automaticUpgradeEnabled"></a>

```csharp
public object AutomaticUpgradeEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#automatic_upgrade_enabled VirtualMachineScaleSetExtensionA#automatic_upgrade_enabled}.

---

##### `AutoUpgradeMinorVersion`<sup>Optional</sup> <a name="AutoUpgradeMinorVersion" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.autoUpgradeMinorVersion"></a>

```csharp
public object AutoUpgradeMinorVersion { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#auto_upgrade_minor_version VirtualMachineScaleSetExtensionA#auto_upgrade_minor_version}.

---

##### `FailureSuppressionEnabled`<sup>Optional</sup> <a name="FailureSuppressionEnabled" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.failureSuppressionEnabled"></a>

```csharp
public object FailureSuppressionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#failure_suppression_enabled VirtualMachineScaleSetExtensionA#failure_suppression_enabled}.

---

##### `ForceUpdateTag`<sup>Optional</sup> <a name="ForceUpdateTag" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.forceUpdateTag"></a>

```csharp
public string ForceUpdateTag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#force_update_tag VirtualMachineScaleSetExtensionA#force_update_tag}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#id VirtualMachineScaleSetExtensionA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProtectedSettings`<sup>Optional</sup> <a name="ProtectedSettings" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.protectedSettings"></a>

```csharp
public string ProtectedSettings { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#protected_settings VirtualMachineScaleSetExtensionA#protected_settings}.

---

##### `ProtectedSettingsFromKeyVault`<sup>Optional</sup> <a name="ProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.protectedSettingsFromKeyVault"></a>

```csharp
public VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault ProtectedSettingsFromKeyVault { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

protected_settings_from_key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#protected_settings_from_key_vault VirtualMachineScaleSetExtensionA#protected_settings_from_key_vault}

---

##### `ProvisionAfterExtensions`<sup>Optional</sup> <a name="ProvisionAfterExtensions" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.provisionAfterExtensions"></a>

```csharp
public string[] ProvisionAfterExtensions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#provision_after_extensions VirtualMachineScaleSetExtensionA#provision_after_extensions}.

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.settings"></a>

```csharp
public string Settings { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#settings VirtualMachineScaleSetExtensionA#settings}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.timeouts"></a>

```csharp
public VirtualMachineScaleSetExtensionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#timeouts VirtualMachineScaleSetExtensionA#timeouts}

---

### VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault <a name="VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault {
    string SecretUrl,
    string SourceVaultId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.secretUrl">SecretUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#secret_url VirtualMachineScaleSetExtensionA#secret_url}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.sourceVaultId">SourceVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#source_vault_id VirtualMachineScaleSetExtensionA#source_vault_id}. |

---

##### `SecretUrl`<sup>Required</sup> <a name="SecretUrl" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.secretUrl"></a>

```csharp
public string SecretUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#secret_url VirtualMachineScaleSetExtensionA#secret_url}.

---

##### `SourceVaultId`<sup>Required</sup> <a name="SourceVaultId" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.sourceVaultId"></a>

```csharp
public string SourceVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#source_vault_id VirtualMachineScaleSetExtensionA#source_vault_id}.

---

### VirtualMachineScaleSetExtensionTimeouts <a name="VirtualMachineScaleSetExtensionTimeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineScaleSetExtensionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#create VirtualMachineScaleSetExtensionA#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#delete VirtualMachineScaleSetExtensionA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#read VirtualMachineScaleSetExtensionA#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#update VirtualMachineScaleSetExtensionA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#create VirtualMachineScaleSetExtensionA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#delete VirtualMachineScaleSetExtensionA#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#read VirtualMachineScaleSetExtensionA#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/virtual_machine_scale_set_extension#update VirtualMachineScaleSetExtensionA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference <a name="VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrlInput">SecretUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultIdInput">SourceVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrl">SecretUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultId">SourceVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretUrlInput`<sup>Optional</sup> <a name="SecretUrlInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrlInput"></a>

```csharp
public string SecretUrlInput { get; }
```

- *Type:* string

---

##### `SourceVaultIdInput`<sup>Optional</sup> <a name="SourceVaultIdInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultIdInput"></a>

```csharp
public string SourceVaultIdInput { get; }
```

- *Type:* string

---

##### `SecretUrl`<sup>Required</sup> <a name="SecretUrl" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrl"></a>

```csharp
public string SecretUrl { get; }
```

- *Type:* string

---

##### `SourceVaultId`<sup>Required</sup> <a name="SourceVaultId" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultId"></a>

```csharp
public string SourceVaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.internalValue"></a>

```csharp
public VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

---


### VirtualMachineScaleSetExtensionTimeoutsOutputReference <a name="VirtualMachineScaleSetExtensionTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineScaleSetExtensionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



