# `azurerm_virtual_machine_scale_set_extension`

Refer to the Terraform Registory for docs: [`azurerm_virtual_machine_scale_set_extension`](https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension).

# `virtualMachineScaleSetExtension` Submodule <a name="`virtualMachineScaleSetExtension` Submodule" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineScaleSetExtensionA <a name="VirtualMachineScaleSetExtensionA" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension azurerm_virtual_machine_scale_set_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer"></a>

```typescript
import { virtualMachineScaleSetExtension } from '@cdktf/provider-azurerm'

new virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA(scope: Construct, id: string, config: VirtualMachineScaleSetExtensionAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig">VirtualMachineScaleSetExtensionAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig">VirtualMachineScaleSetExtensionAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putProtectedSettingsFromKeyVault">putProtectedSettingsFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetAutomaticUpgradeEnabled">resetAutomaticUpgradeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetAutoUpgradeMinorVersion">resetAutoUpgradeMinorVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetFailureSuppressionEnabled">resetFailureSuppressionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetForceUpdateTag">resetForceUpdateTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetProtectedSettings">resetProtectedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetProtectedSettingsFromKeyVault">resetProtectedSettingsFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetProvisionAfterExtensions">resetProvisionAfterExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProtectedSettingsFromKeyVault` <a name="putProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putProtectedSettingsFromKeyVault"></a>

