# `dynatraceMonitor` Submodule <a name="`dynatraceMonitor` Submodule" id="@cdktf/provider-azurerm.dynatraceMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynatraceMonitor <a name="DynatraceMonitor" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor azurerm_dynatrace_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer"></a>

```typescript
import { dynatraceMonitor } from '@cdktf/provider-azurerm'

new dynatraceMonitor.DynatraceMonitor(scope: Construct, id: string, config: DynatraceMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig">DynatraceMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig">DynatraceMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putEnvironmentProperties">putEnvironmentProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putPlan">putPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putUser">putUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetEnvironmentProperties">resetEnvironmentProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetMonitoringEnabled">resetMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEnvironmentProperties` <a name="putEnvironmentProperties" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putEnvironmentProperties"></a>

```typescript
public putEnvironmentProperties(value: IResolvable | DynatraceMonitorEnvironmentProperties[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putEnvironmentProperties.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties">DynatraceMonitorEnvironmentProperties</a>[]

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putIdentity"></a>

```typescript
public putIdentity(value: DynatraceMonitorIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a>

---

##### `putPlan` <a name="putPlan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putPlan"></a>

```typescript
public putPlan(value: DynatraceMonitorPlan): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putPlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putTimeouts"></a>

```typescript
public putTimeouts(value: DynatraceMonitorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts">DynatraceMonitorTimeouts</a>

---

##### `putUser` <a name="putUser" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putUser"></a>

```typescript
public putUser(value: DynatraceMonitorUser): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a>

---

##### `resetEnvironmentProperties` <a name="resetEnvironmentProperties" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetEnvironmentProperties"></a>

```typescript
public resetEnvironmentProperties(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMonitoringEnabled` <a name="resetMonitoringEnabled" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetMonitoringEnabled"></a>

```typescript
public resetMonitoringEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DynatraceMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isConstruct"></a>

```typescript
import { dynatraceMonitor } from '@cdktf/provider-azurerm'

dynatraceMonitor.DynatraceMonitor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformElement"></a>

```typescript
import { dynatraceMonitor } from '@cdktf/provider-azurerm'

dynatraceMonitor.DynatraceMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformResource"></a>

```typescript
import { dynatraceMonitor } from '@cdktf/provider-azurerm'

dynatraceMonitor.DynatraceMonitor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport"></a>

```typescript
import { dynatraceMonitor } from '@cdktf/provider-azurerm'

dynatraceMonitor.DynatraceMonitor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DynatraceMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DynatraceMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DynatraceMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DynatraceMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.environmentProperties">environmentProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList">DynatraceMonitorEnvironmentPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference">DynatraceMonitorIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference">DynatraceMonitorPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference">DynatraceMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.user">user</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference">DynatraceMonitorUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.environmentPropertiesInput">environmentPropertiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties">DynatraceMonitorEnvironmentProperties</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.marketplaceSubscriptionInput">marketplaceSubscriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.monitoringEnabledInput">monitoringEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.planInput">planInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts">DynatraceMonitorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.userInput">userInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.marketplaceSubscription">marketplaceSubscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.monitoringEnabled">monitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `environmentProperties`<sup>Required</sup> <a name="environmentProperties" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.environmentProperties"></a>

```typescript
public readonly environmentProperties: DynatraceMonitorEnvironmentPropertiesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList">DynatraceMonitorEnvironmentPropertiesList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.identity"></a>

```typescript
public readonly identity: DynatraceMonitorIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference">DynatraceMonitorIdentityOutputReference</a>

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.plan"></a>

```typescript
public readonly plan: DynatraceMonitorPlanOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference">DynatraceMonitorPlanOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.timeouts"></a>

```typescript
public readonly timeouts: DynatraceMonitorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference">DynatraceMonitorTimeoutsOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.user"></a>

```typescript
public readonly user: DynatraceMonitorUserOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference">DynatraceMonitorUserOutputReference</a>

---

##### `environmentPropertiesInput`<sup>Optional</sup> <a name="environmentPropertiesInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.environmentPropertiesInput"></a>

```typescript
public readonly environmentPropertiesInput: IResolvable | DynatraceMonitorEnvironmentProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties">DynatraceMonitorEnvironmentProperties</a>[]

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.identityInput"></a>

```typescript
public readonly identityInput: DynatraceMonitorIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `marketplaceSubscriptionInput`<sup>Optional</sup> <a name="marketplaceSubscriptionInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.marketplaceSubscriptionInput"></a>

```typescript
public readonly marketplaceSubscriptionInput: string;
```

- *Type:* string

---

##### `monitoringEnabledInput`<sup>Optional</sup> <a name="monitoringEnabledInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.monitoringEnabledInput"></a>

```typescript
public readonly monitoringEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.planInput"></a>

```typescript
public readonly planInput: DynatraceMonitorPlan;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DynatraceMonitorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts">DynatraceMonitorTimeouts</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.userInput"></a>

```typescript
public readonly userInput: DynatraceMonitorUser;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `marketplaceSubscription`<sup>Required</sup> <a name="marketplaceSubscription" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.marketplaceSubscription"></a>

```typescript
public readonly marketplaceSubscription: string;
```

- *Type:* string

---

##### `monitoringEnabled`<sup>Required</sup> <a name="monitoringEnabled" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.monitoringEnabled"></a>

```typescript
public readonly monitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DynatraceMonitorConfig <a name="DynatraceMonitorConfig" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.Initializer"></a>

```typescript
import { dynatraceMonitor } from '@cdktf/provider-azurerm'

const dynatraceMonitorConfig: dynatraceMonitor.DynatraceMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#location DynatraceMonitor#location}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.marketplaceSubscription">marketplaceSubscription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#marketplace_subscription DynatraceMonitor#marketplace_subscription}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#name DynatraceMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#resource_group_name DynatraceMonitor#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.user">user</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a></code> | user block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.environmentProperties">environmentProperties</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties">DynatraceMonitorEnvironmentProperties</a>[]</code> | environment_properties block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#id DynatraceMonitor#id}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.monitoringEnabled">monitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#monitoring_enabled DynatraceMonitor#monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#tags DynatraceMonitor#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts">DynatraceMonitorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.identity"></a>

```typescript
public readonly identity: DynatraceMonitorIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#identity DynatraceMonitor#identity}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#location DynatraceMonitor#location}.

---

##### `marketplaceSubscription`<sup>Required</sup> <a name="marketplaceSubscription" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.marketplaceSubscription"></a>

```typescript
public readonly marketplaceSubscription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#marketplace_subscription DynatraceMonitor#marketplace_subscription}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#name DynatraceMonitor#name}.

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.plan"></a>

```typescript
public readonly plan: DynatraceMonitorPlan;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#plan DynatraceMonitor#plan}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#resource_group_name DynatraceMonitor#resource_group_name}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.user"></a>

```typescript
public readonly user: DynatraceMonitorUser;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#user DynatraceMonitor#user}

---

##### `environmentProperties`<sup>Optional</sup> <a name="environmentProperties" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.environmentProperties"></a>

```typescript
public readonly environmentProperties: IResolvable | DynatraceMonitorEnvironmentProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties">DynatraceMonitorEnvironmentProperties</a>[]

environment_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#environment_properties DynatraceMonitor#environment_properties}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#id DynatraceMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitoringEnabled`<sup>Optional</sup> <a name="monitoringEnabled" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.monitoringEnabled"></a>

```typescript
public readonly monitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#monitoring_enabled DynatraceMonitor#monitoring_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#tags DynatraceMonitor#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DynatraceMonitorTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts">DynatraceMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#timeouts DynatraceMonitor#timeouts}

---

### DynatraceMonitorEnvironmentProperties <a name="DynatraceMonitorEnvironmentProperties" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties.Initializer"></a>

```typescript
import { dynatraceMonitor } from '@cdktf/provider-azurerm'

const dynatraceMonitorEnvironmentProperties: dynatraceMonitor.DynatraceMonitorEnvironmentProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties.property.environmentInfo">environmentInfo</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo">DynatraceMonitorEnvironmentPropertiesEnvironmentInfo</a>[]</code> | environment_info block. |

---

##### `environmentInfo`<sup>Required</sup> <a name="environmentInfo" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties.property.environmentInfo"></a>

```typescript
public readonly environmentInfo: IResolvable | DynatraceMonitorEnvironmentPropertiesEnvironmentInfo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo">DynatraceMonitorEnvironmentPropertiesEnvironmentInfo</a>[]

environment_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#environment_info DynatraceMonitor#environment_info}

---

### DynatraceMonitorEnvironmentPropertiesEnvironmentInfo <a name="DynatraceMonitorEnvironmentPropertiesEnvironmentInfo" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo.Initializer"></a>

```typescript
import { dynatraceMonitor } from '@cdktf/provider-azurerm'

const dynatraceMonitorEnvironmentPropertiesEnvironmentInfo: dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo.property.environmentId">environmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#environment_id DynatraceMonitor#environment_id}. |

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#environment_id DynatraceMonitor#environment_id}.

---

### DynatraceMonitorIdentity <a name="DynatraceMonitorIdentity" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity.Initializer"></a>

```typescript
import { dynatraceMonitor } from '@cdktf/provider-azurerm'

const dynatraceMonitorIdentity: dynatraceMonitor.DynatraceMonitorIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#type DynatraceMonitor#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#type DynatraceMonitor#type}.

---

### DynatraceMonitorPlan <a name="DynatraceMonitorPlan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.Initializer"></a>

```typescript
import { dynatraceMonitor } from '@cdktf/provider-azurerm'

const dynatraceMonitorPlan: dynatraceMonitor.DynatraceMonitorPlan = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.plan">plan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#plan DynatraceMonitor#plan}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.billingCycle">billingCycle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#billing_cycle DynatraceMonitor#billing_cycle}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.usageType">usageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#usage_type DynatraceMonitor#usage_type}. |

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#plan DynatraceMonitor#plan}.

---

##### `billingCycle`<sup>Optional</sup> <a name="billingCycle" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.billingCycle"></a>

```typescript
public readonly billingCycle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#billing_cycle DynatraceMonitor#billing_cycle}.

---

##### `usageType`<sup>Optional</sup> <a name="usageType" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.usageType"></a>

```typescript
public readonly usageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#usage_type DynatraceMonitor#usage_type}.

---

### DynatraceMonitorTimeouts <a name="DynatraceMonitorTimeouts" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.Initializer"></a>

```typescript
import { dynatraceMonitor } from '@cdktf/provider-azurerm'

const dynatraceMonitorTimeouts: dynatraceMonitor.DynatraceMonitorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#create DynatraceMonitor#create}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#delete DynatraceMonitor#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#read DynatraceMonitor#read}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#update DynatraceMonitor#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#create DynatraceMonitor#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#delete DynatraceMonitor#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#read DynatraceMonitor#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#update DynatraceMonitor#update}.

---

### DynatraceMonitorUser <a name="DynatraceMonitorUser" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.Initializer"></a>

```typescript
import { dynatraceMonitor } from '@cdktf/provider-azurerm'

const dynatraceMonitorUser: dynatraceMonitor.DynatraceMonitorUser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.country">country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#country DynatraceMonitor#country}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#email DynatraceMonitor#email}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.firstName">firstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#first_name DynatraceMonitor#first_name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.lastName">lastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#last_name DynatraceMonitor#last_name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#phone_number DynatraceMonitor#phone_number}. |

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#country DynatraceMonitor#country}.

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#email DynatraceMonitor#email}.

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#first_name DynatraceMonitor#first_name}.

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#last_name DynatraceMonitor#last_name}.

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_monitor#phone_number DynatraceMonitor#phone_number}.

---

## Classes <a name="Classes" id="Classes"></a>

### DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList <a name="DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer"></a>

```typescript
import { dynatraceMonitor } from '@cdktf/provider-azurerm'

new dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.get"></a>

```typescript
public get(index: number): DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo">DynatraceMonitorEnvironmentPropertiesEnvironmentInfo</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynatraceMonitorEnvironmentPropertiesEnvironmentInfo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo">DynatraceMonitorEnvironmentPropertiesEnvironmentInfo</a>[]

---


### DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference <a name="DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer"></a>

```typescript
import { dynatraceMonitor } from '@cdktf/provider-azurerm'

new dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.environmentIdInput">environmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo">DynatraceMonitorEnvironmentPropertiesEnvironmentInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.environmentIdInput"></a>

```typescript
public readonly environmentIdInput: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynatraceMonitorEnvironmentPropertiesEnvironmentInfo;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo">DynatraceMonitorEnvironmentPropertiesEnvironmentInfo</a>

---


### DynatraceMonitorEnvironmentPropertiesList <a name="DynatraceMonitorEnvironmentPropertiesList" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.Initializer"></a>

```typescript
import { dynatraceMonitor } from '@cdktf/provider-azurerm'

new dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.get"></a>

```typescript
public get(index: number): DynatraceMonitorEnvironmentPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties">DynatraceMonitorEnvironmentProperties</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynatraceMonitorEnvironmentProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties">DynatraceMonitorEnvironmentProperties</a>[]

---


### DynatraceMonitorEnvironmentPropertiesOutputReference <a name="DynatraceMonitorEnvironmentPropertiesOutputReference" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer"></a>

```typescript
import { dynatraceMonitor } from '@cdktf/provider-azurerm'

new dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.putEnvironmentInfo">putEnvironmentInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvironmentInfo` <a name="putEnvironmentInfo" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.putEnvironmentInfo"></a>

```typescript
public putEnvironmentInfo(value: IResolvable | DynatraceMonitorEnvironmentPropertiesEnvironmentInfo[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.putEnvironmentInfo.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo">DynatraceMonitorEnvironmentPropertiesEnvironmentInfo</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.environmentInfo">environmentInfo</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList">DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.environmentInfoInput">environmentInfoInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo">DynatraceMonitorEnvironmentPropertiesEnvironmentInfo</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties">DynatraceMonitorEnvironmentProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environmentInfo`<sup>Required</sup> <a name="environmentInfo" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.environmentInfo"></a>

```typescript
public readonly environmentInfo: DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList">DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList</a>

---

##### `environmentInfoInput`<sup>Optional</sup> <a name="environmentInfoInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.environmentInfoInput"></a>

```typescript
public readonly environmentInfoInput: IResolvable | DynatraceMonitorEnvironmentPropertiesEnvironmentInfo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo">DynatraceMonitorEnvironmentPropertiesEnvironmentInfo</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynatraceMonitorEnvironmentProperties;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties">DynatraceMonitorEnvironmentProperties</a>

---


### DynatraceMonitorIdentityOutputReference <a name="DynatraceMonitorIdentityOutputReference" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.Initializer"></a>

```typescript
import { dynatraceMonitor } from '@cdktf/provider-azurerm'

new dynatraceMonitor.DynatraceMonitorIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DynatraceMonitorIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a>

---


### DynatraceMonitorPlanOutputReference <a name="DynatraceMonitorPlanOutputReference" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.Initializer"></a>

```typescript
import { dynatraceMonitor } from '@cdktf/provider-azurerm'

new dynatraceMonitor.DynatraceMonitorPlanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resetBillingCycle">resetBillingCycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resetUsageType">resetUsageType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBillingCycle` <a name="resetBillingCycle" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resetBillingCycle"></a>

```typescript
public resetBillingCycle(): void
```

##### `resetUsageType` <a name="resetUsageType" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resetUsageType"></a>

```typescript
public resetUsageType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.effectiveDate">effectiveDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.billingCycleInput">billingCycleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.planInput">planInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.usageTypeInput">usageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.billingCycle">billingCycle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.plan">plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.usageType">usageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveDate`<sup>Required</sup> <a name="effectiveDate" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.effectiveDate"></a>

```typescript
public readonly effectiveDate: string;
```

- *Type:* string

---

##### `billingCycleInput`<sup>Optional</sup> <a name="billingCycleInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.billingCycleInput"></a>

```typescript
public readonly billingCycleInput: string;
```

- *Type:* string

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.planInput"></a>

```typescript
public readonly planInput: string;
```

- *Type:* string

---

##### `usageTypeInput`<sup>Optional</sup> <a name="usageTypeInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.usageTypeInput"></a>

```typescript
public readonly usageTypeInput: string;
```

- *Type:* string

---

##### `billingCycle`<sup>Required</sup> <a name="billingCycle" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.billingCycle"></a>

```typescript
public readonly billingCycle: string;
```

- *Type:* string

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

---

##### `usageType`<sup>Required</sup> <a name="usageType" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.usageType"></a>

```typescript
public readonly usageType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DynatraceMonitorPlan;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a>

---


### DynatraceMonitorTimeoutsOutputReference <a name="DynatraceMonitorTimeoutsOutputReference" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.Initializer"></a>

```typescript
import { dynatraceMonitor } from '@cdktf/provider-azurerm'

new dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts">DynatraceMonitorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynatraceMonitorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts">DynatraceMonitorTimeouts</a>

---


### DynatraceMonitorUserOutputReference <a name="DynatraceMonitorUserOutputReference" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.Initializer"></a>

```typescript
import { dynatraceMonitor } from '@cdktf/provider-azurerm'

new dynatraceMonitor.DynatraceMonitorUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DynatraceMonitorUser;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a>

---



