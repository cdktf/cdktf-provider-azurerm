# `azurerm_service_fabric_managed_cluster`

Refer to the Terraform Registory for docs: [`azurerm_service_fabric_managed_cluster`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster).

# `serviceFabricManagedCluster` Submodule <a name="`serviceFabricManagedCluster` Submodule" id="@cdktf/provider-azurerm.serviceFabricManagedCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceFabricManagedCluster <a name="ServiceFabricManagedCluster" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster azurerm_service_fabric_managed_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedCluster(Construct Scope, string Id, ServiceFabricManagedClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig">ServiceFabricManagedClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig">ServiceFabricManagedClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putCustomFabricSetting">PutCustomFabricSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putLbRule">PutLbRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putNodeType">PutNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetAuthentication">ResetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetBackupServiceEnabled">ResetBackupServiceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetCustomFabricSetting">ResetCustomFabricSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetDnsName">ResetDnsName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetDnsServiceEnabled">ResetDnsServiceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetNodeType">ResetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetSku">ResetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetUpgradeWave">ResetUpgradeWave</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putAuthentication"></a>

```csharp
private void PutAuthentication(ServiceFabricManagedClusterAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication">ServiceFabricManagedClusterAuthentication</a>

---

##### `PutCustomFabricSetting` <a name="PutCustomFabricSetting" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putCustomFabricSetting"></a>

```csharp
private void PutCustomFabricSetting(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putCustomFabricSetting.parameter.value"></a>

- *Type:* object

---

##### `PutLbRule` <a name="PutLbRule" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putLbRule"></a>

```csharp
private void PutLbRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putLbRule.parameter.value"></a>

- *Type:* object

---

##### `PutNodeType` <a name="PutNodeType" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putNodeType"></a>

```csharp
private void PutNodeType(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putNodeType.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(ServiceFabricManagedClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts">ServiceFabricManagedClusterTimeouts</a>

---

##### `ResetAuthentication` <a name="ResetAuthentication" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetAuthentication"></a>

```csharp
private void ResetAuthentication()
```

##### `ResetBackupServiceEnabled` <a name="ResetBackupServiceEnabled" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetBackupServiceEnabled"></a>

```csharp
private void ResetBackupServiceEnabled()
```

##### `ResetCustomFabricSetting` <a name="ResetCustomFabricSetting" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetCustomFabricSetting"></a>

```csharp
private void ResetCustomFabricSetting()
```

##### `ResetDnsName` <a name="ResetDnsName" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetDnsName"></a>

```csharp
private void ResetDnsName()
```

##### `ResetDnsServiceEnabled` <a name="ResetDnsServiceEnabled" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetDnsServiceEnabled"></a>

```csharp
private void ResetDnsServiceEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNodeType` <a name="ResetNodeType" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetNodeType"></a>

```csharp
private void ResetNodeType()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetSku` <a name="ResetSku" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetSku"></a>

```csharp
private void ResetSku()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUpgradeWave` <a name="ResetUpgradeWave" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetUpgradeWave"></a>

```csharp
private void ResetUpgradeWave()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetUsername"></a>

```csharp
private void ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ServiceFabricManagedCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ServiceFabricManagedCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ServiceFabricManagedCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference">ServiceFabricManagedClusterAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.customFabricSetting">CustomFabricSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList">ServiceFabricManagedClusterCustomFabricSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.lbRule">LbRule</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList">ServiceFabricManagedClusterLbRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.nodeType">NodeType</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList">ServiceFabricManagedClusterNodeTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference">ServiceFabricManagedClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.authenticationInput">AuthenticationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication">ServiceFabricManagedClusterAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.backupServiceEnabledInput">BackupServiceEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.clientConnectionPortInput">ClientConnectionPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.customFabricSettingInput">CustomFabricSettingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.dnsNameInput">DnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.dnsServiceEnabledInput">DnsServiceEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.httpGatewayPortInput">HttpGatewayPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.lbRuleInput">LbRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.nodeTypeInput">NodeTypeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.upgradeWaveInput">UpgradeWaveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.backupServiceEnabled">BackupServiceEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.clientConnectionPort">ClientConnectionPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.dnsServiceEnabled">DnsServiceEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.httpGatewayPort">HttpGatewayPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.upgradeWave">UpgradeWave</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.authentication"></a>

```csharp
public ServiceFabricManagedClusterAuthenticationOutputReference Authentication { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference">ServiceFabricManagedClusterAuthenticationOutputReference</a>

---

##### `CustomFabricSetting`<sup>Required</sup> <a name="CustomFabricSetting" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.customFabricSetting"></a>

```csharp
public ServiceFabricManagedClusterCustomFabricSettingList CustomFabricSetting { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList">ServiceFabricManagedClusterCustomFabricSettingList</a>

---

##### `LbRule`<sup>Required</sup> <a name="LbRule" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.lbRule"></a>

```csharp
public ServiceFabricManagedClusterLbRuleList LbRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList">ServiceFabricManagedClusterLbRuleList</a>

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.nodeType"></a>

```csharp
public ServiceFabricManagedClusterNodeTypeList NodeType { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList">ServiceFabricManagedClusterNodeTypeList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.timeouts"></a>

```csharp
public ServiceFabricManagedClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference">ServiceFabricManagedClusterTimeoutsOutputReference</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.authenticationInput"></a>

```csharp
public ServiceFabricManagedClusterAuthentication AuthenticationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication">ServiceFabricManagedClusterAuthentication</a>

---

##### `BackupServiceEnabledInput`<sup>Optional</sup> <a name="BackupServiceEnabledInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.backupServiceEnabledInput"></a>

```csharp
public object BackupServiceEnabledInput { get; }
```

- *Type:* object

---

##### `ClientConnectionPortInput`<sup>Optional</sup> <a name="ClientConnectionPortInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.clientConnectionPortInput"></a>

```csharp
public double ClientConnectionPortInput { get; }
```

- *Type:* double

---

##### `CustomFabricSettingInput`<sup>Optional</sup> <a name="CustomFabricSettingInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.customFabricSettingInput"></a>

```csharp
public object CustomFabricSettingInput { get; }
```

- *Type:* object

---

##### `DnsNameInput`<sup>Optional</sup> <a name="DnsNameInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.dnsNameInput"></a>

```csharp
public string DnsNameInput { get; }
```

- *Type:* string

---

##### `DnsServiceEnabledInput`<sup>Optional</sup> <a name="DnsServiceEnabledInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.dnsServiceEnabledInput"></a>

```csharp
public object DnsServiceEnabledInput { get; }
```

- *Type:* object

---

##### `HttpGatewayPortInput`<sup>Optional</sup> <a name="HttpGatewayPortInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.httpGatewayPortInput"></a>

```csharp
public double HttpGatewayPortInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LbRuleInput`<sup>Optional</sup> <a name="LbRuleInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.lbRuleInput"></a>

```csharp
public object LbRuleInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.nodeTypeInput"></a>

```csharp
public object NodeTypeInput { get; }
```

- *Type:* object

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UpgradeWaveInput`<sup>Optional</sup> <a name="UpgradeWaveInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.upgradeWaveInput"></a>

```csharp
public string UpgradeWaveInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `BackupServiceEnabled`<sup>Required</sup> <a name="BackupServiceEnabled" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.backupServiceEnabled"></a>

```csharp
public object BackupServiceEnabled { get; }
```

- *Type:* object

---

##### `ClientConnectionPort`<sup>Required</sup> <a name="ClientConnectionPort" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.clientConnectionPort"></a>

```csharp
public double ClientConnectionPort { get; }
```

- *Type:* double

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `DnsServiceEnabled`<sup>Required</sup> <a name="DnsServiceEnabled" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.dnsServiceEnabled"></a>

```csharp
public object DnsServiceEnabled { get; }
```

- *Type:* object

---

##### `HttpGatewayPort`<sup>Required</sup> <a name="HttpGatewayPort" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.httpGatewayPort"></a>

```csharp
public double HttpGatewayPort { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UpgradeWave`<sup>Required</sup> <a name="UpgradeWave" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.upgradeWave"></a>

```csharp
public string UpgradeWave { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceFabricManagedClusterAuthentication <a name="ServiceFabricManagedClusterAuthentication" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterAuthentication {
    ServiceFabricManagedClusterAuthenticationActiveDirectory ActiveDirectory = null,
    object Certificate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication.property.activeDirectory">ActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory">ServiceFabricManagedClusterAuthenticationActiveDirectory</a></code> | active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication.property.certificate">Certificate</a></code> | <code>object</code> | certificate block. |

---

##### `ActiveDirectory`<sup>Optional</sup> <a name="ActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication.property.activeDirectory"></a>

```csharp
public ServiceFabricManagedClusterAuthenticationActiveDirectory ActiveDirectory { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory">ServiceFabricManagedClusterAuthenticationActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#active_directory ServiceFabricManagedCluster#active_directory}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication.property.certificate"></a>

```csharp
public object Certificate { get; set; }
```

- *Type:* object

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#certificate ServiceFabricManagedCluster#certificate}

---

### ServiceFabricManagedClusterAuthenticationActiveDirectory <a name="ServiceFabricManagedClusterAuthenticationActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterAuthenticationActiveDirectory {
    string ClientApplicationId,
    string ClusterApplicationId,
    string TenantId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory.property.clientApplicationId">ClientApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#client_application_id ServiceFabricManagedCluster#client_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory.property.clusterApplicationId">ClusterApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#cluster_application_id ServiceFabricManagedCluster#cluster_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#tenant_id ServiceFabricManagedCluster#tenant_id}. |

---

##### `ClientApplicationId`<sup>Required</sup> <a name="ClientApplicationId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory.property.clientApplicationId"></a>

```csharp
public string ClientApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#client_application_id ServiceFabricManagedCluster#client_application_id}.

---

##### `ClusterApplicationId`<sup>Required</sup> <a name="ClusterApplicationId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory.property.clusterApplicationId"></a>

```csharp
public string ClusterApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#cluster_application_id ServiceFabricManagedCluster#cluster_application_id}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#tenant_id ServiceFabricManagedCluster#tenant_id}.

---

### ServiceFabricManagedClusterAuthenticationCertificate <a name="ServiceFabricManagedClusterAuthenticationCertificate" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterAuthenticationCertificate {
    string Thumbprint,
    string Type,
    string CommonName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate.property.thumbprint">Thumbprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#thumbprint ServiceFabricManagedCluster#thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#type ServiceFabricManagedCluster#type}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate.property.commonName">CommonName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#common_name ServiceFabricManagedCluster#common_name}. |

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate.property.thumbprint"></a>

```csharp
public string Thumbprint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#thumbprint ServiceFabricManagedCluster#thumbprint}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#type ServiceFabricManagedCluster#type}.

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate.property.commonName"></a>

```csharp
public string CommonName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#common_name ServiceFabricManagedCluster#common_name}.

---

### ServiceFabricManagedClusterConfig <a name="ServiceFabricManagedClusterConfig" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double ClientConnectionPort,
    double HttpGatewayPort,
    object LbRule,
    string Location,
    string Name,
    string ResourceGroupName,
    ServiceFabricManagedClusterAuthentication Authentication = null,
    object BackupServiceEnabled = null,
    object CustomFabricSetting = null,
    string DnsName = null,
    object DnsServiceEnabled = null,
    string Id = null,
    object NodeType = null,
    string Password = null,
    string Sku = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ServiceFabricManagedClusterTimeouts Timeouts = null,
    string UpgradeWave = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.clientConnectionPort">ClientConnectionPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#client_connection_port ServiceFabricManagedCluster#client_connection_port}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.httpGatewayPort">HttpGatewayPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#http_gateway_port ServiceFabricManagedCluster#http_gateway_port}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.lbRule">LbRule</a></code> | <code>object</code> | lb_rule block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#location ServiceFabricManagedCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#name ServiceFabricManagedCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#resource_group_name ServiceFabricManagedCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication">ServiceFabricManagedClusterAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.backupServiceEnabled">BackupServiceEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#backup_service_enabled ServiceFabricManagedCluster#backup_service_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.customFabricSetting">CustomFabricSetting</a></code> | <code>object</code> | custom_fabric_setting block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.dnsName">DnsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#dns_name ServiceFabricManagedCluster#dns_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.dnsServiceEnabled">DnsServiceEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#dns_service_enabled ServiceFabricManagedCluster#dns_service_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#id ServiceFabricManagedCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.nodeType">NodeType</a></code> | <code>object</code> | node_type block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#password ServiceFabricManagedCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#sku ServiceFabricManagedCluster#sku}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#tags ServiceFabricManagedCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts">ServiceFabricManagedClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.upgradeWave">UpgradeWave</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#upgrade_wave ServiceFabricManagedCluster#upgrade_wave}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#username ServiceFabricManagedCluster#username}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClientConnectionPort`<sup>Required</sup> <a name="ClientConnectionPort" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.clientConnectionPort"></a>

```csharp
public double ClientConnectionPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#client_connection_port ServiceFabricManagedCluster#client_connection_port}.

---

##### `HttpGatewayPort`<sup>Required</sup> <a name="HttpGatewayPort" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.httpGatewayPort"></a>

```csharp
public double HttpGatewayPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#http_gateway_port ServiceFabricManagedCluster#http_gateway_port}.

---

##### `LbRule`<sup>Required</sup> <a name="LbRule" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.lbRule"></a>

```csharp
public object LbRule { get; set; }
```

- *Type:* object

lb_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#lb_rule ServiceFabricManagedCluster#lb_rule}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#location ServiceFabricManagedCluster#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#name ServiceFabricManagedCluster#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#resource_group_name ServiceFabricManagedCluster#resource_group_name}.

---

##### `Authentication`<sup>Optional</sup> <a name="Authentication" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.authentication"></a>

```csharp
public ServiceFabricManagedClusterAuthentication Authentication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication">ServiceFabricManagedClusterAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#authentication ServiceFabricManagedCluster#authentication}

---

##### `BackupServiceEnabled`<sup>Optional</sup> <a name="BackupServiceEnabled" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.backupServiceEnabled"></a>

```csharp
public object BackupServiceEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#backup_service_enabled ServiceFabricManagedCluster#backup_service_enabled}.

---

##### `CustomFabricSetting`<sup>Optional</sup> <a name="CustomFabricSetting" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.customFabricSetting"></a>

```csharp
public object CustomFabricSetting { get; set; }
```

- *Type:* object

custom_fabric_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#custom_fabric_setting ServiceFabricManagedCluster#custom_fabric_setting}

---

##### `DnsName`<sup>Optional</sup> <a name="DnsName" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.dnsName"></a>

```csharp
public string DnsName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#dns_name ServiceFabricManagedCluster#dns_name}.

---

##### `DnsServiceEnabled`<sup>Optional</sup> <a name="DnsServiceEnabled" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.dnsServiceEnabled"></a>

```csharp
public object DnsServiceEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#dns_service_enabled ServiceFabricManagedCluster#dns_service_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#id ServiceFabricManagedCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NodeType`<sup>Optional</sup> <a name="NodeType" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.nodeType"></a>

```csharp
public object NodeType { get; set; }
```

- *Type:* object

node_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#node_type ServiceFabricManagedCluster#node_type}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#password ServiceFabricManagedCluster#password}.

---

##### `Sku`<sup>Optional</sup> <a name="Sku" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#sku ServiceFabricManagedCluster#sku}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#tags ServiceFabricManagedCluster#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.timeouts"></a>

```csharp
public ServiceFabricManagedClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts">ServiceFabricManagedClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#timeouts ServiceFabricManagedCluster#timeouts}

---

##### `UpgradeWave`<sup>Optional</sup> <a name="UpgradeWave" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.upgradeWave"></a>

```csharp
public string UpgradeWave { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#upgrade_wave ServiceFabricManagedCluster#upgrade_wave}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#username ServiceFabricManagedCluster#username}.

---

### ServiceFabricManagedClusterCustomFabricSetting <a name="ServiceFabricManagedClusterCustomFabricSetting" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterCustomFabricSetting {
    string Parameter,
    string Section,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting.property.parameter">Parameter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#parameter ServiceFabricManagedCluster#parameter}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting.property.section">Section</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#section ServiceFabricManagedCluster#section}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#value ServiceFabricManagedCluster#value}. |

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting.property.parameter"></a>

```csharp
public string Parameter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#parameter ServiceFabricManagedCluster#parameter}.

---

##### `Section`<sup>Required</sup> <a name="Section" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting.property.section"></a>

```csharp
public string Section { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#section ServiceFabricManagedCluster#section}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#value ServiceFabricManagedCluster#value}.

---

### ServiceFabricManagedClusterLbRule <a name="ServiceFabricManagedClusterLbRule" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterLbRule {
    double BackendPort,
    double FrontendPort,
    string ProbeProtocol,
    string Protocol,
    string ProbeRequestPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule.property.backendPort">BackendPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#backend_port ServiceFabricManagedCluster#backend_port}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule.property.frontendPort">FrontendPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#frontend_port ServiceFabricManagedCluster#frontend_port}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule.property.probeProtocol">ProbeProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#probe_protocol ServiceFabricManagedCluster#probe_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#protocol ServiceFabricManagedCluster#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule.property.probeRequestPath">ProbeRequestPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#probe_request_path ServiceFabricManagedCluster#probe_request_path}. |

---

##### `BackendPort`<sup>Required</sup> <a name="BackendPort" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule.property.backendPort"></a>

```csharp
public double BackendPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#backend_port ServiceFabricManagedCluster#backend_port}.

---

##### `FrontendPort`<sup>Required</sup> <a name="FrontendPort" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule.property.frontendPort"></a>

```csharp
public double FrontendPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#frontend_port ServiceFabricManagedCluster#frontend_port}.

---

##### `ProbeProtocol`<sup>Required</sup> <a name="ProbeProtocol" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule.property.probeProtocol"></a>

```csharp
public string ProbeProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#probe_protocol ServiceFabricManagedCluster#probe_protocol}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#protocol ServiceFabricManagedCluster#protocol}.

---

##### `ProbeRequestPath`<sup>Optional</sup> <a name="ProbeRequestPath" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule.property.probeRequestPath"></a>

```csharp
public string ProbeRequestPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#probe_request_path ServiceFabricManagedCluster#probe_request_path}.

---

### ServiceFabricManagedClusterNodeType <a name="ServiceFabricManagedClusterNodeType" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterNodeType {
    string ApplicationPortRange,
    double DataDiskSizeGb,
    string EphemeralPortRange,
    string Name,
    string VmImageOffer,
    string VmImagePublisher,
    string VmImageSku,
    string VmImageVersion,
    double VmInstanceCount,
    string VmSize,
    System.Collections.Generic.IDictionary<string, string> Capacities = null,
    string DataDiskType = null,
    object MultiplePlacementGroupsEnabled = null,
    System.Collections.Generic.IDictionary<string, string> PlacementProperties = null,
    object Primary = null,
    object Stateless = null,
    object VmSecrets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.applicationPortRange">ApplicationPortRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#application_port_range ServiceFabricManagedCluster#application_port_range}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.dataDiskSizeGb">DataDiskSizeGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#data_disk_size_gb ServiceFabricManagedCluster#data_disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.ephemeralPortRange">EphemeralPortRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#ephemeral_port_range ServiceFabricManagedCluster#ephemeral_port_range}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#name ServiceFabricManagedCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmImageOffer">VmImageOffer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#vm_image_offer ServiceFabricManagedCluster#vm_image_offer}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmImagePublisher">VmImagePublisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#vm_image_publisher ServiceFabricManagedCluster#vm_image_publisher}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmImageSku">VmImageSku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#vm_image_sku ServiceFabricManagedCluster#vm_image_sku}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmImageVersion">VmImageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#vm_image_version ServiceFabricManagedCluster#vm_image_version}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmInstanceCount">VmInstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#vm_instance_count ServiceFabricManagedCluster#vm_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmSize">VmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#vm_size ServiceFabricManagedCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.capacities">Capacities</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#capacities ServiceFabricManagedCluster#capacities}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.dataDiskType">DataDiskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#data_disk_type ServiceFabricManagedCluster#data_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.multiplePlacementGroupsEnabled">MultiplePlacementGroupsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#multiple_placement_groups_enabled ServiceFabricManagedCluster#multiple_placement_groups_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.placementProperties">PlacementProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#placement_properties ServiceFabricManagedCluster#placement_properties}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.primary">Primary</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#primary ServiceFabricManagedCluster#primary}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.stateless">Stateless</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#stateless ServiceFabricManagedCluster#stateless}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmSecrets">VmSecrets</a></code> | <code>object</code> | vm_secrets block. |

---

##### `ApplicationPortRange`<sup>Required</sup> <a name="ApplicationPortRange" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.applicationPortRange"></a>

```csharp
public string ApplicationPortRange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#application_port_range ServiceFabricManagedCluster#application_port_range}.

---

##### `DataDiskSizeGb`<sup>Required</sup> <a name="DataDiskSizeGb" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.dataDiskSizeGb"></a>

```csharp
public double DataDiskSizeGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#data_disk_size_gb ServiceFabricManagedCluster#data_disk_size_gb}.

---

##### `EphemeralPortRange`<sup>Required</sup> <a name="EphemeralPortRange" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.ephemeralPortRange"></a>

```csharp
public string EphemeralPortRange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#ephemeral_port_range ServiceFabricManagedCluster#ephemeral_port_range}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#name ServiceFabricManagedCluster#name}.

---

##### `VmImageOffer`<sup>Required</sup> <a name="VmImageOffer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmImageOffer"></a>

```csharp
public string VmImageOffer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#vm_image_offer ServiceFabricManagedCluster#vm_image_offer}.

---

##### `VmImagePublisher`<sup>Required</sup> <a name="VmImagePublisher" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmImagePublisher"></a>

```csharp
public string VmImagePublisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#vm_image_publisher ServiceFabricManagedCluster#vm_image_publisher}.

---

##### `VmImageSku`<sup>Required</sup> <a name="VmImageSku" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmImageSku"></a>

```csharp
public string VmImageSku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#vm_image_sku ServiceFabricManagedCluster#vm_image_sku}.

---

##### `VmImageVersion`<sup>Required</sup> <a name="VmImageVersion" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmImageVersion"></a>

```csharp
public string VmImageVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#vm_image_version ServiceFabricManagedCluster#vm_image_version}.

---

##### `VmInstanceCount`<sup>Required</sup> <a name="VmInstanceCount" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmInstanceCount"></a>

```csharp
public double VmInstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#vm_instance_count ServiceFabricManagedCluster#vm_instance_count}.

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmSize"></a>

```csharp
public string VmSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#vm_size ServiceFabricManagedCluster#vm_size}.

---

##### `Capacities`<sup>Optional</sup> <a name="Capacities" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.capacities"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Capacities { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#capacities ServiceFabricManagedCluster#capacities}.

---

##### `DataDiskType`<sup>Optional</sup> <a name="DataDiskType" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.dataDiskType"></a>

```csharp
public string DataDiskType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#data_disk_type ServiceFabricManagedCluster#data_disk_type}.

---

##### `MultiplePlacementGroupsEnabled`<sup>Optional</sup> <a name="MultiplePlacementGroupsEnabled" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.multiplePlacementGroupsEnabled"></a>

```csharp
public object MultiplePlacementGroupsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#multiple_placement_groups_enabled ServiceFabricManagedCluster#multiple_placement_groups_enabled}.

---

##### `PlacementProperties`<sup>Optional</sup> <a name="PlacementProperties" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.placementProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PlacementProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#placement_properties ServiceFabricManagedCluster#placement_properties}.

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.primary"></a>

```csharp
public object Primary { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#primary ServiceFabricManagedCluster#primary}.

---

##### `Stateless`<sup>Optional</sup> <a name="Stateless" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.stateless"></a>

```csharp
public object Stateless { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#stateless ServiceFabricManagedCluster#stateless}.

---

##### `VmSecrets`<sup>Optional</sup> <a name="VmSecrets" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmSecrets"></a>

```csharp
public object VmSecrets { get; set; }
```

- *Type:* object

vm_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#vm_secrets ServiceFabricManagedCluster#vm_secrets}

---

### ServiceFabricManagedClusterNodeTypeVmSecrets <a name="ServiceFabricManagedClusterNodeTypeVmSecrets" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecrets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterNodeTypeVmSecrets {
    object Certificates,
    string VaultId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecrets.property.certificates">Certificates</a></code> | <code>object</code> | certificates block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecrets.property.vaultId">VaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#vault_id ServiceFabricManagedCluster#vault_id}. |

---

##### `Certificates`<sup>Required</sup> <a name="Certificates" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecrets.property.certificates"></a>

```csharp
public object Certificates { get; set; }
```

- *Type:* object

certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#certificates ServiceFabricManagedCluster#certificates}

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecrets.property.vaultId"></a>

```csharp
public string VaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#vault_id ServiceFabricManagedCluster#vault_id}.

---

### ServiceFabricManagedClusterNodeTypeVmSecretsCertificates <a name="ServiceFabricManagedClusterNodeTypeVmSecretsCertificates" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterNodeTypeVmSecretsCertificates {
    string Store,
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificates.property.store">Store</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#store ServiceFabricManagedCluster#store}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificates.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#url ServiceFabricManagedCluster#url}. |

---

##### `Store`<sup>Required</sup> <a name="Store" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificates.property.store"></a>

```csharp
public string Store { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#store ServiceFabricManagedCluster#store}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificates.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#url ServiceFabricManagedCluster#url}.

---

### ServiceFabricManagedClusterTimeouts <a name="ServiceFabricManagedClusterTimeouts" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#create ServiceFabricManagedCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#delete ServiceFabricManagedCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#read ServiceFabricManagedCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#update ServiceFabricManagedCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#create ServiceFabricManagedCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#delete ServiceFabricManagedCluster#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#read ServiceFabricManagedCluster#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/service_fabric_managed_cluster#update ServiceFabricManagedCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference <a name="ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.clientApplicationIdInput">ClientApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.clusterApplicationIdInput">ClusterApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.clientApplicationId">ClientApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.clusterApplicationId">ClusterApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory">ServiceFabricManagedClusterAuthenticationActiveDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientApplicationIdInput`<sup>Optional</sup> <a name="ClientApplicationIdInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.clientApplicationIdInput"></a>

```csharp
public string ClientApplicationIdInput { get; }
```

- *Type:* string

---

##### `ClusterApplicationIdInput`<sup>Optional</sup> <a name="ClusterApplicationIdInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.clusterApplicationIdInput"></a>

```csharp
public string ClusterApplicationIdInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `ClientApplicationId`<sup>Required</sup> <a name="ClientApplicationId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.clientApplicationId"></a>

```csharp
public string ClientApplicationId { get; }
```

- *Type:* string

---

##### `ClusterApplicationId`<sup>Required</sup> <a name="ClusterApplicationId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.clusterApplicationId"></a>

```csharp
public string ClusterApplicationId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.internalValue"></a>

```csharp
public ServiceFabricManagedClusterAuthenticationActiveDirectory InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory">ServiceFabricManagedClusterAuthenticationActiveDirectory</a>

---


### ServiceFabricManagedClusterAuthenticationCertificateList <a name="ServiceFabricManagedClusterAuthenticationCertificateList" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterAuthenticationCertificateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.get"></a>

```csharp
private ServiceFabricManagedClusterAuthenticationCertificateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricManagedClusterAuthenticationCertificateOutputReference <a name="ServiceFabricManagedClusterAuthenticationCertificateOutputReference" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterAuthenticationCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.resetCommonName"></a>

```csharp
private void ResetCommonName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.thumbprintInput">ThumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.commonNameInput"></a>

```csharp
public string CommonNameInput { get; }
```

- *Type:* string

---

##### `ThumbprintInput`<sup>Optional</sup> <a name="ThumbprintInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.thumbprintInput"></a>

```csharp
public string ThumbprintInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricManagedClusterAuthenticationOutputReference <a name="ServiceFabricManagedClusterAuthenticationOutputReference" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.putActiveDirectory">PutActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.putCertificate">PutCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.resetActiveDirectory">ResetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActiveDirectory` <a name="PutActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.putActiveDirectory"></a>

```csharp
private void PutActiveDirectory(ServiceFabricManagedClusterAuthenticationActiveDirectory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.putActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory">ServiceFabricManagedClusterAuthenticationActiveDirectory</a>

---

##### `PutCertificate` <a name="PutCertificate" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.putCertificate"></a>

```csharp
private void PutCertificate(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.putCertificate.parameter.value"></a>

- *Type:* object

---

##### `ResetActiveDirectory` <a name="ResetActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.resetActiveDirectory"></a>

```csharp
private void ResetActiveDirectory()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.activeDirectory">ActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference">ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList">ServiceFabricManagedClusterAuthenticationCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.activeDirectoryInput">ActiveDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory">ServiceFabricManagedClusterAuthenticationActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.certificateInput">CertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication">ServiceFabricManagedClusterAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveDirectory`<sup>Required</sup> <a name="ActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.activeDirectory"></a>

```csharp
public ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference ActiveDirectory { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference">ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference</a>

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.certificate"></a>

```csharp
public ServiceFabricManagedClusterAuthenticationCertificateList Certificate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList">ServiceFabricManagedClusterAuthenticationCertificateList</a>

---

##### `ActiveDirectoryInput`<sup>Optional</sup> <a name="ActiveDirectoryInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.activeDirectoryInput"></a>

```csharp
public ServiceFabricManagedClusterAuthenticationActiveDirectory ActiveDirectoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory">ServiceFabricManagedClusterAuthenticationActiveDirectory</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.certificateInput"></a>

```csharp
public object CertificateInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.internalValue"></a>

```csharp
public ServiceFabricManagedClusterAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication">ServiceFabricManagedClusterAuthentication</a>

---


### ServiceFabricManagedClusterCustomFabricSettingList <a name="ServiceFabricManagedClusterCustomFabricSettingList" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterCustomFabricSettingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.get"></a>

```csharp
private ServiceFabricManagedClusterCustomFabricSettingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricManagedClusterCustomFabricSettingOutputReference <a name="ServiceFabricManagedClusterCustomFabricSettingOutputReference" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterCustomFabricSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.parameterInput">ParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.sectionInput">SectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.parameter">Parameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.section">Section</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.parameterInput"></a>

```csharp
public string ParameterInput { get; }
```

- *Type:* string

---

##### `SectionInput`<sup>Optional</sup> <a name="SectionInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.sectionInput"></a>

```csharp
public string SectionInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.parameter"></a>

```csharp
public string Parameter { get; }
```

- *Type:* string

---

##### `Section`<sup>Required</sup> <a name="Section" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.section"></a>

```csharp
public string Section { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricManagedClusterLbRuleList <a name="ServiceFabricManagedClusterLbRuleList" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterLbRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.get"></a>

```csharp
private ServiceFabricManagedClusterLbRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricManagedClusterLbRuleOutputReference <a name="ServiceFabricManagedClusterLbRuleOutputReference" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterLbRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.resetProbeRequestPath">ResetProbeRequestPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProbeRequestPath` <a name="ResetProbeRequestPath" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.resetProbeRequestPath"></a>

```csharp
private void ResetProbeRequestPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.backendPortInput">BackendPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.frontendPortInput">FrontendPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.probeProtocolInput">ProbeProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.probeRequestPathInput">ProbeRequestPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.backendPort">BackendPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.frontendPort">FrontendPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.probeProtocol">ProbeProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.probeRequestPath">ProbeRequestPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendPortInput`<sup>Optional</sup> <a name="BackendPortInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.backendPortInput"></a>

```csharp
public double BackendPortInput { get; }
```

- *Type:* double

---

##### `FrontendPortInput`<sup>Optional</sup> <a name="FrontendPortInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.frontendPortInput"></a>

```csharp
public double FrontendPortInput { get; }
```

- *Type:* double

---

##### `ProbeProtocolInput`<sup>Optional</sup> <a name="ProbeProtocolInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.probeProtocolInput"></a>

```csharp
public string ProbeProtocolInput { get; }
```

- *Type:* string

---

##### `ProbeRequestPathInput`<sup>Optional</sup> <a name="ProbeRequestPathInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.probeRequestPathInput"></a>

```csharp
public string ProbeRequestPathInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `BackendPort`<sup>Required</sup> <a name="BackendPort" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.backendPort"></a>

```csharp
public double BackendPort { get; }
```

- *Type:* double

---

##### `FrontendPort`<sup>Required</sup> <a name="FrontendPort" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.frontendPort"></a>

```csharp
public double FrontendPort { get; }
```

- *Type:* double

---

##### `ProbeProtocol`<sup>Required</sup> <a name="ProbeProtocol" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.probeProtocol"></a>

```csharp
public string ProbeProtocol { get; }
```

- *Type:* string

---

##### `ProbeRequestPath`<sup>Required</sup> <a name="ProbeRequestPath" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.probeRequestPath"></a>

```csharp
public string ProbeRequestPath { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricManagedClusterNodeTypeList <a name="ServiceFabricManagedClusterNodeTypeList" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterNodeTypeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.get"></a>

```csharp
private ServiceFabricManagedClusterNodeTypeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricManagedClusterNodeTypeOutputReference <a name="ServiceFabricManagedClusterNodeTypeOutputReference" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterNodeTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.putVmSecrets">PutVmSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetCapacities">ResetCapacities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetDataDiskType">ResetDataDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetMultiplePlacementGroupsEnabled">ResetMultiplePlacementGroupsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetPlacementProperties">ResetPlacementProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetStateless">ResetStateless</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetVmSecrets">ResetVmSecrets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVmSecrets` <a name="PutVmSecrets" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.putVmSecrets"></a>

```csharp
private void PutVmSecrets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.putVmSecrets.parameter.value"></a>

- *Type:* object

---

##### `ResetCapacities` <a name="ResetCapacities" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetCapacities"></a>

```csharp
private void ResetCapacities()
```

##### `ResetDataDiskType` <a name="ResetDataDiskType" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetDataDiskType"></a>

```csharp
private void ResetDataDiskType()
```

##### `ResetMultiplePlacementGroupsEnabled` <a name="ResetMultiplePlacementGroupsEnabled" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetMultiplePlacementGroupsEnabled"></a>

```csharp
private void ResetMultiplePlacementGroupsEnabled()
```

##### `ResetPlacementProperties` <a name="ResetPlacementProperties" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetPlacementProperties"></a>

```csharp
private void ResetPlacementProperties()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetPrimary"></a>

```csharp
private void ResetPrimary()
```

##### `ResetStateless` <a name="ResetStateless" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetStateless"></a>

```csharp
private void ResetStateless()
```

##### `ResetVmSecrets` <a name="ResetVmSecrets" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetVmSecrets"></a>

```csharp
private void ResetVmSecrets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmSecrets">VmSecrets</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList">ServiceFabricManagedClusterNodeTypeVmSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.applicationPortRangeInput">ApplicationPortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.capacitiesInput">CapacitiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.dataDiskSizeGbInput">DataDiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.dataDiskTypeInput">DataDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.ephemeralPortRangeInput">EphemeralPortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.multiplePlacementGroupsEnabledInput">MultiplePlacementGroupsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.placementPropertiesInput">PlacementPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.statelessInput">StatelessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageOfferInput">VmImageOfferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImagePublisherInput">VmImagePublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageSkuInput">VmImageSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageVersionInput">VmImageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmInstanceCountInput">VmInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmSecretsInput">VmSecretsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmSizeInput">VmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.applicationPortRange">ApplicationPortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.capacities">Capacities</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.dataDiskSizeGb">DataDiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.dataDiskType">DataDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.ephemeralPortRange">EphemeralPortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.multiplePlacementGroupsEnabled">MultiplePlacementGroupsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.placementProperties">PlacementProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.primary">Primary</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.stateless">Stateless</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageOffer">VmImageOffer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImagePublisher">VmImagePublisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageSku">VmImageSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageVersion">VmImageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmInstanceCount">VmInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmSize">VmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `VmSecrets`<sup>Required</sup> <a name="VmSecrets" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmSecrets"></a>

```csharp
public ServiceFabricManagedClusterNodeTypeVmSecretsList VmSecrets { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList">ServiceFabricManagedClusterNodeTypeVmSecretsList</a>

---

##### `ApplicationPortRangeInput`<sup>Optional</sup> <a name="ApplicationPortRangeInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.applicationPortRangeInput"></a>

```csharp
public string ApplicationPortRangeInput { get; }
```

- *Type:* string

---

##### `CapacitiesInput`<sup>Optional</sup> <a name="CapacitiesInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.capacitiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CapacitiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DataDiskSizeGbInput`<sup>Optional</sup> <a name="DataDiskSizeGbInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.dataDiskSizeGbInput"></a>

```csharp
public double DataDiskSizeGbInput { get; }
```

- *Type:* double

---

##### `DataDiskTypeInput`<sup>Optional</sup> <a name="DataDiskTypeInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.dataDiskTypeInput"></a>

```csharp
public string DataDiskTypeInput { get; }
```

- *Type:* string

---

##### `EphemeralPortRangeInput`<sup>Optional</sup> <a name="EphemeralPortRangeInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.ephemeralPortRangeInput"></a>

```csharp
public string EphemeralPortRangeInput { get; }
```

- *Type:* string

---

##### `MultiplePlacementGroupsEnabledInput`<sup>Optional</sup> <a name="MultiplePlacementGroupsEnabledInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.multiplePlacementGroupsEnabledInput"></a>

```csharp
public object MultiplePlacementGroupsEnabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PlacementPropertiesInput`<sup>Optional</sup> <a name="PlacementPropertiesInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.placementPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PlacementPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.primaryInput"></a>

```csharp
public object PrimaryInput { get; }
```

- *Type:* object

---

##### `StatelessInput`<sup>Optional</sup> <a name="StatelessInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.statelessInput"></a>

```csharp
public object StatelessInput { get; }
```

- *Type:* object

---

##### `VmImageOfferInput`<sup>Optional</sup> <a name="VmImageOfferInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageOfferInput"></a>

```csharp
public string VmImageOfferInput { get; }
```

- *Type:* string

---

##### `VmImagePublisherInput`<sup>Optional</sup> <a name="VmImagePublisherInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImagePublisherInput"></a>

```csharp
public string VmImagePublisherInput { get; }
```

- *Type:* string

---

##### `VmImageSkuInput`<sup>Optional</sup> <a name="VmImageSkuInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageSkuInput"></a>

```csharp
public string VmImageSkuInput { get; }
```

- *Type:* string

---

##### `VmImageVersionInput`<sup>Optional</sup> <a name="VmImageVersionInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageVersionInput"></a>

```csharp
public string VmImageVersionInput { get; }
```

- *Type:* string

---

##### `VmInstanceCountInput`<sup>Optional</sup> <a name="VmInstanceCountInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmInstanceCountInput"></a>

```csharp
public double VmInstanceCountInput { get; }
```

- *Type:* double

---

##### `VmSecretsInput`<sup>Optional</sup> <a name="VmSecretsInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmSecretsInput"></a>

```csharp
public object VmSecretsInput { get; }
```

- *Type:* object

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmSizeInput"></a>

```csharp
public string VmSizeInput { get; }
```

- *Type:* string

---

##### `ApplicationPortRange`<sup>Required</sup> <a name="ApplicationPortRange" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.applicationPortRange"></a>

```csharp
public string ApplicationPortRange { get; }
```

- *Type:* string

---

##### `Capacities`<sup>Required</sup> <a name="Capacities" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.capacities"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Capacities { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DataDiskSizeGb`<sup>Required</sup> <a name="DataDiskSizeGb" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.dataDiskSizeGb"></a>

```csharp
public double DataDiskSizeGb { get; }
```

- *Type:* double

---

##### `DataDiskType`<sup>Required</sup> <a name="DataDiskType" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.dataDiskType"></a>

```csharp
public string DataDiskType { get; }
```

- *Type:* string

---

##### `EphemeralPortRange`<sup>Required</sup> <a name="EphemeralPortRange" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.ephemeralPortRange"></a>

```csharp
public string EphemeralPortRange { get; }
```

- *Type:* string

---

##### `MultiplePlacementGroupsEnabled`<sup>Required</sup> <a name="MultiplePlacementGroupsEnabled" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.multiplePlacementGroupsEnabled"></a>

```csharp
public object MultiplePlacementGroupsEnabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PlacementProperties`<sup>Required</sup> <a name="PlacementProperties" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.placementProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PlacementProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.primary"></a>

```csharp
public object Primary { get; }
```

- *Type:* object

---

##### `Stateless`<sup>Required</sup> <a name="Stateless" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.stateless"></a>

```csharp
public object Stateless { get; }
```

- *Type:* object

---

##### `VmImageOffer`<sup>Required</sup> <a name="VmImageOffer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageOffer"></a>

```csharp
public string VmImageOffer { get; }
```

- *Type:* string

---

##### `VmImagePublisher`<sup>Required</sup> <a name="VmImagePublisher" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImagePublisher"></a>

```csharp
public string VmImagePublisher { get; }
```

- *Type:* string

---

##### `VmImageSku`<sup>Required</sup> <a name="VmImageSku" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageSku"></a>

```csharp
public string VmImageSku { get; }
```

- *Type:* string

---

##### `VmImageVersion`<sup>Required</sup> <a name="VmImageVersion" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageVersion"></a>

```csharp
public string VmImageVersion { get; }
```

- *Type:* string

---

##### `VmInstanceCount`<sup>Required</sup> <a name="VmInstanceCount" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmInstanceCount"></a>

```csharp
public double VmInstanceCount { get; }
```

- *Type:* double

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmSize"></a>

```csharp
public string VmSize { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList <a name="ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.get"></a>

```csharp
private ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference <a name="ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.storeInput">StoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.store">Store</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StoreInput`<sup>Optional</sup> <a name="StoreInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.storeInput"></a>

```csharp
public string StoreInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Store`<sup>Required</sup> <a name="Store" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.store"></a>

```csharp
public string Store { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricManagedClusterNodeTypeVmSecretsList <a name="ServiceFabricManagedClusterNodeTypeVmSecretsList" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterNodeTypeVmSecretsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.get"></a>

```csharp
private ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference <a name="ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.putCertificates">PutCertificates</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificates` <a name="PutCertificates" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.putCertificates"></a>

```csharp
private void PutCertificates(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.putCertificates.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.certificates">Certificates</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList">ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.certificatesInput">CertificatesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.vaultIdInput">VaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Certificates`<sup>Required</sup> <a name="Certificates" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.certificates"></a>

```csharp
public ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList Certificates { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList">ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList</a>

---

##### `CertificatesInput`<sup>Optional</sup> <a name="CertificatesInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.certificatesInput"></a>

```csharp
public object CertificatesInput { get; }
```

- *Type:* object

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.vaultIdInput"></a>

```csharp
public string VaultIdInput { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricManagedClusterTimeoutsOutputReference <a name="ServiceFabricManagedClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricManagedClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



