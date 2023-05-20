# `azurerm_maintenance_configuration`

Refer to the Terraform Registory for docs: [`azurerm_maintenance_configuration`](https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration).

# `maintenanceConfiguration` Submodule <a name="`maintenanceConfiguration` Submodule" id="@cdktf/provider-azurerm.maintenanceConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaintenanceConfiguration <a name="MaintenanceConfiguration" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration azurerm_maintenance_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer"></a>

```typescript
import { maintenanceConfiguration } from '@cdktf/provider-azurerm'

new maintenanceConfiguration.MaintenanceConfiguration(scope: Construct, id: string, config: MaintenanceConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig">MaintenanceConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig">MaintenanceConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putInstallPatches">putInstallPatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putWindow">putWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetInGuestUserPatchMode">resetInGuestUserPatchMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetInstallPatches">resetInstallPatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetVisibility">resetVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetWindow">resetWindow</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putInstallPatches` <a name="putInstallPatches" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putInstallPatches"></a>

```typescript
public putInstallPatches(value: MaintenanceConfigurationInstallPatches): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putInstallPatches.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches">MaintenanceConfigurationInstallPatches</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putTimeouts"></a>

```typescript
public putTimeouts(value: MaintenanceConfigurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts">MaintenanceConfigurationTimeouts</a>

---

##### `putWindow` <a name="putWindow" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putWindow"></a>

```typescript
public putWindow(value: MaintenanceConfigurationWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow">MaintenanceConfigurationWindow</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInGuestUserPatchMode` <a name="resetInGuestUserPatchMode" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetInGuestUserPatchMode"></a>

```typescript
public resetInGuestUserPatchMode(): void
```

##### `resetInstallPatches` <a name="resetInstallPatches" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetInstallPatches"></a>

```typescript
public resetInstallPatches(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetVisibility"></a>

```typescript
public resetVisibility(): void
```

##### `resetWindow` <a name="resetWindow" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetWindow"></a>

```typescript
public resetWindow(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isConstruct"></a>

```typescript
import { maintenanceConfiguration } from '@cdktf/provider-azurerm'

maintenanceConfiguration.MaintenanceConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isTerraformElement"></a>

```typescript
import { maintenanceConfiguration } from '@cdktf/provider-azurerm'

maintenanceConfiguration.MaintenanceConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isTerraformResource"></a>

```typescript
import { maintenanceConfiguration } from '@cdktf/provider-azurerm'

maintenanceConfiguration.MaintenanceConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.installPatches">installPatches</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference">MaintenanceConfigurationInstallPatchesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference">MaintenanceConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.window">window</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference">MaintenanceConfigurationWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.inGuestUserPatchModeInput">inGuestUserPatchModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.installPatchesInput">installPatchesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches">MaintenanceConfigurationInstallPatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts">MaintenanceConfigurationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.visibilityInput">visibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.windowInput">windowInput</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow">MaintenanceConfigurationWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.inGuestUserPatchMode">inGuestUserPatchMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `installPatches`<sup>Required</sup> <a name="installPatches" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.installPatches"></a>

```typescript
public readonly installPatches: MaintenanceConfigurationInstallPatchesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference">MaintenanceConfigurationInstallPatchesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.timeouts"></a>

```typescript
public readonly timeouts: MaintenanceConfigurationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference">MaintenanceConfigurationTimeoutsOutputReference</a>

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.window"></a>

```typescript
public readonly window: MaintenanceConfigurationWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference">MaintenanceConfigurationWindowOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inGuestUserPatchModeInput`<sup>Optional</sup> <a name="inGuestUserPatchModeInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.inGuestUserPatchModeInput"></a>

```typescript
public readonly inGuestUserPatchModeInput: string;
```

- *Type:* string

---

##### `installPatchesInput`<sup>Optional</sup> <a name="installPatchesInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.installPatchesInput"></a>

```typescript
public readonly installPatchesInput: MaintenanceConfigurationInstallPatches;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches">MaintenanceConfigurationInstallPatches</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: MaintenanceConfigurationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts">MaintenanceConfigurationTimeouts</a> | cdktf.IResolvable

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* string

---

##### `windowInput`<sup>Optional</sup> <a name="windowInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.windowInput"></a>

```typescript
public readonly windowInput: MaintenanceConfigurationWindow;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow">MaintenanceConfigurationWindow</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inGuestUserPatchMode`<sup>Required</sup> <a name="inGuestUserPatchMode" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.inGuestUserPatchMode"></a>

```typescript
public readonly inGuestUserPatchMode: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MaintenanceConfigurationConfig <a name="MaintenanceConfigurationConfig" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.Initializer"></a>

```typescript
import { maintenanceConfiguration } from '@cdktf/provider-azurerm'

const maintenanceConfigurationConfig: maintenanceConfiguration.MaintenanceConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#location MaintenanceConfiguration#location}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#name MaintenanceConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#resource_group_name MaintenanceConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#scope MaintenanceConfiguration#scope}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#id MaintenanceConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.inGuestUserPatchMode">inGuestUserPatchMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#in_guest_user_patch_mode MaintenanceConfiguration#in_guest_user_patch_mode}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.installPatches">installPatches</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches">MaintenanceConfigurationInstallPatches</a></code> | install_patches block. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#properties MaintenanceConfiguration#properties}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#tags MaintenanceConfiguration#tags}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts">MaintenanceConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.visibility">visibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#visibility MaintenanceConfiguration#visibility}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.window">window</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow">MaintenanceConfigurationWindow</a></code> | window block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#location MaintenanceConfiguration#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#name MaintenanceConfiguration#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#resource_group_name MaintenanceConfiguration#resource_group_name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#scope MaintenanceConfiguration#scope}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#id MaintenanceConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inGuestUserPatchMode`<sup>Optional</sup> <a name="inGuestUserPatchMode" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.inGuestUserPatchMode"></a>

```typescript
public readonly inGuestUserPatchMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#in_guest_user_patch_mode MaintenanceConfiguration#in_guest_user_patch_mode}.

---

##### `installPatches`<sup>Optional</sup> <a name="installPatches" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.installPatches"></a>

```typescript
public readonly installPatches: MaintenanceConfigurationInstallPatches;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches">MaintenanceConfigurationInstallPatches</a>

install_patches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#install_patches MaintenanceConfiguration#install_patches}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#properties MaintenanceConfiguration#properties}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#tags MaintenanceConfiguration#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MaintenanceConfigurationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts">MaintenanceConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#timeouts MaintenanceConfiguration#timeouts}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#visibility MaintenanceConfiguration#visibility}.

---

##### `window`<sup>Optional</sup> <a name="window" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.window"></a>

```typescript
public readonly window: MaintenanceConfigurationWindow;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow">MaintenanceConfigurationWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#window MaintenanceConfiguration#window}

---

### MaintenanceConfigurationInstallPatches <a name="MaintenanceConfigurationInstallPatches" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches.Initializer"></a>

```typescript
import { maintenanceConfiguration } from '@cdktf/provider-azurerm'

const maintenanceConfigurationInstallPatches: maintenanceConfiguration.MaintenanceConfigurationInstallPatches = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches.property.linux">linux</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux">MaintenanceConfigurationInstallPatchesLinux</a>[]</code> | linux block. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches.property.reboot">reboot</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#reboot MaintenanceConfiguration#reboot}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches.property.windows">windows</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows">MaintenanceConfigurationInstallPatchesWindows</a>[]</code> | windows block. |

---

##### `linux`<sup>Optional</sup> <a name="linux" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches.property.linux"></a>

```typescript
public readonly linux: IResolvable | MaintenanceConfigurationInstallPatchesLinux[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux">MaintenanceConfigurationInstallPatchesLinux</a>[]

linux block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#linux MaintenanceConfiguration#linux}

---

##### `reboot`<sup>Optional</sup> <a name="reboot" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches.property.reboot"></a>

```typescript
public readonly reboot: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#reboot MaintenanceConfiguration#reboot}.

---

##### `windows`<sup>Optional</sup> <a name="windows" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches.property.windows"></a>

```typescript
public readonly windows: IResolvable | MaintenanceConfigurationInstallPatchesWindows[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows">MaintenanceConfigurationInstallPatchesWindows</a>[]

windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#windows MaintenanceConfiguration#windows}

---

### MaintenanceConfigurationInstallPatchesLinux <a name="MaintenanceConfigurationInstallPatchesLinux" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux.Initializer"></a>

```typescript
import { maintenanceConfiguration } from '@cdktf/provider-azurerm'

const maintenanceConfigurationInstallPatchesLinux: maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux.property.classificationsToInclude">classificationsToInclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#classifications_to_include MaintenanceConfiguration#classifications_to_include}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux.property.packageNamesMaskToExclude">packageNamesMaskToExclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#package_names_mask_to_exclude MaintenanceConfiguration#package_names_mask_to_exclude}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux.property.packageNamesMaskToInclude">packageNamesMaskToInclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#package_names_mask_to_include MaintenanceConfiguration#package_names_mask_to_include}. |

---

##### `classificationsToInclude`<sup>Optional</sup> <a name="classificationsToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux.property.classificationsToInclude"></a>

```typescript
public readonly classificationsToInclude: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#classifications_to_include MaintenanceConfiguration#classifications_to_include}.

---

##### `packageNamesMaskToExclude`<sup>Optional</sup> <a name="packageNamesMaskToExclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux.property.packageNamesMaskToExclude"></a>

```typescript
public readonly packageNamesMaskToExclude: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#package_names_mask_to_exclude MaintenanceConfiguration#package_names_mask_to_exclude}.

---

##### `packageNamesMaskToInclude`<sup>Optional</sup> <a name="packageNamesMaskToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux.property.packageNamesMaskToInclude"></a>

```typescript
public readonly packageNamesMaskToInclude: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#package_names_mask_to_include MaintenanceConfiguration#package_names_mask_to_include}.

---

### MaintenanceConfigurationInstallPatchesWindows <a name="MaintenanceConfigurationInstallPatchesWindows" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows.Initializer"></a>

```typescript
import { maintenanceConfiguration } from '@cdktf/provider-azurerm'

const maintenanceConfigurationInstallPatchesWindows: maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows.property.classificationsToInclude">classificationsToInclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#classifications_to_include MaintenanceConfiguration#classifications_to_include}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows.property.kbNumbersToExclude">kbNumbersToExclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#kb_numbers_to_exclude MaintenanceConfiguration#kb_numbers_to_exclude}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows.property.kbNumbersToInclude">kbNumbersToInclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#kb_numbers_to_include MaintenanceConfiguration#kb_numbers_to_include}. |

---

##### `classificationsToInclude`<sup>Optional</sup> <a name="classificationsToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows.property.classificationsToInclude"></a>

```typescript
public readonly classificationsToInclude: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#classifications_to_include MaintenanceConfiguration#classifications_to_include}.

---

##### `kbNumbersToExclude`<sup>Optional</sup> <a name="kbNumbersToExclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows.property.kbNumbersToExclude"></a>

```typescript
public readonly kbNumbersToExclude: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#kb_numbers_to_exclude MaintenanceConfiguration#kb_numbers_to_exclude}.

---

##### `kbNumbersToInclude`<sup>Optional</sup> <a name="kbNumbersToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows.property.kbNumbersToInclude"></a>

```typescript
public readonly kbNumbersToInclude: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#kb_numbers_to_include MaintenanceConfiguration#kb_numbers_to_include}.

---

### MaintenanceConfigurationTimeouts <a name="MaintenanceConfigurationTimeouts" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.Initializer"></a>

```typescript
import { maintenanceConfiguration } from '@cdktf/provider-azurerm'

const maintenanceConfigurationTimeouts: maintenanceConfiguration.MaintenanceConfigurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#create MaintenanceConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#delete MaintenanceConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#read MaintenanceConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#update MaintenanceConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#create MaintenanceConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#delete MaintenanceConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#read MaintenanceConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#update MaintenanceConfiguration#update}.

---

### MaintenanceConfigurationWindow <a name="MaintenanceConfigurationWindow" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.Initializer"></a>

```typescript
import { maintenanceConfiguration } from '@cdktf/provider-azurerm'

const maintenanceConfigurationWindow: maintenanceConfiguration.MaintenanceConfigurationWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.startDateTime">startDateTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#start_date_time MaintenanceConfiguration#start_date_time}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#time_zone MaintenanceConfiguration#time_zone}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#duration MaintenanceConfiguration#duration}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.expirationDateTime">expirationDateTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#expiration_date_time MaintenanceConfiguration#expiration_date_time}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.recurEvery">recurEvery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#recur_every MaintenanceConfiguration#recur_every}. |

---

##### `startDateTime`<sup>Required</sup> <a name="startDateTime" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.startDateTime"></a>

```typescript
public readonly startDateTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#start_date_time MaintenanceConfiguration#start_date_time}.

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#time_zone MaintenanceConfiguration#time_zone}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#duration MaintenanceConfiguration#duration}.

---

##### `expirationDateTime`<sup>Optional</sup> <a name="expirationDateTime" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.expirationDateTime"></a>

```typescript
public readonly expirationDateTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#expiration_date_time MaintenanceConfiguration#expiration_date_time}.

---

##### `recurEvery`<sup>Optional</sup> <a name="recurEvery" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.recurEvery"></a>

```typescript
public readonly recurEvery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_configuration#recur_every MaintenanceConfiguration#recur_every}.

---

## Classes <a name="Classes" id="Classes"></a>

### MaintenanceConfigurationInstallPatchesLinuxList <a name="MaintenanceConfigurationInstallPatchesLinuxList" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.Initializer"></a>

```typescript
import { maintenanceConfiguration } from '@cdktf/provider-azurerm'

new maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.get"></a>

```typescript
public get(index: number): MaintenanceConfigurationInstallPatchesLinuxOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux">MaintenanceConfigurationInstallPatchesLinux</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MaintenanceConfigurationInstallPatchesLinux[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux">MaintenanceConfigurationInstallPatchesLinux</a>[]

---


### MaintenanceConfigurationInstallPatchesLinuxOutputReference <a name="MaintenanceConfigurationInstallPatchesLinuxOutputReference" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer"></a>

```typescript
import { maintenanceConfiguration } from '@cdktf/provider-azurerm'

new maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resetClassificationsToInclude">resetClassificationsToInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resetPackageNamesMaskToExclude">resetPackageNamesMaskToExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resetPackageNamesMaskToInclude">resetPackageNamesMaskToInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassificationsToInclude` <a name="resetClassificationsToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resetClassificationsToInclude"></a>

```typescript
public resetClassificationsToInclude(): void
```

##### `resetPackageNamesMaskToExclude` <a name="resetPackageNamesMaskToExclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resetPackageNamesMaskToExclude"></a>

```typescript
public resetPackageNamesMaskToExclude(): void
```

##### `resetPackageNamesMaskToInclude` <a name="resetPackageNamesMaskToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resetPackageNamesMaskToInclude"></a>

```typescript
public resetPackageNamesMaskToInclude(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.classificationsToIncludeInput">classificationsToIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToExcludeInput">packageNamesMaskToExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToIncludeInput">packageNamesMaskToIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.classificationsToInclude">classificationsToInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToExclude">packageNamesMaskToExclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToInclude">packageNamesMaskToInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux">MaintenanceConfigurationInstallPatchesLinux</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `classificationsToIncludeInput`<sup>Optional</sup> <a name="classificationsToIncludeInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.classificationsToIncludeInput"></a>

```typescript
public readonly classificationsToIncludeInput: string[];
```

- *Type:* string[]

---

##### `packageNamesMaskToExcludeInput`<sup>Optional</sup> <a name="packageNamesMaskToExcludeInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToExcludeInput"></a>

```typescript
public readonly packageNamesMaskToExcludeInput: string[];
```

- *Type:* string[]

---

##### `packageNamesMaskToIncludeInput`<sup>Optional</sup> <a name="packageNamesMaskToIncludeInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToIncludeInput"></a>

```typescript
public readonly packageNamesMaskToIncludeInput: string[];
```

- *Type:* string[]

---

##### `classificationsToInclude`<sup>Required</sup> <a name="classificationsToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.classificationsToInclude"></a>

```typescript
public readonly classificationsToInclude: string[];
```

- *Type:* string[]

---

##### `packageNamesMaskToExclude`<sup>Required</sup> <a name="packageNamesMaskToExclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToExclude"></a>

```typescript
public readonly packageNamesMaskToExclude: string[];
```

- *Type:* string[]

---

##### `packageNamesMaskToInclude`<sup>Required</sup> <a name="packageNamesMaskToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToInclude"></a>

```typescript
public readonly packageNamesMaskToInclude: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MaintenanceConfigurationInstallPatchesLinux | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux">MaintenanceConfigurationInstallPatchesLinux</a> | cdktf.IResolvable

---


### MaintenanceConfigurationInstallPatchesOutputReference <a name="MaintenanceConfigurationInstallPatchesOutputReference" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.Initializer"></a>

```typescript
import { maintenanceConfiguration } from '@cdktf/provider-azurerm'

new maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.putLinux">putLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.putWindows">putWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resetLinux">resetLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resetReboot">resetReboot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resetWindows">resetWindows</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLinux` <a name="putLinux" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.putLinux"></a>

```typescript
public putLinux(value: IResolvable | MaintenanceConfigurationInstallPatchesLinux[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.putLinux.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux">MaintenanceConfigurationInstallPatchesLinux</a>[]

---

##### `putWindows` <a name="putWindows" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.putWindows"></a>

```typescript
public putWindows(value: IResolvable | MaintenanceConfigurationInstallPatchesWindows[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.putWindows.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows">MaintenanceConfigurationInstallPatchesWindows</a>[]

---

##### `resetLinux` <a name="resetLinux" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resetLinux"></a>

```typescript
public resetLinux(): void
```

##### `resetReboot` <a name="resetReboot" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resetReboot"></a>

```typescript
public resetReboot(): void
```

##### `resetWindows` <a name="resetWindows" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resetWindows"></a>

```typescript
public resetWindows(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.linux">linux</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList">MaintenanceConfigurationInstallPatchesLinuxList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.windows">windows</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList">MaintenanceConfigurationInstallPatchesWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.linuxInput">linuxInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux">MaintenanceConfigurationInstallPatchesLinux</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.rebootInput">rebootInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.windowsInput">windowsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows">MaintenanceConfigurationInstallPatchesWindows</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.reboot">reboot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches">MaintenanceConfigurationInstallPatches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `linux`<sup>Required</sup> <a name="linux" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.linux"></a>

```typescript
public readonly linux: MaintenanceConfigurationInstallPatchesLinuxList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList">MaintenanceConfigurationInstallPatchesLinuxList</a>

---

##### `windows`<sup>Required</sup> <a name="windows" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.windows"></a>

```typescript
public readonly windows: MaintenanceConfigurationInstallPatchesWindowsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList">MaintenanceConfigurationInstallPatchesWindowsList</a>

---

##### `linuxInput`<sup>Optional</sup> <a name="linuxInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.linuxInput"></a>

```typescript
public readonly linuxInput: IResolvable | MaintenanceConfigurationInstallPatchesLinux[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux">MaintenanceConfigurationInstallPatchesLinux</a>[]

---

##### `rebootInput`<sup>Optional</sup> <a name="rebootInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.rebootInput"></a>

```typescript
public readonly rebootInput: string;
```

- *Type:* string

---

##### `windowsInput`<sup>Optional</sup> <a name="windowsInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.windowsInput"></a>

```typescript
public readonly windowsInput: IResolvable | MaintenanceConfigurationInstallPatchesWindows[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows">MaintenanceConfigurationInstallPatchesWindows</a>[]

---

##### `reboot`<sup>Required</sup> <a name="reboot" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.reboot"></a>

```typescript
public readonly reboot: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MaintenanceConfigurationInstallPatches;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches">MaintenanceConfigurationInstallPatches</a>

---


### MaintenanceConfigurationInstallPatchesWindowsList <a name="MaintenanceConfigurationInstallPatchesWindowsList" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.Initializer"></a>

```typescript
import { maintenanceConfiguration } from '@cdktf/provider-azurerm'

new maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.get"></a>

```typescript
public get(index: number): MaintenanceConfigurationInstallPatchesWindowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows">MaintenanceConfigurationInstallPatchesWindows</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MaintenanceConfigurationInstallPatchesWindows[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows">MaintenanceConfigurationInstallPatchesWindows</a>[]

---


### MaintenanceConfigurationInstallPatchesWindowsOutputReference <a name="MaintenanceConfigurationInstallPatchesWindowsOutputReference" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer"></a>

```typescript
import { maintenanceConfiguration } from '@cdktf/provider-azurerm'

new maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resetClassificationsToInclude">resetClassificationsToInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resetKbNumbersToExclude">resetKbNumbersToExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resetKbNumbersToInclude">resetKbNumbersToInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassificationsToInclude` <a name="resetClassificationsToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resetClassificationsToInclude"></a>

```typescript
public resetClassificationsToInclude(): void
```

##### `resetKbNumbersToExclude` <a name="resetKbNumbersToExclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resetKbNumbersToExclude"></a>

```typescript
public resetKbNumbersToExclude(): void
```

##### `resetKbNumbersToInclude` <a name="resetKbNumbersToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resetKbNumbersToInclude"></a>

```typescript
public resetKbNumbersToInclude(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.classificationsToIncludeInput">classificationsToIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToExcludeInput">kbNumbersToExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToIncludeInput">kbNumbersToIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.classificationsToInclude">classificationsToInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToExclude">kbNumbersToExclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToInclude">kbNumbersToInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows">MaintenanceConfigurationInstallPatchesWindows</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `classificationsToIncludeInput`<sup>Optional</sup> <a name="classificationsToIncludeInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.classificationsToIncludeInput"></a>

```typescript
public readonly classificationsToIncludeInput: string[];
```

- *Type:* string[]

---

##### `kbNumbersToExcludeInput`<sup>Optional</sup> <a name="kbNumbersToExcludeInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToExcludeInput"></a>

```typescript
public readonly kbNumbersToExcludeInput: string[];
```

- *Type:* string[]

---

##### `kbNumbersToIncludeInput`<sup>Optional</sup> <a name="kbNumbersToIncludeInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToIncludeInput"></a>

```typescript
public readonly kbNumbersToIncludeInput: string[];
```

- *Type:* string[]

---

##### `classificationsToInclude`<sup>Required</sup> <a name="classificationsToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.classificationsToInclude"></a>

```typescript
public readonly classificationsToInclude: string[];
```

- *Type:* string[]

---

##### `kbNumbersToExclude`<sup>Required</sup> <a name="kbNumbersToExclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToExclude"></a>

```typescript
public readonly kbNumbersToExclude: string[];
```

- *Type:* string[]

---

##### `kbNumbersToInclude`<sup>Required</sup> <a name="kbNumbersToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToInclude"></a>

```typescript
public readonly kbNumbersToInclude: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MaintenanceConfigurationInstallPatchesWindows | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows">MaintenanceConfigurationInstallPatchesWindows</a> | cdktf.IResolvable

---


### MaintenanceConfigurationTimeoutsOutputReference <a name="MaintenanceConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { maintenanceConfiguration } from '@cdktf/provider-azurerm'

new maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts">MaintenanceConfigurationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MaintenanceConfigurationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts">MaintenanceConfigurationTimeouts</a> | cdktf.IResolvable

---


### MaintenanceConfigurationWindowOutputReference <a name="MaintenanceConfigurationWindowOutputReference" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.Initializer"></a>

```typescript
import { maintenanceConfiguration } from '@cdktf/provider-azurerm'

new maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resetExpirationDateTime">resetExpirationDateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resetRecurEvery">resetRecurEvery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetExpirationDateTime` <a name="resetExpirationDateTime" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resetExpirationDateTime"></a>

```typescript
public resetExpirationDateTime(): void
```

##### `resetRecurEvery` <a name="resetRecurEvery" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resetRecurEvery"></a>

```typescript
public resetRecurEvery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.expirationDateTimeInput">expirationDateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.recurEveryInput">recurEveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.startDateTimeInput">startDateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.expirationDateTime">expirationDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.recurEvery">recurEvery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.startDateTime">startDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow">MaintenanceConfigurationWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `expirationDateTimeInput`<sup>Optional</sup> <a name="expirationDateTimeInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.expirationDateTimeInput"></a>

```typescript
public readonly expirationDateTimeInput: string;
```

- *Type:* string

---

##### `recurEveryInput`<sup>Optional</sup> <a name="recurEveryInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.recurEveryInput"></a>

```typescript
public readonly recurEveryInput: string;
```

- *Type:* string

---

##### `startDateTimeInput`<sup>Optional</sup> <a name="startDateTimeInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.startDateTimeInput"></a>

```typescript
public readonly startDateTimeInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `expirationDateTime`<sup>Required</sup> <a name="expirationDateTime" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.expirationDateTime"></a>

```typescript
public readonly expirationDateTime: string;
```

- *Type:* string

---

##### `recurEvery`<sup>Required</sup> <a name="recurEvery" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.recurEvery"></a>

```typescript
public readonly recurEvery: string;
```

- *Type:* string

---

##### `startDateTime`<sup>Required</sup> <a name="startDateTime" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.startDateTime"></a>

```typescript
public readonly startDateTime: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MaintenanceConfigurationWindow;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow">MaintenanceConfigurationWindow</a>

---



