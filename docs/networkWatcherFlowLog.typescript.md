# `networkWatcherFlowLog` Submodule <a name="`networkWatcherFlowLog` Submodule" id="@cdktf/provider-azurerm.networkWatcherFlowLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkWatcherFlowLog <a name="NetworkWatcherFlowLog" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log azurerm_network_watcher_flow_log}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer"></a>

```typescript
import { networkWatcherFlowLog } from '@cdktf/provider-azurerm'

new networkWatcherFlowLog.NetworkWatcherFlowLog(scope: Construct, id: string, config: NetworkWatcherFlowLogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig">NetworkWatcherFlowLogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig">NetworkWatcherFlowLogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putRetentionPolicy">putRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTrafficAnalytics">putTrafficAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetTrafficAnalytics">resetTrafficAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRetentionPolicy` <a name="putRetentionPolicy" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putRetentionPolicy"></a>

```typescript
public putRetentionPolicy(value: NetworkWatcherFlowLogRetentionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy">NetworkWatcherFlowLogRetentionPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkWatcherFlowLogTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts">NetworkWatcherFlowLogTimeouts</a>

---

##### `putTrafficAnalytics` <a name="putTrafficAnalytics" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTrafficAnalytics"></a>

```typescript
public putTrafficAnalytics(value: NetworkWatcherFlowLogTrafficAnalytics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTrafficAnalytics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics">NetworkWatcherFlowLogTrafficAnalytics</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTrafficAnalytics` <a name="resetTrafficAnalytics" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetTrafficAnalytics"></a>

```typescript
public resetTrafficAnalytics(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkWatcherFlowLog resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isConstruct"></a>

```typescript
import { networkWatcherFlowLog } from '@cdktf/provider-azurerm'

networkWatcherFlowLog.NetworkWatcherFlowLog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isTerraformElement"></a>

```typescript
import { networkWatcherFlowLog } from '@cdktf/provider-azurerm'

networkWatcherFlowLog.NetworkWatcherFlowLog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isTerraformResource"></a>

```typescript
import { networkWatcherFlowLog } from '@cdktf/provider-azurerm'

networkWatcherFlowLog.NetworkWatcherFlowLog.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.generateConfigForImport"></a>

```typescript
import { networkWatcherFlowLog } from '@cdktf/provider-azurerm'

networkWatcherFlowLog.NetworkWatcherFlowLog.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkWatcherFlowLog resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkWatcherFlowLog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkWatcherFlowLog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkWatcherFlowLog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference">NetworkWatcherFlowLogRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference">NetworkWatcherFlowLogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.trafficAnalytics">trafficAnalytics</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference">NetworkWatcherFlowLogTrafficAnalyticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkSecurityGroupIdInput">networkSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkWatcherNameInput">networkWatcherNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.retentionPolicyInput">retentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy">NetworkWatcherFlowLogRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts">NetworkWatcherFlowLogTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.trafficAnalyticsInput">trafficAnalyticsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics">NetworkWatcherFlowLogTrafficAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkSecurityGroupId">networkSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkWatcherName">networkWatcherName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.version">version</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.retentionPolicy"></a>

```typescript
public readonly retentionPolicy: NetworkWatcherFlowLogRetentionPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference">NetworkWatcherFlowLogRetentionPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkWatcherFlowLogTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference">NetworkWatcherFlowLogTimeoutsOutputReference</a>

---

##### `trafficAnalytics`<sup>Required</sup> <a name="trafficAnalytics" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.trafficAnalytics"></a>

```typescript
public readonly trafficAnalytics: NetworkWatcherFlowLogTrafficAnalyticsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference">NetworkWatcherFlowLogTrafficAnalyticsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkSecurityGroupIdInput`<sup>Optional</sup> <a name="networkSecurityGroupIdInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkSecurityGroupIdInput"></a>

```typescript
public readonly networkSecurityGroupIdInput: string;
```

- *Type:* string

---

##### `networkWatcherNameInput`<sup>Optional</sup> <a name="networkWatcherNameInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkWatcherNameInput"></a>

```typescript
public readonly networkWatcherNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `retentionPolicyInput`<sup>Optional</sup> <a name="retentionPolicyInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.retentionPolicyInput"></a>

```typescript
public readonly retentionPolicyInput: NetworkWatcherFlowLogRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy">NetworkWatcherFlowLogRetentionPolicy</a>

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkWatcherFlowLogTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts">NetworkWatcherFlowLogTimeouts</a>

---

##### `trafficAnalyticsInput`<sup>Optional</sup> <a name="trafficAnalyticsInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.trafficAnalyticsInput"></a>

```typescript
public readonly trafficAnalyticsInput: NetworkWatcherFlowLogTrafficAnalytics;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics">NetworkWatcherFlowLogTrafficAnalytics</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkSecurityGroupId`<sup>Required</sup> <a name="networkSecurityGroupId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkSecurityGroupId"></a>

```typescript
public readonly networkSecurityGroupId: string;
```

- *Type:* string

---

##### `networkWatcherName`<sup>Required</sup> <a name="networkWatcherName" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkWatcherName"></a>

```typescript
public readonly networkWatcherName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkWatcherFlowLogConfig <a name="NetworkWatcherFlowLogConfig" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.Initializer"></a>

```typescript
import { networkWatcherFlowLog } from '@cdktf/provider-azurerm'

const networkWatcherFlowLogConfig: networkWatcherFlowLog.NetworkWatcherFlowLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#name NetworkWatcherFlowLog#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.networkSecurityGroupId">networkSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#network_security_group_id NetworkWatcherFlowLog#network_security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.networkWatcherName">networkWatcherName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#network_watcher_name NetworkWatcherFlowLog#network_watcher_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#resource_group_name NetworkWatcherFlowLog#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy">NetworkWatcherFlowLogRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#storage_account_id NetworkWatcherFlowLog#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#id NetworkWatcherFlowLog#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#location NetworkWatcherFlowLog#location}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#tags NetworkWatcherFlowLog#tags}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts">NetworkWatcherFlowLogTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.trafficAnalytics">trafficAnalytics</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics">NetworkWatcherFlowLogTrafficAnalytics</a></code> | traffic_analytics block. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.version">version</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#version NetworkWatcherFlowLog#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#name NetworkWatcherFlowLog#name}.

---

##### `networkSecurityGroupId`<sup>Required</sup> <a name="networkSecurityGroupId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.networkSecurityGroupId"></a>

```typescript
public readonly networkSecurityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#network_security_group_id NetworkWatcherFlowLog#network_security_group_id}.

---

##### `networkWatcherName`<sup>Required</sup> <a name="networkWatcherName" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.networkWatcherName"></a>

```typescript
public readonly networkWatcherName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#network_watcher_name NetworkWatcherFlowLog#network_watcher_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#resource_group_name NetworkWatcherFlowLog#resource_group_name}.

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.retentionPolicy"></a>

```typescript
public readonly retentionPolicy: NetworkWatcherFlowLogRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy">NetworkWatcherFlowLogRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#retention_policy NetworkWatcherFlowLog#retention_policy}

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#storage_account_id NetworkWatcherFlowLog#storage_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#id NetworkWatcherFlowLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#location NetworkWatcherFlowLog#location}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#tags NetworkWatcherFlowLog#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkWatcherFlowLogTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts">NetworkWatcherFlowLogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#timeouts NetworkWatcherFlowLog#timeouts}

---

##### `trafficAnalytics`<sup>Optional</sup> <a name="trafficAnalytics" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.trafficAnalytics"></a>

```typescript
public readonly trafficAnalytics: NetworkWatcherFlowLogTrafficAnalytics;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics">NetworkWatcherFlowLogTrafficAnalytics</a>

traffic_analytics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#traffic_analytics NetworkWatcherFlowLog#traffic_analytics}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#version NetworkWatcherFlowLog#version}.

---

### NetworkWatcherFlowLogRetentionPolicy <a name="NetworkWatcherFlowLogRetentionPolicy" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy.Initializer"></a>

```typescript
import { networkWatcherFlowLog } from '@cdktf/provider-azurerm'

const networkWatcherFlowLogRetentionPolicy: networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy.property.days">days</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#days NetworkWatcherFlowLog#days}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}. |

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#days NetworkWatcherFlowLog#days}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}.

---

### NetworkWatcherFlowLogTimeouts <a name="NetworkWatcherFlowLogTimeouts" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.Initializer"></a>

```typescript
import { networkWatcherFlowLog } from '@cdktf/provider-azurerm'

const networkWatcherFlowLogTimeouts: networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#create NetworkWatcherFlowLog#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#delete NetworkWatcherFlowLog#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#read NetworkWatcherFlowLog#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#update NetworkWatcherFlowLog#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#create NetworkWatcherFlowLog#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#delete NetworkWatcherFlowLog#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#read NetworkWatcherFlowLog#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#update NetworkWatcherFlowLog#update}.

---

### NetworkWatcherFlowLogTrafficAnalytics <a name="NetworkWatcherFlowLogTrafficAnalytics" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.Initializer"></a>

```typescript
import { networkWatcherFlowLog } from '@cdktf/provider-azurerm'

const networkWatcherFlowLogTrafficAnalytics: networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#workspace_id NetworkWatcherFlowLog#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.workspaceRegion">workspaceRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#workspace_region NetworkWatcherFlowLog#workspace_region}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.workspaceResourceId">workspaceResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#workspace_resource_id NetworkWatcherFlowLog#workspace_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.intervalInMinutes">intervalInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#interval_in_minutes NetworkWatcherFlowLog#interval_in_minutes}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#workspace_id NetworkWatcherFlowLog#workspace_id}.

---

##### `workspaceRegion`<sup>Required</sup> <a name="workspaceRegion" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.workspaceRegion"></a>

```typescript
public readonly workspaceRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#workspace_region NetworkWatcherFlowLog#workspace_region}.

---

##### `workspaceResourceId`<sup>Required</sup> <a name="workspaceResourceId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.workspaceResourceId"></a>

```typescript
public readonly workspaceResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#workspace_resource_id NetworkWatcherFlowLog#workspace_resource_id}.

---

##### `intervalInMinutes`<sup>Optional</sup> <a name="intervalInMinutes" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.intervalInMinutes"></a>

```typescript
public readonly intervalInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/network_watcher_flow_log#interval_in_minutes NetworkWatcherFlowLog#interval_in_minutes}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkWatcherFlowLogRetentionPolicyOutputReference <a name="NetworkWatcherFlowLogRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.Initializer"></a>

```typescript
import { networkWatcherFlowLog } from '@cdktf/provider-azurerm'

new networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy">NetworkWatcherFlowLogRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkWatcherFlowLogRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy">NetworkWatcherFlowLogRetentionPolicy</a>

---


### NetworkWatcherFlowLogTimeoutsOutputReference <a name="NetworkWatcherFlowLogTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkWatcherFlowLog } from '@cdktf/provider-azurerm'

new networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts">NetworkWatcherFlowLogTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkWatcherFlowLogTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts">NetworkWatcherFlowLogTimeouts</a>

---


### NetworkWatcherFlowLogTrafficAnalyticsOutputReference <a name="NetworkWatcherFlowLogTrafficAnalyticsOutputReference" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.Initializer"></a>

```typescript
import { networkWatcherFlowLog } from '@cdktf/provider-azurerm'

new networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.resetIntervalInMinutes">resetIntervalInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntervalInMinutes` <a name="resetIntervalInMinutes" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.resetIntervalInMinutes"></a>

```typescript
public resetIntervalInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.intervalInMinutesInput">intervalInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceRegionInput">workspaceRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceResourceIdInput">workspaceResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.intervalInMinutes">intervalInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceRegion">workspaceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceResourceId">workspaceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics">NetworkWatcherFlowLogTrafficAnalytics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `intervalInMinutesInput`<sup>Optional</sup> <a name="intervalInMinutesInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.intervalInMinutesInput"></a>

```typescript
public readonly intervalInMinutesInput: number;
```

- *Type:* number

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceRegionInput`<sup>Optional</sup> <a name="workspaceRegionInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceRegionInput"></a>

```typescript
public readonly workspaceRegionInput: string;
```

- *Type:* string

---

##### `workspaceResourceIdInput`<sup>Optional</sup> <a name="workspaceResourceIdInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceResourceIdInput"></a>

```typescript
public readonly workspaceResourceIdInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `intervalInMinutes`<sup>Required</sup> <a name="intervalInMinutes" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.intervalInMinutes"></a>

```typescript
public readonly intervalInMinutes: number;
```

- *Type:* number

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `workspaceRegion`<sup>Required</sup> <a name="workspaceRegion" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceRegion"></a>

```typescript
public readonly workspaceRegion: string;
```

- *Type:* string

---

##### `workspaceResourceId`<sup>Required</sup> <a name="workspaceResourceId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceResourceId"></a>

```typescript
public readonly workspaceResourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkWatcherFlowLogTrafficAnalytics;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics">NetworkWatcherFlowLogTrafficAnalytics</a>

---



