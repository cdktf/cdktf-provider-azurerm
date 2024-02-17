# `labServiceLab` Submodule <a name="`labServiceLab` Submodule" id="@cdktf/provider-azurerm.labServiceLab"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LabServiceLab <a name="LabServiceLab" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab azurerm_lab_service_lab}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

new labServiceLab.LabServiceLab(scope: Construct, id: string, config: LabServiceLabConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig">LabServiceLabConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig">LabServiceLabConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putAutoShutdown">putAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putConnectionSetting">putConnectionSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putRoster">putRoster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putSecurity">putSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putVirtualMachine">putVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetAutoShutdown">resetAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetLabPlanId">resetLabPlanId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetRoster">resetRoster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoShutdown` <a name="putAutoShutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putAutoShutdown"></a>

```typescript
public putAutoShutdown(value: LabServiceLabAutoShutdown): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putAutoShutdown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a>

---

##### `putConnectionSetting` <a name="putConnectionSetting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putConnectionSetting"></a>

```typescript
public putConnectionSetting(value: LabServiceLabConnectionSetting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putConnectionSetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a>

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putNetwork"></a>

```typescript
public putNetwork(value: LabServiceLabNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a>

---

##### `putRoster` <a name="putRoster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putRoster"></a>

```typescript
public putRoster(value: LabServiceLabRoster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putRoster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a>

---

##### `putSecurity` <a name="putSecurity" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putSecurity"></a>

```typescript
public putSecurity(value: LabServiceLabSecurity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putTimeouts"></a>

```typescript
public putTimeouts(value: LabServiceLabTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a>

---

##### `putVirtualMachine` <a name="putVirtualMachine" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putVirtualMachine"></a>

```typescript
public putVirtualMachine(value: LabServiceLabVirtualMachine): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putVirtualMachine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a>

---

##### `resetAutoShutdown` <a name="resetAutoShutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetAutoShutdown"></a>

```typescript
public resetAutoShutdown(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabPlanId` <a name="resetLabPlanId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetLabPlanId"></a>

```typescript
public resetLabPlanId(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetRoster` <a name="resetRoster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetRoster"></a>

```typescript
public resetRoster(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LabServiceLab resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isConstruct"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

labServiceLab.LabServiceLab.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformElement"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

labServiceLab.LabServiceLab.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformResource"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

labServiceLab.LabServiceLab.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

labServiceLab.LabServiceLab.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LabServiceLab resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LabServiceLab to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LabServiceLab that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LabServiceLab to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.autoShutdown">autoShutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference">LabServiceLabAutoShutdownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connectionSetting">connectionSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference">LabServiceLabConnectionSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference">LabServiceLabNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.roster">roster</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference">LabServiceLabRosterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference">LabServiceLabSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference">LabServiceLabTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.virtualMachine">virtualMachine</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference">LabServiceLabVirtualMachineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.autoShutdownInput">autoShutdownInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connectionSettingInput">connectionSettingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.labPlanIdInput">labPlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.networkInput">networkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.rosterInput">rosterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.securityInput">securityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.virtualMachineInput">virtualMachineInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.labPlanId">labPlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.title">title</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoShutdown`<sup>Required</sup> <a name="autoShutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.autoShutdown"></a>

```typescript
public readonly autoShutdown: LabServiceLabAutoShutdownOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference">LabServiceLabAutoShutdownOutputReference</a>

---

##### `connectionSetting`<sup>Required</sup> <a name="connectionSetting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connectionSetting"></a>

```typescript
public readonly connectionSetting: LabServiceLabConnectionSettingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference">LabServiceLabConnectionSettingOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.network"></a>

```typescript
public readonly network: LabServiceLabNetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference">LabServiceLabNetworkOutputReference</a>

---

##### `roster`<sup>Required</sup> <a name="roster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.roster"></a>

```typescript
public readonly roster: LabServiceLabRosterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference">LabServiceLabRosterOutputReference</a>

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.security"></a>

```typescript
public readonly security: LabServiceLabSecurityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference">LabServiceLabSecurityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.timeouts"></a>

```typescript
public readonly timeouts: LabServiceLabTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference">LabServiceLabTimeoutsOutputReference</a>

---

##### `virtualMachine`<sup>Required</sup> <a name="virtualMachine" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.virtualMachine"></a>

```typescript
public readonly virtualMachine: LabServiceLabVirtualMachineOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference">LabServiceLabVirtualMachineOutputReference</a>

---

##### `autoShutdownInput`<sup>Optional</sup> <a name="autoShutdownInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.autoShutdownInput"></a>

```typescript
public readonly autoShutdownInput: LabServiceLabAutoShutdown;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a>

---

##### `connectionSettingInput`<sup>Optional</sup> <a name="connectionSettingInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connectionSettingInput"></a>

```typescript
public readonly connectionSettingInput: LabServiceLabConnectionSetting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labPlanIdInput`<sup>Optional</sup> <a name="labPlanIdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.labPlanIdInput"></a>

```typescript
public readonly labPlanIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.networkInput"></a>

```typescript
public readonly networkInput: LabServiceLabNetwork;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `rosterInput`<sup>Optional</sup> <a name="rosterInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.rosterInput"></a>

```typescript
public readonly rosterInput: LabServiceLabRoster;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a>

---

##### `securityInput`<sup>Optional</sup> <a name="securityInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.securityInput"></a>

```typescript
public readonly securityInput: LabServiceLabSecurity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LabServiceLabTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `virtualMachineInput`<sup>Optional</sup> <a name="virtualMachineInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.virtualMachineInput"></a>

```typescript
public readonly virtualMachineInput: LabServiceLabVirtualMachine;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labPlanId`<sup>Required</sup> <a name="labPlanId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.labPlanId"></a>

```typescript
public readonly labPlanId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LabServiceLabAutoShutdown <a name="LabServiceLabAutoShutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

const labServiceLabAutoShutdown: labServiceLab.LabServiceLabAutoShutdown = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.disconnectDelay">disconnectDelay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#disconnect_delay LabServiceLab#disconnect_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.idleDelay">idleDelay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#idle_delay LabServiceLab#idle_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.noConnectDelay">noConnectDelay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#no_connect_delay LabServiceLab#no_connect_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.shutdownOnIdle">shutdownOnIdle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#shutdown_on_idle LabServiceLab#shutdown_on_idle}. |

---

##### `disconnectDelay`<sup>Optional</sup> <a name="disconnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.disconnectDelay"></a>

```typescript
public readonly disconnectDelay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#disconnect_delay LabServiceLab#disconnect_delay}.

---

##### `idleDelay`<sup>Optional</sup> <a name="idleDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.idleDelay"></a>

```typescript
public readonly idleDelay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#idle_delay LabServiceLab#idle_delay}.

---

##### `noConnectDelay`<sup>Optional</sup> <a name="noConnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.noConnectDelay"></a>

```typescript
public readonly noConnectDelay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#no_connect_delay LabServiceLab#no_connect_delay}.

---

##### `shutdownOnIdle`<sup>Optional</sup> <a name="shutdownOnIdle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.shutdownOnIdle"></a>

```typescript
public readonly shutdownOnIdle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#shutdown_on_idle LabServiceLab#shutdown_on_idle}.

---

### LabServiceLabConfig <a name="LabServiceLabConfig" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

const labServiceLabConfig: labServiceLab.LabServiceLabConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.connectionSetting">connectionSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a></code> | connection_setting block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#location LabServiceLab#location}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#name LabServiceLab#name}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#resource_group_name LabServiceLab#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a></code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#title LabServiceLab#title}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.virtualMachine">virtualMachine</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a></code> | virtual_machine block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.autoShutdown">autoShutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a></code> | auto_shutdown block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#description LabServiceLab#description}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#id LabServiceLab#id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.labPlanId">labPlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#lab_plan_id LabServiceLab#lab_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.roster">roster</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a></code> | roster block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#tags LabServiceLab#tags}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionSetting`<sup>Required</sup> <a name="connectionSetting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.connectionSetting"></a>

```typescript
public readonly connectionSetting: LabServiceLabConnectionSetting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a>

connection_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#connection_setting LabServiceLab#connection_setting}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#location LabServiceLab#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#name LabServiceLab#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#resource_group_name LabServiceLab#resource_group_name}.

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.security"></a>

```typescript
public readonly security: LabServiceLabSecurity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a>

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#security LabServiceLab#security}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#title LabServiceLab#title}.

---

##### `virtualMachine`<sup>Required</sup> <a name="virtualMachine" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.virtualMachine"></a>

```typescript
public readonly virtualMachine: LabServiceLabVirtualMachine;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#virtual_machine LabServiceLab#virtual_machine}

---

##### `autoShutdown`<sup>Optional</sup> <a name="autoShutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.autoShutdown"></a>

```typescript
public readonly autoShutdown: LabServiceLabAutoShutdown;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a>

auto_shutdown block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#auto_shutdown LabServiceLab#auto_shutdown}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#description LabServiceLab#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#id LabServiceLab#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labPlanId`<sup>Optional</sup> <a name="labPlanId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.labPlanId"></a>

```typescript
public readonly labPlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#lab_plan_id LabServiceLab#lab_plan_id}.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.network"></a>

```typescript
public readonly network: LabServiceLabNetwork;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#network LabServiceLab#network}

---

##### `roster`<sup>Optional</sup> <a name="roster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.roster"></a>

```typescript
public readonly roster: LabServiceLabRoster;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a>

roster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#roster LabServiceLab#roster}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#tags LabServiceLab#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LabServiceLabTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#timeouts LabServiceLab#timeouts}

---

### LabServiceLabConnectionSetting <a name="LabServiceLabConnectionSetting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

const labServiceLabConnectionSetting: labServiceLab.LabServiceLabConnectionSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.property.clientRdpAccess">clientRdpAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#client_rdp_access LabServiceLab#client_rdp_access}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.property.clientSshAccess">clientSshAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#client_ssh_access LabServiceLab#client_ssh_access}. |

---

##### `clientRdpAccess`<sup>Optional</sup> <a name="clientRdpAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.property.clientRdpAccess"></a>

```typescript
public readonly clientRdpAccess: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#client_rdp_access LabServiceLab#client_rdp_access}.

---

##### `clientSshAccess`<sup>Optional</sup> <a name="clientSshAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.property.clientSshAccess"></a>

```typescript
public readonly clientSshAccess: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#client_ssh_access LabServiceLab#client_ssh_access}.

---

### LabServiceLabNetwork <a name="LabServiceLabNetwork" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

const labServiceLabNetwork: labServiceLab.LabServiceLabNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#subnet_id LabServiceLab#subnet_id}. |

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#subnet_id LabServiceLab#subnet_id}.

---

### LabServiceLabRoster <a name="LabServiceLabRoster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

const labServiceLabRoster: labServiceLab.LabServiceLabRoster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.activeDirectoryGroupId">activeDirectoryGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#active_directory_group_id LabServiceLab#active_directory_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.lmsInstance">lmsInstance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#lms_instance LabServiceLab#lms_instance}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiClientId">ltiClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#lti_client_id LabServiceLab#lti_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiContextId">ltiContextId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#lti_context_id LabServiceLab#lti_context_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiRosterEndpoint">ltiRosterEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#lti_roster_endpoint LabServiceLab#lti_roster_endpoint}. |

---

##### `activeDirectoryGroupId`<sup>Optional</sup> <a name="activeDirectoryGroupId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.activeDirectoryGroupId"></a>

```typescript
public readonly activeDirectoryGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#active_directory_group_id LabServiceLab#active_directory_group_id}.

---

##### `lmsInstance`<sup>Optional</sup> <a name="lmsInstance" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.lmsInstance"></a>

```typescript
public readonly lmsInstance: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#lms_instance LabServiceLab#lms_instance}.

---

##### `ltiClientId`<sup>Optional</sup> <a name="ltiClientId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiClientId"></a>

```typescript
public readonly ltiClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#lti_client_id LabServiceLab#lti_client_id}.

---

##### `ltiContextId`<sup>Optional</sup> <a name="ltiContextId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiContextId"></a>

```typescript
public readonly ltiContextId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#lti_context_id LabServiceLab#lti_context_id}.

---

##### `ltiRosterEndpoint`<sup>Optional</sup> <a name="ltiRosterEndpoint" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiRosterEndpoint"></a>

```typescript
public readonly ltiRosterEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#lti_roster_endpoint LabServiceLab#lti_roster_endpoint}.

---

### LabServiceLabSecurity <a name="LabServiceLabSecurity" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

const labServiceLabSecurity: labServiceLab.LabServiceLabSecurity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity.property.openAccessEnabled">openAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#open_access_enabled LabServiceLab#open_access_enabled}. |

---

##### `openAccessEnabled`<sup>Required</sup> <a name="openAccessEnabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity.property.openAccessEnabled"></a>

```typescript
public readonly openAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#open_access_enabled LabServiceLab#open_access_enabled}.

---

### LabServiceLabTimeouts <a name="LabServiceLabTimeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

const labServiceLabTimeouts: labServiceLab.LabServiceLabTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#create LabServiceLab#create}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#delete LabServiceLab#delete}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#read LabServiceLab#read}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#update LabServiceLab#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#create LabServiceLab#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#delete LabServiceLab#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#read LabServiceLab#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#update LabServiceLab#update}.

---

### LabServiceLabVirtualMachine <a name="LabServiceLabVirtualMachine" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

const labServiceLabVirtualMachine: labServiceLab.LabServiceLabVirtualMachine = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.adminUser">adminUser</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a></code> | admin_user block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.imageReference">imageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a></code> | image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.additionalCapabilityGpuDriversInstalled">additionalCapabilityGpuDriversInstalled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#additional_capability_gpu_drivers_installed LabServiceLab#additional_capability_gpu_drivers_installed}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.createOption">createOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#create_option LabServiceLab#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.nonAdminUser">nonAdminUser</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a></code> | non_admin_user block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.sharedPasswordEnabled">sharedPasswordEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#shared_password_enabled LabServiceLab#shared_password_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.usageQuota">usageQuota</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#usage_quota LabServiceLab#usage_quota}. |

---

##### `adminUser`<sup>Required</sup> <a name="adminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.adminUser"></a>

```typescript
public readonly adminUser: LabServiceLabVirtualMachineAdminUser;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a>

admin_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#admin_user LabServiceLab#admin_user}

---

##### `imageReference`<sup>Required</sup> <a name="imageReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.imageReference"></a>

```typescript
public readonly imageReference: LabServiceLabVirtualMachineImageReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a>

image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#image_reference LabServiceLab#image_reference}

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.sku"></a>

```typescript
public readonly sku: LabServiceLabVirtualMachineSku;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#sku LabServiceLab#sku}

---

##### `additionalCapabilityGpuDriversInstalled`<sup>Optional</sup> <a name="additionalCapabilityGpuDriversInstalled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.additionalCapabilityGpuDriversInstalled"></a>

```typescript
public readonly additionalCapabilityGpuDriversInstalled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#additional_capability_gpu_drivers_installed LabServiceLab#additional_capability_gpu_drivers_installed}.

---

##### `createOption`<sup>Optional</sup> <a name="createOption" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.createOption"></a>

```typescript
public readonly createOption: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#create_option LabServiceLab#create_option}.

---

##### `nonAdminUser`<sup>Optional</sup> <a name="nonAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.nonAdminUser"></a>

```typescript
public readonly nonAdminUser: LabServiceLabVirtualMachineNonAdminUser;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a>

non_admin_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#non_admin_user LabServiceLab#non_admin_user}

---

##### `sharedPasswordEnabled`<sup>Optional</sup> <a name="sharedPasswordEnabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.sharedPasswordEnabled"></a>

```typescript
public readonly sharedPasswordEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#shared_password_enabled LabServiceLab#shared_password_enabled}.

---

##### `usageQuota`<sup>Optional</sup> <a name="usageQuota" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.usageQuota"></a>

```typescript
public readonly usageQuota: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#usage_quota LabServiceLab#usage_quota}.

---

### LabServiceLabVirtualMachineAdminUser <a name="LabServiceLabVirtualMachineAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

const labServiceLabVirtualMachineAdminUser: labServiceLab.LabServiceLabVirtualMachineAdminUser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#password LabServiceLab#password}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#username LabServiceLab#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#password LabServiceLab#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#username LabServiceLab#username}.

---

### LabServiceLabVirtualMachineImageReference <a name="LabServiceLabVirtualMachineImageReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

const labServiceLabVirtualMachineImageReference: labServiceLab.LabServiceLabVirtualMachineImageReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#id LabServiceLab#id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.offer">offer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#offer LabServiceLab#offer}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.publisher">publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#publisher LabServiceLab#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.sku">sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#sku LabServiceLab#sku}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#version LabServiceLab#version}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#id LabServiceLab#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `offer`<sup>Optional</sup> <a name="offer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.offer"></a>

```typescript
public readonly offer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#offer LabServiceLab#offer}.

---

##### `publisher`<sup>Optional</sup> <a name="publisher" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#publisher LabServiceLab#publisher}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#sku LabServiceLab#sku}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#version LabServiceLab#version}.

---

### LabServiceLabVirtualMachineNonAdminUser <a name="LabServiceLabVirtualMachineNonAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

const labServiceLabVirtualMachineNonAdminUser: labServiceLab.LabServiceLabVirtualMachineNonAdminUser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#password LabServiceLab#password}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#username LabServiceLab#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#password LabServiceLab#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#username LabServiceLab#username}.

---

### LabServiceLabVirtualMachineSku <a name="LabServiceLabVirtualMachineSku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

const labServiceLabVirtualMachineSku: labServiceLab.LabServiceLabVirtualMachineSku = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.property.capacity">capacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#capacity LabServiceLab#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#name LabServiceLab#name}. |

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#capacity LabServiceLab#capacity}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#name LabServiceLab#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### LabServiceLabAutoShutdownOutputReference <a name="LabServiceLabAutoShutdownOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

new labServiceLab.LabServiceLabAutoShutdownOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetDisconnectDelay">resetDisconnectDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetIdleDelay">resetIdleDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetNoConnectDelay">resetNoConnectDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetShutdownOnIdle">resetShutdownOnIdle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisconnectDelay` <a name="resetDisconnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetDisconnectDelay"></a>

```typescript
public resetDisconnectDelay(): void
```

##### `resetIdleDelay` <a name="resetIdleDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetIdleDelay"></a>

```typescript
public resetIdleDelay(): void
```

##### `resetNoConnectDelay` <a name="resetNoConnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetNoConnectDelay"></a>

```typescript
public resetNoConnectDelay(): void
```

##### `resetShutdownOnIdle` <a name="resetShutdownOnIdle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetShutdownOnIdle"></a>

```typescript
public resetShutdownOnIdle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.disconnectDelayInput">disconnectDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.idleDelayInput">idleDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.noConnectDelayInput">noConnectDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.shutdownOnIdleInput">shutdownOnIdleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.disconnectDelay">disconnectDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.idleDelay">idleDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.noConnectDelay">noConnectDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.shutdownOnIdle">shutdownOnIdle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disconnectDelayInput`<sup>Optional</sup> <a name="disconnectDelayInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.disconnectDelayInput"></a>

```typescript
public readonly disconnectDelayInput: string;
```

- *Type:* string

---

##### `idleDelayInput`<sup>Optional</sup> <a name="idleDelayInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.idleDelayInput"></a>

```typescript
public readonly idleDelayInput: string;
```

- *Type:* string

---

##### `noConnectDelayInput`<sup>Optional</sup> <a name="noConnectDelayInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.noConnectDelayInput"></a>

```typescript
public readonly noConnectDelayInput: string;
```

- *Type:* string

---

##### `shutdownOnIdleInput`<sup>Optional</sup> <a name="shutdownOnIdleInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.shutdownOnIdleInput"></a>

```typescript
public readonly shutdownOnIdleInput: string;
```

- *Type:* string

---

##### `disconnectDelay`<sup>Required</sup> <a name="disconnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.disconnectDelay"></a>

```typescript
public readonly disconnectDelay: string;
```

- *Type:* string

---

##### `idleDelay`<sup>Required</sup> <a name="idleDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.idleDelay"></a>

```typescript
public readonly idleDelay: string;
```

- *Type:* string

---

##### `noConnectDelay`<sup>Required</sup> <a name="noConnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.noConnectDelay"></a>

```typescript
public readonly noConnectDelay: string;
```

- *Type:* string

---

##### `shutdownOnIdle`<sup>Required</sup> <a name="shutdownOnIdle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.shutdownOnIdle"></a>

```typescript
public readonly shutdownOnIdle: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LabServiceLabAutoShutdown;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a>

---


### LabServiceLabConnectionSettingOutputReference <a name="LabServiceLabConnectionSettingOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

new labServiceLab.LabServiceLabConnectionSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resetClientRdpAccess">resetClientRdpAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resetClientSshAccess">resetClientSshAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientRdpAccess` <a name="resetClientRdpAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resetClientRdpAccess"></a>

```typescript
public resetClientRdpAccess(): void
```

##### `resetClientSshAccess` <a name="resetClientSshAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resetClientSshAccess"></a>

```typescript
public resetClientSshAccess(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientRdpAccessInput">clientRdpAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientSshAccessInput">clientSshAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientRdpAccess">clientRdpAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientSshAccess">clientSshAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientRdpAccessInput`<sup>Optional</sup> <a name="clientRdpAccessInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientRdpAccessInput"></a>

```typescript
public readonly clientRdpAccessInput: string;
```

- *Type:* string

---

##### `clientSshAccessInput`<sup>Optional</sup> <a name="clientSshAccessInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientSshAccessInput"></a>

```typescript
public readonly clientSshAccessInput: string;
```

- *Type:* string

---

##### `clientRdpAccess`<sup>Required</sup> <a name="clientRdpAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientRdpAccess"></a>

```typescript
public readonly clientRdpAccess: string;
```

- *Type:* string

---

##### `clientSshAccess`<sup>Required</sup> <a name="clientSshAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientSshAccess"></a>

```typescript
public readonly clientSshAccess: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LabServiceLabConnectionSetting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a>

---


### LabServiceLabNetworkOutputReference <a name="LabServiceLabNetworkOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

new labServiceLab.LabServiceLabNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.publicIpId">publicIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

##### `publicIpId`<sup>Required</sup> <a name="publicIpId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.publicIpId"></a>

```typescript
public readonly publicIpId: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LabServiceLabNetwork;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a>

---


### LabServiceLabRosterOutputReference <a name="LabServiceLabRosterOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

new labServiceLab.LabServiceLabRosterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetActiveDirectoryGroupId">resetActiveDirectoryGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLmsInstance">resetLmsInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiClientId">resetLtiClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiContextId">resetLtiContextId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiRosterEndpoint">resetLtiRosterEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveDirectoryGroupId` <a name="resetActiveDirectoryGroupId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetActiveDirectoryGroupId"></a>

```typescript
public resetActiveDirectoryGroupId(): void
```

##### `resetLmsInstance` <a name="resetLmsInstance" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLmsInstance"></a>

```typescript
public resetLmsInstance(): void
```

##### `resetLtiClientId` <a name="resetLtiClientId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiClientId"></a>

```typescript
public resetLtiClientId(): void
```

##### `resetLtiContextId` <a name="resetLtiContextId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiContextId"></a>

```typescript
public resetLtiContextId(): void
```

##### `resetLtiRosterEndpoint` <a name="resetLtiRosterEndpoint" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiRosterEndpoint"></a>

```typescript
public resetLtiRosterEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.activeDirectoryGroupIdInput">activeDirectoryGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.lmsInstanceInput">lmsInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiClientIdInput">ltiClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiContextIdInput">ltiContextIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiRosterEndpointInput">ltiRosterEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.activeDirectoryGroupId">activeDirectoryGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.lmsInstance">lmsInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiClientId">ltiClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiContextId">ltiContextId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiRosterEndpoint">ltiRosterEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeDirectoryGroupIdInput`<sup>Optional</sup> <a name="activeDirectoryGroupIdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.activeDirectoryGroupIdInput"></a>

```typescript
public readonly activeDirectoryGroupIdInput: string;
```

- *Type:* string

---

##### `lmsInstanceInput`<sup>Optional</sup> <a name="lmsInstanceInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.lmsInstanceInput"></a>

```typescript
public readonly lmsInstanceInput: string;
```

- *Type:* string

---

##### `ltiClientIdInput`<sup>Optional</sup> <a name="ltiClientIdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiClientIdInput"></a>

```typescript
public readonly ltiClientIdInput: string;
```

- *Type:* string

---

##### `ltiContextIdInput`<sup>Optional</sup> <a name="ltiContextIdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiContextIdInput"></a>

```typescript
public readonly ltiContextIdInput: string;
```

- *Type:* string

---

##### `ltiRosterEndpointInput`<sup>Optional</sup> <a name="ltiRosterEndpointInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiRosterEndpointInput"></a>

```typescript
public readonly ltiRosterEndpointInput: string;
```

- *Type:* string

---

##### `activeDirectoryGroupId`<sup>Required</sup> <a name="activeDirectoryGroupId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.activeDirectoryGroupId"></a>

```typescript
public readonly activeDirectoryGroupId: string;
```

- *Type:* string

---

##### `lmsInstance`<sup>Required</sup> <a name="lmsInstance" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.lmsInstance"></a>

```typescript
public readonly lmsInstance: string;
```

- *Type:* string

---

##### `ltiClientId`<sup>Required</sup> <a name="ltiClientId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiClientId"></a>

```typescript
public readonly ltiClientId: string;
```

- *Type:* string

---

##### `ltiContextId`<sup>Required</sup> <a name="ltiContextId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiContextId"></a>

```typescript
public readonly ltiContextId: string;
```

- *Type:* string

---

##### `ltiRosterEndpoint`<sup>Required</sup> <a name="ltiRosterEndpoint" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiRosterEndpoint"></a>

```typescript
public readonly ltiRosterEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LabServiceLabRoster;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a>

---


### LabServiceLabSecurityOutputReference <a name="LabServiceLabSecurityOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

new labServiceLab.LabServiceLabSecurityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.registrationCode">registrationCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.openAccessEnabledInput">openAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.openAccessEnabled">openAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `registrationCode`<sup>Required</sup> <a name="registrationCode" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.registrationCode"></a>

```typescript
public readonly registrationCode: string;
```

- *Type:* string

---

##### `openAccessEnabledInput`<sup>Optional</sup> <a name="openAccessEnabledInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.openAccessEnabledInput"></a>

```typescript
public readonly openAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `openAccessEnabled`<sup>Required</sup> <a name="openAccessEnabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.openAccessEnabled"></a>

```typescript
public readonly openAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LabServiceLabSecurity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a>

---


### LabServiceLabTimeoutsOutputReference <a name="LabServiceLabTimeoutsOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

new labServiceLab.LabServiceLabTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LabServiceLabTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a>

---


### LabServiceLabVirtualMachineAdminUserOutputReference <a name="LabServiceLabVirtualMachineAdminUserOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

new labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LabServiceLabVirtualMachineAdminUser;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a>

---


### LabServiceLabVirtualMachineImageReferenceOutputReference <a name="LabServiceLabVirtualMachineImageReferenceOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

new labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetOffer">resetOffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetPublisher">resetPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetSku">resetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOffer` <a name="resetOffer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetOffer"></a>

```typescript
public resetOffer(): void
```

##### `resetPublisher` <a name="resetPublisher" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetPublisher"></a>

```typescript
public resetPublisher(): void
```

##### `resetSku` <a name="resetSku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetSku"></a>

```typescript
public resetSku(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.offerInput">offerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.publisherInput">publisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.skuInput">skuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.offer">offer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.publisher">publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `offerInput`<sup>Optional</sup> <a name="offerInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.offerInput"></a>

```typescript
public readonly offerInput: string;
```

- *Type:* string

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.publisherInput"></a>

```typescript
public readonly publisherInput: string;
```

- *Type:* string

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.skuInput"></a>

```typescript
public readonly skuInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.offer"></a>

```typescript
public readonly offer: string;
```

- *Type:* string

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LabServiceLabVirtualMachineImageReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a>

---


### LabServiceLabVirtualMachineNonAdminUserOutputReference <a name="LabServiceLabVirtualMachineNonAdminUserOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

new labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LabServiceLabVirtualMachineNonAdminUser;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a>

---


### LabServiceLabVirtualMachineOutputReference <a name="LabServiceLabVirtualMachineOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

new labServiceLab.LabServiceLabVirtualMachineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putAdminUser">putAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putImageReference">putImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putNonAdminUser">putNonAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putSku">putSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetAdditionalCapabilityGpuDriversInstalled">resetAdditionalCapabilityGpuDriversInstalled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetCreateOption">resetCreateOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetNonAdminUser">resetNonAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetSharedPasswordEnabled">resetSharedPasswordEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetUsageQuota">resetUsageQuota</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdminUser` <a name="putAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putAdminUser"></a>

```typescript
public putAdminUser(value: LabServiceLabVirtualMachineAdminUser): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putAdminUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a>

---

##### `putImageReference` <a name="putImageReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putImageReference"></a>

```typescript
public putImageReference(value: LabServiceLabVirtualMachineImageReference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putImageReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a>

---

##### `putNonAdminUser` <a name="putNonAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putNonAdminUser"></a>

```typescript
public putNonAdminUser(value: LabServiceLabVirtualMachineNonAdminUser): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putNonAdminUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a>

---

##### `putSku` <a name="putSku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putSku"></a>

```typescript
public putSku(value: LabServiceLabVirtualMachineSku): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putSku.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a>

---

##### `resetAdditionalCapabilityGpuDriversInstalled` <a name="resetAdditionalCapabilityGpuDriversInstalled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetAdditionalCapabilityGpuDriversInstalled"></a>

```typescript
public resetAdditionalCapabilityGpuDriversInstalled(): void
```

##### `resetCreateOption` <a name="resetCreateOption" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetCreateOption"></a>

```typescript
public resetCreateOption(): void
```

##### `resetNonAdminUser` <a name="resetNonAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetNonAdminUser"></a>

```typescript
public resetNonAdminUser(): void
```

##### `resetSharedPasswordEnabled` <a name="resetSharedPasswordEnabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetSharedPasswordEnabled"></a>

```typescript
public resetSharedPasswordEnabled(): void
```

##### `resetUsageQuota` <a name="resetUsageQuota" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetUsageQuota"></a>

```typescript
public resetUsageQuota(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.adminUser">adminUser</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference">LabServiceLabVirtualMachineAdminUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.imageReference">imageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference">LabServiceLabVirtualMachineImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.nonAdminUser">nonAdminUser</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference">LabServiceLabVirtualMachineNonAdminUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference">LabServiceLabVirtualMachineSkuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.additionalCapabilityGpuDriversInstalledInput">additionalCapabilityGpuDriversInstalledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.adminUserInput">adminUserInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.createOptionInput">createOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.imageReferenceInput">imageReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.nonAdminUserInput">nonAdminUserInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sharedPasswordEnabledInput">sharedPasswordEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.skuInput">skuInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.usageQuotaInput">usageQuotaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.additionalCapabilityGpuDriversInstalled">additionalCapabilityGpuDriversInstalled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.createOption">createOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sharedPasswordEnabled">sharedPasswordEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.usageQuota">usageQuota</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminUser`<sup>Required</sup> <a name="adminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.adminUser"></a>

```typescript
public readonly adminUser: LabServiceLabVirtualMachineAdminUserOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference">LabServiceLabVirtualMachineAdminUserOutputReference</a>

---

##### `imageReference`<sup>Required</sup> <a name="imageReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.imageReference"></a>

```typescript
public readonly imageReference: LabServiceLabVirtualMachineImageReferenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference">LabServiceLabVirtualMachineImageReferenceOutputReference</a>

---

##### `nonAdminUser`<sup>Required</sup> <a name="nonAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.nonAdminUser"></a>

```typescript
public readonly nonAdminUser: LabServiceLabVirtualMachineNonAdminUserOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference">LabServiceLabVirtualMachineNonAdminUserOutputReference</a>

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sku"></a>

```typescript
public readonly sku: LabServiceLabVirtualMachineSkuOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference">LabServiceLabVirtualMachineSkuOutputReference</a>

---

##### `additionalCapabilityGpuDriversInstalledInput`<sup>Optional</sup> <a name="additionalCapabilityGpuDriversInstalledInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.additionalCapabilityGpuDriversInstalledInput"></a>

```typescript
public readonly additionalCapabilityGpuDriversInstalledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminUserInput`<sup>Optional</sup> <a name="adminUserInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.adminUserInput"></a>

```typescript
public readonly adminUserInput: LabServiceLabVirtualMachineAdminUser;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a>

---

##### `createOptionInput`<sup>Optional</sup> <a name="createOptionInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.createOptionInput"></a>

```typescript
public readonly createOptionInput: string;
```

- *Type:* string

---

##### `imageReferenceInput`<sup>Optional</sup> <a name="imageReferenceInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.imageReferenceInput"></a>

```typescript
public readonly imageReferenceInput: LabServiceLabVirtualMachineImageReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a>

---

##### `nonAdminUserInput`<sup>Optional</sup> <a name="nonAdminUserInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.nonAdminUserInput"></a>

```typescript
public readonly nonAdminUserInput: LabServiceLabVirtualMachineNonAdminUser;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a>

---

##### `sharedPasswordEnabledInput`<sup>Optional</sup> <a name="sharedPasswordEnabledInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sharedPasswordEnabledInput"></a>

```typescript
public readonly sharedPasswordEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.skuInput"></a>

```typescript
public readonly skuInput: LabServiceLabVirtualMachineSku;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a>

---

##### `usageQuotaInput`<sup>Optional</sup> <a name="usageQuotaInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.usageQuotaInput"></a>

```typescript
public readonly usageQuotaInput: string;
```

- *Type:* string

---

##### `additionalCapabilityGpuDriversInstalled`<sup>Required</sup> <a name="additionalCapabilityGpuDriversInstalled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.additionalCapabilityGpuDriversInstalled"></a>

```typescript
public readonly additionalCapabilityGpuDriversInstalled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createOption`<sup>Required</sup> <a name="createOption" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.createOption"></a>

```typescript
public readonly createOption: string;
```

- *Type:* string

---

##### `sharedPasswordEnabled`<sup>Required</sup> <a name="sharedPasswordEnabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sharedPasswordEnabled"></a>

```typescript
public readonly sharedPasswordEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usageQuota`<sup>Required</sup> <a name="usageQuota" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.usageQuota"></a>

```typescript
public readonly usageQuota: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LabServiceLabVirtualMachine;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a>

---


### LabServiceLabVirtualMachineSkuOutputReference <a name="LabServiceLabVirtualMachineSkuOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer"></a>

```typescript
import { labServiceLab } from '@cdktf/provider-azurerm'

new labServiceLab.LabServiceLabVirtualMachineSkuOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.capacityInput">capacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.capacity">capacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.capacityInput"></a>

```typescript
public readonly capacityInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LabServiceLabVirtualMachineSku;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a>

---



