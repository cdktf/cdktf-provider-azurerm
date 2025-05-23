# `dedicatedHardwareSecurityModule` Submodule <a name="`dedicatedHardwareSecurityModule` Submodule" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DedicatedHardwareSecurityModule <a name="DedicatedHardwareSecurityModule" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module azurerm_dedicated_hardware_security_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer"></a>

```typescript
import { dedicatedHardwareSecurityModule } from '@cdktf/provider-azurerm'

new dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule(scope: Construct, id: string, config: DedicatedHardwareSecurityModuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig">DedicatedHardwareSecurityModuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig">DedicatedHardwareSecurityModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putManagementNetworkProfile">putManagementNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putNetworkProfile">putNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetManagementNetworkProfile">resetManagementNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetStampId">resetStampId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetZones">resetZones</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putManagementNetworkProfile` <a name="putManagementNetworkProfile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putManagementNetworkProfile"></a>

```typescript
public putManagementNetworkProfile(value: DedicatedHardwareSecurityModuleManagementNetworkProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putManagementNetworkProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a>

---

##### `putNetworkProfile` <a name="putNetworkProfile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putNetworkProfile"></a>

```typescript
public putNetworkProfile(value: DedicatedHardwareSecurityModuleNetworkProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putNetworkProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putTimeouts"></a>

```typescript
public putTimeouts(value: DedicatedHardwareSecurityModuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetManagementNetworkProfile` <a name="resetManagementNetworkProfile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetManagementNetworkProfile"></a>

```typescript
public resetManagementNetworkProfile(): void
```

##### `resetStampId` <a name="resetStampId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetStampId"></a>

```typescript
public resetStampId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZones` <a name="resetZones" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetZones"></a>

```typescript
public resetZones(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DedicatedHardwareSecurityModule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isConstruct"></a>

```typescript
import { dedicatedHardwareSecurityModule } from '@cdktf/provider-azurerm'

dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isTerraformElement"></a>

```typescript
import { dedicatedHardwareSecurityModule } from '@cdktf/provider-azurerm'

dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isTerraformResource"></a>

```typescript
import { dedicatedHardwareSecurityModule } from '@cdktf/provider-azurerm'

dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.generateConfigForImport"></a>

```typescript
import { dedicatedHardwareSecurityModule } from '@cdktf/provider-azurerm'

dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DedicatedHardwareSecurityModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DedicatedHardwareSecurityModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DedicatedHardwareSecurityModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DedicatedHardwareSecurityModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.managementNetworkProfile">managementNetworkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference">DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.networkProfile">networkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference">DedicatedHardwareSecurityModuleNetworkProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference">DedicatedHardwareSecurityModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.managementNetworkProfileInput">managementNetworkProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.networkProfileInput">networkProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.stampIdInput">stampIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.zonesInput">zonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.stampId">stampId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managementNetworkProfile`<sup>Required</sup> <a name="managementNetworkProfile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.managementNetworkProfile"></a>

```typescript
public readonly managementNetworkProfile: DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference">DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference</a>

---

##### `networkProfile`<sup>Required</sup> <a name="networkProfile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.networkProfile"></a>

```typescript
public readonly networkProfile: DedicatedHardwareSecurityModuleNetworkProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference">DedicatedHardwareSecurityModuleNetworkProfileOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.timeouts"></a>

```typescript
public readonly timeouts: DedicatedHardwareSecurityModuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference">DedicatedHardwareSecurityModuleTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `managementNetworkProfileInput`<sup>Optional</sup> <a name="managementNetworkProfileInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.managementNetworkProfileInput"></a>

```typescript
public readonly managementNetworkProfileInput: DedicatedHardwareSecurityModuleManagementNetworkProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkProfileInput`<sup>Optional</sup> <a name="networkProfileInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.networkProfileInput"></a>

```typescript
public readonly networkProfileInput: DedicatedHardwareSecurityModuleNetworkProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `stampIdInput`<sup>Optional</sup> <a name="stampIdInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.stampIdInput"></a>

```typescript
public readonly stampIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DedicatedHardwareSecurityModuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a>

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.zonesInput"></a>

```typescript
public readonly zonesInput: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `stampId`<sup>Required</sup> <a name="stampId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.stampId"></a>

```typescript
public readonly stampId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DedicatedHardwareSecurityModuleConfig <a name="DedicatedHardwareSecurityModuleConfig" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.Initializer"></a>

```typescript
import { dedicatedHardwareSecurityModule } from '@cdktf/provider-azurerm'

const dedicatedHardwareSecurityModuleConfig: dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#location DedicatedHardwareSecurityModule#location}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#name DedicatedHardwareSecurityModule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.networkProfile">networkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a></code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#resource_group_name DedicatedHardwareSecurityModule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#sku_name DedicatedHardwareSecurityModule#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#id DedicatedHardwareSecurityModule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.managementNetworkProfile">managementNetworkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a></code> | management_network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.stampId">stampId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#stamp_id DedicatedHardwareSecurityModule#stamp_id}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#tags DedicatedHardwareSecurityModule#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.zones">zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#zones DedicatedHardwareSecurityModule#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#location DedicatedHardwareSecurityModule#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#name DedicatedHardwareSecurityModule#name}.

---

##### `networkProfile`<sup>Required</sup> <a name="networkProfile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.networkProfile"></a>

```typescript
public readonly networkProfile: DedicatedHardwareSecurityModuleNetworkProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a>

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#network_profile DedicatedHardwareSecurityModule#network_profile}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#resource_group_name DedicatedHardwareSecurityModule#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#sku_name DedicatedHardwareSecurityModule#sku_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#id DedicatedHardwareSecurityModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managementNetworkProfile`<sup>Optional</sup> <a name="managementNetworkProfile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.managementNetworkProfile"></a>

```typescript
public readonly managementNetworkProfile: DedicatedHardwareSecurityModuleManagementNetworkProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a>

management_network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#management_network_profile DedicatedHardwareSecurityModule#management_network_profile}

---

##### `stampId`<sup>Optional</sup> <a name="stampId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.stampId"></a>

```typescript
public readonly stampId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#stamp_id DedicatedHardwareSecurityModule#stamp_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#tags DedicatedHardwareSecurityModule#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DedicatedHardwareSecurityModuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#timeouts DedicatedHardwareSecurityModule#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#zones DedicatedHardwareSecurityModule#zones}.

---

### DedicatedHardwareSecurityModuleManagementNetworkProfile <a name="DedicatedHardwareSecurityModuleManagementNetworkProfile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile.Initializer"></a>

```typescript
import { dedicatedHardwareSecurityModule } from '@cdktf/provider-azurerm'

const dedicatedHardwareSecurityModuleManagementNetworkProfile: dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile.property.networkInterfacePrivateIpAddresses">networkInterfacePrivateIpAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#network_interface_private_ip_addresses DedicatedHardwareSecurityModule#network_interface_private_ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#subnet_id DedicatedHardwareSecurityModule#subnet_id}. |

---

##### `networkInterfacePrivateIpAddresses`<sup>Required</sup> <a name="networkInterfacePrivateIpAddresses" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile.property.networkInterfacePrivateIpAddresses"></a>

```typescript
public readonly networkInterfacePrivateIpAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#network_interface_private_ip_addresses DedicatedHardwareSecurityModule#network_interface_private_ip_addresses}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#subnet_id DedicatedHardwareSecurityModule#subnet_id}.

---

### DedicatedHardwareSecurityModuleNetworkProfile <a name="DedicatedHardwareSecurityModuleNetworkProfile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile.Initializer"></a>

```typescript
import { dedicatedHardwareSecurityModule } from '@cdktf/provider-azurerm'

const dedicatedHardwareSecurityModuleNetworkProfile: dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile.property.networkInterfacePrivateIpAddresses">networkInterfacePrivateIpAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#network_interface_private_ip_addresses DedicatedHardwareSecurityModule#network_interface_private_ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#subnet_id DedicatedHardwareSecurityModule#subnet_id}. |

---

##### `networkInterfacePrivateIpAddresses`<sup>Required</sup> <a name="networkInterfacePrivateIpAddresses" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile.property.networkInterfacePrivateIpAddresses"></a>

```typescript
public readonly networkInterfacePrivateIpAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#network_interface_private_ip_addresses DedicatedHardwareSecurityModule#network_interface_private_ip_addresses}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#subnet_id DedicatedHardwareSecurityModule#subnet_id}.

---

### DedicatedHardwareSecurityModuleTimeouts <a name="DedicatedHardwareSecurityModuleTimeouts" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.Initializer"></a>

```typescript
import { dedicatedHardwareSecurityModule } from '@cdktf/provider-azurerm'

const dedicatedHardwareSecurityModuleTimeouts: dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#create DedicatedHardwareSecurityModule#create}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#delete DedicatedHardwareSecurityModule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#read DedicatedHardwareSecurityModule#read}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#update DedicatedHardwareSecurityModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#create DedicatedHardwareSecurityModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#delete DedicatedHardwareSecurityModule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#read DedicatedHardwareSecurityModule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dedicated_hardware_security_module#update DedicatedHardwareSecurityModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference <a name="DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.Initializer"></a>

```typescript
import { dedicatedHardwareSecurityModule } from '@cdktf/provider-azurerm'

new dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.networkInterfacePrivateIpAddressesInput">networkInterfacePrivateIpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.networkInterfacePrivateIpAddresses">networkInterfacePrivateIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInterfacePrivateIpAddressesInput`<sup>Optional</sup> <a name="networkInterfacePrivateIpAddressesInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.networkInterfacePrivateIpAddressesInput"></a>

```typescript
public readonly networkInterfacePrivateIpAddressesInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `networkInterfacePrivateIpAddresses`<sup>Required</sup> <a name="networkInterfacePrivateIpAddresses" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.networkInterfacePrivateIpAddresses"></a>

```typescript
public readonly networkInterfacePrivateIpAddresses: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DedicatedHardwareSecurityModuleManagementNetworkProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a>

---


### DedicatedHardwareSecurityModuleNetworkProfileOutputReference <a name="DedicatedHardwareSecurityModuleNetworkProfileOutputReference" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.Initializer"></a>

```typescript
import { dedicatedHardwareSecurityModule } from '@cdktf/provider-azurerm'

new dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.networkInterfacePrivateIpAddressesInput">networkInterfacePrivateIpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.networkInterfacePrivateIpAddresses">networkInterfacePrivateIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInterfacePrivateIpAddressesInput`<sup>Optional</sup> <a name="networkInterfacePrivateIpAddressesInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.networkInterfacePrivateIpAddressesInput"></a>

```typescript
public readonly networkInterfacePrivateIpAddressesInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `networkInterfacePrivateIpAddresses`<sup>Required</sup> <a name="networkInterfacePrivateIpAddresses" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.networkInterfacePrivateIpAddresses"></a>

```typescript
public readonly networkInterfacePrivateIpAddresses: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DedicatedHardwareSecurityModuleNetworkProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a>

---


### DedicatedHardwareSecurityModuleTimeoutsOutputReference <a name="DedicatedHardwareSecurityModuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { dedicatedHardwareSecurityModule } from '@cdktf/provider-azurerm'

new dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DedicatedHardwareSecurityModuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a>

---