```typescript
public putProtectedSettingsFromKeyVault(value: VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putProtectedSettingsFromKeyVault.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putTimeouts"></a>

```typescript
public putTimeouts(value: VirtualMachineScaleSetExtensionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a>

---

##### `resetAutomaticUpgradeEnabled` <a name="resetAutomaticUpgradeEnabled" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetAutomaticUpgradeEnabled"></a>

```typescript
public resetAutomaticUpgradeEnabled(): void
```

##### `resetAutoUpgradeMinorVersion` <a name="resetAutoUpgradeMinorVersion" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetAutoUpgradeMinorVersion"></a>

```typescript
public resetAutoUpgradeMinorVersion(): void
```

##### `resetFailureSuppressionEnabled` <a name="resetFailureSuppressionEnabled" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetFailureSuppressionEnabled"></a>

```typescript
public resetFailureSuppressionEnabled(): void
```

##### `resetForceUpdateTag` <a name="resetForceUpdateTag" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetForceUpdateTag"></a>

```typescript
public resetForceUpdateTag(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProtectedSettings` <a name="resetProtectedSettings" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetProtectedSettings"></a>

```typescript
public resetProtectedSettings(): void
```

##### `resetProtectedSettingsFromKeyVault` <a name="resetProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetProtectedSettingsFromKeyVault"></a>

```typescript
public resetProtectedSettingsFromKeyVault(): void
```

##### `resetProvisionAfterExtensions` <a name="resetProvisionAfterExtensions" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetProvisionAfterExtensions"></a>

```typescript
public resetProvisionAfterExtensions(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isConstruct"></a>

```typescript
import { virtualMachineScaleSetExtension } from '@cdktf/provider-azurerm'

virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformElement"></a>

```typescript
import { virtualMachineScaleSetExtension } from '@cdktf/provider-azurerm'

virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformResource"></a>

```typescript
import { virtualMachineScaleSetExtension } from '@cdktf/provider-azurerm'

virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettingsFromKeyVault">protectedSettingsFromKeyVault</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference">VirtualMachineScaleSetExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.automaticUpgradeEnabledInput">automaticUpgradeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.autoUpgradeMinorVersionInput">autoUpgradeMinorVersionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.failureSuppressionEnabledInput">failureSuppressionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forceUpdateTagInput">forceUpdateTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettingsFromKeyVaultInput">protectedSettingsFromKeyVaultInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettingsInput">protectedSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provisionAfterExtensionsInput">provisionAfterExtensionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.publisherInput">publisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.settingsInput">settingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeHandlerVersionInput">typeHandlerVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.virtualMachineScaleSetIdInput">virtualMachineScaleSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.automaticUpgradeEnabled">automaticUpgradeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.autoUpgradeMinorVersion">autoUpgradeMinorVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.failureSuppressionEnabled">failureSuppressionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forceUpdateTag">forceUpdateTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettings">protectedSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provisionAfterExtensions">provisionAfterExtensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.publisher">publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.settings">settings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeHandlerVersion">typeHandlerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.virtualMachineScaleSetId">virtualMachineScaleSetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `protectedSettingsFromKeyVault`<sup>Required</sup> <a name="protectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettingsFromKeyVault"></a>

```typescript
public readonly protectedSettingsFromKeyVault: VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualMachineScaleSetExtensionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference">VirtualMachineScaleSetExtensionTimeoutsOutputReference</a>

---

##### `automaticUpgradeEnabledInput`<sup>Optional</sup> <a name="automaticUpgradeEnabledInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.automaticUpgradeEnabledInput"></a>

```typescript
public readonly automaticUpgradeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoUpgradeMinorVersionInput`<sup>Optional</sup> <a name="autoUpgradeMinorVersionInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.autoUpgradeMinorVersionInput"></a>

```typescript
public readonly autoUpgradeMinorVersionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failureSuppressionEnabledInput`<sup>Optional</sup> <a name="failureSuppressionEnabledInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.failureSuppressionEnabledInput"></a>

```typescript
public readonly failureSuppressionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceUpdateTagInput`<sup>Optional</sup> <a name="forceUpdateTagInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forceUpdateTagInput"></a>

```typescript
public readonly forceUpdateTagInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protectedSettingsFromKeyVaultInput`<sup>Optional</sup> <a name="protectedSettingsFromKeyVaultInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettingsFromKeyVaultInput"></a>

```typescript
public readonly protectedSettingsFromKeyVaultInput: VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

---

##### `protectedSettingsInput`<sup>Optional</sup> <a name="protectedSettingsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettingsInput"></a>

```typescript
public readonly protectedSettingsInput: string;
```

- *Type:* string

---

##### `provisionAfterExtensionsInput`<sup>Optional</sup> <a name="provisionAfterExtensionsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provisionAfterExtensionsInput"></a>

```typescript
public readonly provisionAfterExtensionsInput: string[];
```

- *Type:* string[]

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.publisherInput"></a>

```typescript
public readonly publisherInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.settingsInput"></a>

```typescript
public readonly settingsInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VirtualMachineScaleSetExtensionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a>

---

##### `typeHandlerVersionInput`<sup>Optional</sup> <a name="typeHandlerVersionInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeHandlerVersionInput"></a>

```typescript
public readonly typeHandlerVersionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `virtualMachineScaleSetIdInput`<sup>Optional</sup> <a name="virtualMachineScaleSetIdInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.virtualMachineScaleSetIdInput"></a>

```typescript
public readonly virtualMachineScaleSetIdInput: string;
```

- *Type:* string

---

##### `automaticUpgradeEnabled`<sup>Required</sup> <a name="automaticUpgradeEnabled" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.automaticUpgradeEnabled"></a>

```typescript
public readonly automaticUpgradeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoUpgradeMinorVersion`<sup>Required</sup> <a name="autoUpgradeMinorVersion" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.autoUpgradeMinorVersion"></a>

```typescript
public readonly autoUpgradeMinorVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failureSuppressionEnabled`<sup>Required</sup> <a name="failureSuppressionEnabled" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.failureSuppressionEnabled"></a>

```typescript
public readonly failureSuppressionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceUpdateTag`<sup>Required</sup> <a name="forceUpdateTag" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forceUpdateTag"></a>

```typescript
public readonly forceUpdateTag: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protectedSettings`<sup>Required</sup> <a name="protectedSettings" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettings"></a>

```typescript
public readonly protectedSettings: string;
```

- *Type:* string

---

##### `provisionAfterExtensions`<sup>Required</sup> <a name="provisionAfterExtensions" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provisionAfterExtensions"></a>

```typescript
public readonly provisionAfterExtensions: string[];
```

- *Type:* string[]

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.settings"></a>

```typescript
public readonly settings: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `typeHandlerVersion`<sup>Required</sup> <a name="typeHandlerVersion" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeHandlerVersion"></a>

```typescript
public readonly typeHandlerVersion: string;
```

- *Type:* string

---

##### `virtualMachineScaleSetId`<sup>Required</sup> <a name="virtualMachineScaleSetId" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.virtualMachineScaleSetId"></a>

```typescript
public readonly virtualMachineScaleSetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineScaleSetExtensionAConfig <a name="VirtualMachineScaleSetExtensionAConfig" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.Initializer"></a>

```typescript
import { virtualMachineScaleSetExtension } from '@cdktf/provider-azurerm'

const virtualMachineScaleSetExtensionAConfig: virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#name VirtualMachineScaleSetExtensionA#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.publisher">publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#publisher VirtualMachineScaleSetExtensionA#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#type VirtualMachineScaleSetExtensionA#type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.typeHandlerVersion">typeHandlerVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#type_handler_version VirtualMachineScaleSetExtensionA#type_handler_version}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.virtualMachineScaleSetId">virtualMachineScaleSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#virtual_machine_scale_set_id VirtualMachineScaleSetExtensionA#virtual_machine_scale_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.automaticUpgradeEnabled">automaticUpgradeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#automatic_upgrade_enabled VirtualMachineScaleSetExtensionA#automatic_upgrade_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.autoUpgradeMinorVersion">autoUpgradeMinorVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#auto_upgrade_minor_version VirtualMachineScaleSetExtensionA#auto_upgrade_minor_version}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.failureSuppressionEnabled">failureSuppressionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#failure_suppression_enabled VirtualMachineScaleSetExtensionA#failure_suppression_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.forceUpdateTag">forceUpdateTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#force_update_tag VirtualMachineScaleSetExtensionA#force_update_tag}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#id VirtualMachineScaleSetExtensionA#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.protectedSettings">protectedSettings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#protected_settings VirtualMachineScaleSetExtensionA#protected_settings}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.protectedSettingsFromKeyVault">protectedSettingsFromKeyVault</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a></code> | protected_settings_from_key_vault block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.provisionAfterExtensions">provisionAfterExtensions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#provision_after_extensions VirtualMachineScaleSetExtensionA#provision_after_extensions}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.settings">settings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#settings VirtualMachineScaleSetExtensionA#settings}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#name VirtualMachineScaleSetExtensionA#name}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#publisher VirtualMachineScaleSetExtensionA#publisher}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#type VirtualMachineScaleSetExtensionA#type}.

---

##### `typeHandlerVersion`<sup>Required</sup> <a name="typeHandlerVersion" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.typeHandlerVersion"></a>

```typescript
public readonly typeHandlerVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#type_handler_version VirtualMachineScaleSetExtensionA#type_handler_version}.

---

##### `virtualMachineScaleSetId`<sup>Required</sup> <a name="virtualMachineScaleSetId" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.virtualMachineScaleSetId"></a>

```typescript
public readonly virtualMachineScaleSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#virtual_machine_scale_set_id VirtualMachineScaleSetExtensionA#virtual_machine_scale_set_id}.

---

##### `automaticUpgradeEnabled`<sup>Optional</sup> <a name="automaticUpgradeEnabled" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.automaticUpgradeEnabled"></a>

```typescript
public readonly automaticUpgradeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#automatic_upgrade_enabled VirtualMachineScaleSetExtensionA#automatic_upgrade_enabled}.

---

##### `autoUpgradeMinorVersion`<sup>Optional</sup> <a name="autoUpgradeMinorVersion" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.autoUpgradeMinorVersion"></a>

```typescript
public readonly autoUpgradeMinorVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#auto_upgrade_minor_version VirtualMachineScaleSetExtensionA#auto_upgrade_minor_version}.

---

##### `failureSuppressionEnabled`<sup>Optional</sup> <a name="failureSuppressionEnabled" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.failureSuppressionEnabled"></a>

```typescript
public readonly failureSuppressionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#failure_suppression_enabled VirtualMachineScaleSetExtensionA#failure_suppression_enabled}.

---

##### `forceUpdateTag`<sup>Optional</sup> <a name="forceUpdateTag" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.forceUpdateTag"></a>

```typescript
public readonly forceUpdateTag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#force_update_tag VirtualMachineScaleSetExtensionA#force_update_tag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#id VirtualMachineScaleSetExtensionA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protectedSettings`<sup>Optional</sup> <a name="protectedSettings" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.protectedSettings"></a>

```typescript
public readonly protectedSettings: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#protected_settings VirtualMachineScaleSetExtensionA#protected_settings}.

---

##### `protectedSettingsFromKeyVault`<sup>Optional</sup> <a name="protectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.protectedSettingsFromKeyVault"></a>

```typescript
public readonly protectedSettingsFromKeyVault: VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

protected_settings_from_key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#protected_settings_from_key_vault VirtualMachineScaleSetExtensionA#protected_settings_from_key_vault}

---

##### `provisionAfterExtensions`<sup>Optional</sup> <a name="provisionAfterExtensions" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.provisionAfterExtensions"></a>

```typescript
public readonly provisionAfterExtensions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#provision_after_extensions VirtualMachineScaleSetExtensionA#provision_after_extensions}.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.settings"></a>

```typescript
public readonly settings: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#settings VirtualMachineScaleSetExtensionA#settings}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualMachineScaleSetExtensionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#timeouts VirtualMachineScaleSetExtensionA#timeouts}

---

### VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault <a name="VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.Initializer"></a>

```typescript
import { virtualMachineScaleSetExtension } from '@cdktf/provider-azurerm'

const virtualMachineScaleSetExtensionProtectedSettingsFromKeyVault: virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.secretUrl">secretUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#secret_url VirtualMachineScaleSetExtensionA#secret_url}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.sourceVaultId">sourceVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#source_vault_id VirtualMachineScaleSetExtensionA#source_vault_id}. |

---

##### `secretUrl`<sup>Required</sup> <a name="secretUrl" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.secretUrl"></a>

```typescript
public readonly secretUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#secret_url VirtualMachineScaleSetExtensionA#secret_url}.

---

##### `sourceVaultId`<sup>Required</sup> <a name="sourceVaultId" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.sourceVaultId"></a>

```typescript
public readonly sourceVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#source_vault_id VirtualMachineScaleSetExtensionA#source_vault_id}.

---

### VirtualMachineScaleSetExtensionTimeouts <a name="VirtualMachineScaleSetExtensionTimeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.Initializer"></a>

```typescript
import { virtualMachineScaleSetExtension } from '@cdktf/provider-azurerm'

const virtualMachineScaleSetExtensionTimeouts: virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#create VirtualMachineScaleSetExtensionA#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#delete VirtualMachineScaleSetExtensionA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#read VirtualMachineScaleSetExtensionA#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#update VirtualMachineScaleSetExtensionA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#create VirtualMachineScaleSetExtensionA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#delete VirtualMachineScaleSetExtensionA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#read VirtualMachineScaleSetExtensionA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/virtual_machine_scale_set_extension#update VirtualMachineScaleSetExtensionA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference <a name="VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer"></a>

```typescript
import { virtualMachineScaleSetExtension } from '@cdktf/provider-azurerm'

new virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrlInput">secretUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultIdInput">sourceVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrl">secretUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultId">sourceVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretUrlInput`<sup>Optional</sup> <a name="secretUrlInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrlInput"></a>

```typescript
public readonly secretUrlInput: string;
```

- *Type:* string

---

##### `sourceVaultIdInput`<sup>Optional</sup> <a name="sourceVaultIdInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultIdInput"></a>

```typescript
public readonly sourceVaultIdInput: string;
```

- *Type:* string

---

##### `secretUrl`<sup>Required</sup> <a name="secretUrl" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrl"></a>

```typescript
public readonly secretUrl: string;
```

- *Type:* string

---

##### `sourceVaultId`<sup>Required</sup> <a name="sourceVaultId" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultId"></a>

```typescript
public readonly sourceVaultId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

---


### VirtualMachineScaleSetExtensionTimeoutsOutputReference <a name="VirtualMachineScaleSetExtensionTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.Initializer"></a>

```typescript
import { virtualMachineScaleSetExtension } from '@cdktf/provider-azurerm'

new virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualMachineScaleSetExtensionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a>

---



