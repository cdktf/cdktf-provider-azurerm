# `eventhubNamespace` Submodule <a name="`eventhubNamespace` Submodule" id="@cdktf/provider-azurerm.eventhubNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventhubNamespace <a name="EventhubNamespace" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace azurerm_eventhub_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer"></a>

```typescript
import { eventhubNamespace } from '@cdktf/provider-azurerm'

new eventhubNamespace.EventhubNamespace(scope: Construct, id: string, config: EventhubNamespaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig">EventhubNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig">EventhubNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.putNetworkRulesets">putNetworkRulesets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetAutoInflateEnabled">resetAutoInflateEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetCapacity">resetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetDedicatedClusterId">resetDedicatedClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetLocalAuthenticationEnabled">resetLocalAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetMaximumThroughputUnits">resetMaximumThroughputUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetMinimumTlsVersion">resetMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetNetworkRulesets">resetNetworkRulesets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.putIdentity"></a>

```typescript
public putIdentity(value: EventhubNamespaceIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity">EventhubNamespaceIdentity</a>

---

##### `putNetworkRulesets` <a name="putNetworkRulesets" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.putNetworkRulesets"></a>

```typescript
public putNetworkRulesets(value: IResolvable | EventhubNamespaceNetworkRulesets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.putNetworkRulesets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.putTimeouts"></a>

```typescript
public putTimeouts(value: EventhubNamespaceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts">EventhubNamespaceTimeouts</a>

---

##### `resetAutoInflateEnabled` <a name="resetAutoInflateEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetAutoInflateEnabled"></a>

```typescript
public resetAutoInflateEnabled(): void
```

##### `resetCapacity` <a name="resetCapacity" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetCapacity"></a>

```typescript
public resetCapacity(): void
```

##### `resetDedicatedClusterId` <a name="resetDedicatedClusterId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetDedicatedClusterId"></a>

```typescript
public resetDedicatedClusterId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetLocalAuthenticationEnabled` <a name="resetLocalAuthenticationEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetLocalAuthenticationEnabled"></a>

```typescript
public resetLocalAuthenticationEnabled(): void
```

##### `resetMaximumThroughputUnits` <a name="resetMaximumThroughputUnits" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetMaximumThroughputUnits"></a>

```typescript
public resetMaximumThroughputUnits(): void
```

##### `resetMinimumTlsVersion` <a name="resetMinimumTlsVersion" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetMinimumTlsVersion"></a>

```typescript
public resetMinimumTlsVersion(): void
```

##### `resetNetworkRulesets` <a name="resetNetworkRulesets" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetNetworkRulesets"></a>

```typescript
public resetNetworkRulesets(): void
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetPublicNetworkAccessEnabled"></a>

```typescript
public resetPublicNetworkAccessEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EventhubNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.isConstruct"></a>

```typescript
import { eventhubNamespace } from '@cdktf/provider-azurerm'

eventhubNamespace.EventhubNamespace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.isTerraformElement"></a>

```typescript
import { eventhubNamespace } from '@cdktf/provider-azurerm'

eventhubNamespace.EventhubNamespace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.isTerraformResource"></a>

```typescript
import { eventhubNamespace } from '@cdktf/provider-azurerm'

eventhubNamespace.EventhubNamespace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.generateConfigForImport"></a>

```typescript
import { eventhubNamespace } from '@cdktf/provider-azurerm'

eventhubNamespace.EventhubNamespace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EventhubNamespace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventhubNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventhubNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EventhubNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultPrimaryConnectionString">defaultPrimaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultPrimaryConnectionStringAlias">defaultPrimaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultPrimaryKey">defaultPrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultSecondaryConnectionString">defaultSecondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultSecondaryConnectionStringAlias">defaultSecondaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultSecondaryKey">defaultSecondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference">EventhubNamespaceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.networkRulesets">networkRulesets</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList">EventhubNamespaceNetworkRulesetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference">EventhubNamespaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.autoInflateEnabledInput">autoInflateEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.capacityInput">capacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.dedicatedClusterIdInput">dedicatedClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity">EventhubNamespaceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.localAuthenticationEnabledInput">localAuthenticationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.maximumThroughputUnitsInput">maximumThroughputUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.minimumTlsVersionInput">minimumTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.networkRulesetsInput">networkRulesetsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.skuInput">skuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts">EventhubNamespaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.autoInflateEnabled">autoInflateEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.capacity">capacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.dedicatedClusterId">dedicatedClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.localAuthenticationEnabled">localAuthenticationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.maximumThroughputUnits">maximumThroughputUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultPrimaryConnectionString`<sup>Required</sup> <a name="defaultPrimaryConnectionString" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultPrimaryConnectionString"></a>

```typescript
public readonly defaultPrimaryConnectionString: string;
```

- *Type:* string

---

##### `defaultPrimaryConnectionStringAlias`<sup>Required</sup> <a name="defaultPrimaryConnectionStringAlias" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultPrimaryConnectionStringAlias"></a>

```typescript
public readonly defaultPrimaryConnectionStringAlias: string;
```

- *Type:* string

---

##### `defaultPrimaryKey`<sup>Required</sup> <a name="defaultPrimaryKey" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultPrimaryKey"></a>

```typescript
public readonly defaultPrimaryKey: string;
```

- *Type:* string

---

##### `defaultSecondaryConnectionString`<sup>Required</sup> <a name="defaultSecondaryConnectionString" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultSecondaryConnectionString"></a>

```typescript
public readonly defaultSecondaryConnectionString: string;
```

- *Type:* string

---

##### `defaultSecondaryConnectionStringAlias`<sup>Required</sup> <a name="defaultSecondaryConnectionStringAlias" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultSecondaryConnectionStringAlias"></a>

```typescript
public readonly defaultSecondaryConnectionStringAlias: string;
```

- *Type:* string

---

##### `defaultSecondaryKey`<sup>Required</sup> <a name="defaultSecondaryKey" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultSecondaryKey"></a>

```typescript
public readonly defaultSecondaryKey: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.identity"></a>

```typescript
public readonly identity: EventhubNamespaceIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference">EventhubNamespaceIdentityOutputReference</a>

---

##### `networkRulesets`<sup>Required</sup> <a name="networkRulesets" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.networkRulesets"></a>

```typescript
public readonly networkRulesets: EventhubNamespaceNetworkRulesetsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList">EventhubNamespaceNetworkRulesetsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.timeouts"></a>

```typescript
public readonly timeouts: EventhubNamespaceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference">EventhubNamespaceTimeoutsOutputReference</a>

---

##### `autoInflateEnabledInput`<sup>Optional</sup> <a name="autoInflateEnabledInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.autoInflateEnabledInput"></a>

```typescript
public readonly autoInflateEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.capacityInput"></a>

```typescript
public readonly capacityInput: number;
```

- *Type:* number

---

##### `dedicatedClusterIdInput`<sup>Optional</sup> <a name="dedicatedClusterIdInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.dedicatedClusterIdInput"></a>

```typescript
public readonly dedicatedClusterIdInput: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.identityInput"></a>

```typescript
public readonly identityInput: EventhubNamespaceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity">EventhubNamespaceIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localAuthenticationEnabledInput`<sup>Optional</sup> <a name="localAuthenticationEnabledInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.localAuthenticationEnabledInput"></a>

```typescript
public readonly localAuthenticationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maximumThroughputUnitsInput`<sup>Optional</sup> <a name="maximumThroughputUnitsInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.maximumThroughputUnitsInput"></a>

```typescript
public readonly maximumThroughputUnitsInput: number;
```

- *Type:* number

---

##### `minimumTlsVersionInput`<sup>Optional</sup> <a name="minimumTlsVersionInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.minimumTlsVersionInput"></a>

```typescript
public readonly minimumTlsVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkRulesetsInput`<sup>Optional</sup> <a name="networkRulesetsInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.networkRulesetsInput"></a>

```typescript
public readonly networkRulesetsInput: IResolvable | EventhubNamespaceNetworkRulesets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>[]

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.skuInput"></a>

```typescript
public readonly skuInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EventhubNamespaceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts">EventhubNamespaceTimeouts</a>

---

##### `autoInflateEnabled`<sup>Required</sup> <a name="autoInflateEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.autoInflateEnabled"></a>

```typescript
public readonly autoInflateEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

---

##### `dedicatedClusterId`<sup>Required</sup> <a name="dedicatedClusterId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.dedicatedClusterId"></a>

```typescript
public readonly dedicatedClusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `localAuthenticationEnabled`<sup>Required</sup> <a name="localAuthenticationEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.localAuthenticationEnabled"></a>

```typescript
public readonly localAuthenticationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `maximumThroughputUnits`<sup>Required</sup> <a name="maximumThroughputUnits" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.maximumThroughputUnits"></a>

```typescript
public readonly maximumThroughputUnits: number;
```

- *Type:* number

---

##### `minimumTlsVersion`<sup>Required</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.minimumTlsVersion"></a>

```typescript
public readonly minimumTlsVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventhubNamespaceConfig <a name="EventhubNamespaceConfig" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.Initializer"></a>

```typescript
import { eventhubNamespace } from '@cdktf/provider-azurerm'

const eventhubNamespaceConfig: eventhubNamespace.EventhubNamespaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#location EventhubNamespace#location}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#name EventhubNamespace#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#resource_group_name EventhubNamespace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.sku">sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#sku EventhubNamespace#sku}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.autoInflateEnabled">autoInflateEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#auto_inflate_enabled EventhubNamespace#auto_inflate_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.capacity">capacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#capacity EventhubNamespace#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.dedicatedClusterId">dedicatedClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#dedicated_cluster_id EventhubNamespace#dedicated_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#id EventhubNamespace#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity">EventhubNamespaceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.localAuthenticationEnabled">localAuthenticationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#local_authentication_enabled EventhubNamespace#local_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.maximumThroughputUnits">maximumThroughputUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#maximum_throughput_units EventhubNamespace#maximum_throughput_units}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#minimum_tls_version EventhubNamespace#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.networkRulesets">networkRulesets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#network_rulesets EventhubNamespace#network_rulesets}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#public_network_access_enabled EventhubNamespace#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#tags EventhubNamespace#tags}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts">EventhubNamespaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#location EventhubNamespace#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#name EventhubNamespace#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#resource_group_name EventhubNamespace#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#sku EventhubNamespace#sku}.

---

##### `autoInflateEnabled`<sup>Optional</sup> <a name="autoInflateEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.autoInflateEnabled"></a>

```typescript
public readonly autoInflateEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#auto_inflate_enabled EventhubNamespace#auto_inflate_enabled}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#capacity EventhubNamespace#capacity}.

---

##### `dedicatedClusterId`<sup>Optional</sup> <a name="dedicatedClusterId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.dedicatedClusterId"></a>

```typescript
public readonly dedicatedClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#dedicated_cluster_id EventhubNamespace#dedicated_cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#id EventhubNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.identity"></a>

```typescript
public readonly identity: EventhubNamespaceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity">EventhubNamespaceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#identity EventhubNamespace#identity}

---

##### `localAuthenticationEnabled`<sup>Optional</sup> <a name="localAuthenticationEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.localAuthenticationEnabled"></a>

```typescript
public readonly localAuthenticationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#local_authentication_enabled EventhubNamespace#local_authentication_enabled}.

---

##### `maximumThroughputUnits`<sup>Optional</sup> <a name="maximumThroughputUnits" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.maximumThroughputUnits"></a>

```typescript
public readonly maximumThroughputUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#maximum_throughput_units EventhubNamespace#maximum_throughput_units}.

---

##### `minimumTlsVersion`<sup>Optional</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.minimumTlsVersion"></a>

```typescript
public readonly minimumTlsVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#minimum_tls_version EventhubNamespace#minimum_tls_version}.

---

##### `networkRulesets`<sup>Optional</sup> <a name="networkRulesets" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.networkRulesets"></a>

```typescript
public readonly networkRulesets: IResolvable | EventhubNamespaceNetworkRulesets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#network_rulesets EventhubNamespace#network_rulesets}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#public_network_access_enabled EventhubNamespace#public_network_access_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#tags EventhubNamespace#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EventhubNamespaceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts">EventhubNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#timeouts EventhubNamespace#timeouts}

---

### EventhubNamespaceIdentity <a name="EventhubNamespaceIdentity" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity.Initializer"></a>

```typescript
import { eventhubNamespace } from '@cdktf/provider-azurerm'

const eventhubNamespaceIdentity: eventhubNamespace.EventhubNamespaceIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#type EventhubNamespace#type}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#identity_ids EventhubNamespace#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#type EventhubNamespace#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#identity_ids EventhubNamespace#identity_ids}.

---

### EventhubNamespaceNetworkRulesets <a name="EventhubNamespaceNetworkRulesets" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.Initializer"></a>

```typescript
import { eventhubNamespace } from '@cdktf/provider-azurerm'

const eventhubNamespaceNetworkRulesets: eventhubNamespace.EventhubNamespaceNetworkRulesets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.defaultAction">defaultAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#default_action EventhubNamespace#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.ipRule">ipRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#ip_rule EventhubNamespace#ip_rule}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#public_network_access_enabled EventhubNamespace#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.trustedServiceAccessEnabled">trustedServiceAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#trusted_service_access_enabled EventhubNamespace#trusted_service_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.virtualNetworkRule">virtualNetworkRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#virtual_network_rule EventhubNamespace#virtual_network_rule}. |

---

##### `defaultAction`<sup>Optional</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.defaultAction"></a>

```typescript
public readonly defaultAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#default_action EventhubNamespace#default_action}.

---

##### `ipRule`<sup>Optional</sup> <a name="ipRule" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.ipRule"></a>

```typescript
public readonly ipRule: IResolvable | EventhubNamespaceNetworkRulesetsIpRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#ip_rule EventhubNamespace#ip_rule}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#public_network_access_enabled EventhubNamespace#public_network_access_enabled}.

---

##### `trustedServiceAccessEnabled`<sup>Optional</sup> <a name="trustedServiceAccessEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.trustedServiceAccessEnabled"></a>

```typescript
public readonly trustedServiceAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#trusted_service_access_enabled EventhubNamespace#trusted_service_access_enabled}.

---

##### `virtualNetworkRule`<sup>Optional</sup> <a name="virtualNetworkRule" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.virtualNetworkRule"></a>

```typescript
public readonly virtualNetworkRule: IResolvable | EventhubNamespaceNetworkRulesetsVirtualNetworkRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#virtual_network_rule EventhubNamespace#virtual_network_rule}.

---

### EventhubNamespaceNetworkRulesetsIpRule <a name="EventhubNamespaceNetworkRulesetsIpRule" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule.Initializer"></a>

```typescript
import { eventhubNamespace } from '@cdktf/provider-azurerm'

const eventhubNamespaceNetworkRulesetsIpRule: eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#action EventhubNamespace#action}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule.property.ipMask">ipMask</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#ip_mask EventhubNamespace#ip_mask}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#action EventhubNamespace#action}.

---

##### `ipMask`<sup>Optional</sup> <a name="ipMask" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule.property.ipMask"></a>

```typescript
public readonly ipMask: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#ip_mask EventhubNamespace#ip_mask}.

---

### EventhubNamespaceNetworkRulesetsVirtualNetworkRule <a name="EventhubNamespaceNetworkRulesetsVirtualNetworkRule" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule.Initializer"></a>

```typescript
import { eventhubNamespace } from '@cdktf/provider-azurerm'

const eventhubNamespaceNetworkRulesetsVirtualNetworkRule: eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule.property.ignoreMissingVirtualNetworkServiceEndpoint">ignoreMissingVirtualNetworkServiceEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#ignore_missing_virtual_network_service_endpoint EventhubNamespace#ignore_missing_virtual_network_service_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#subnet_id EventhubNamespace#subnet_id}. |

---

##### `ignoreMissingVirtualNetworkServiceEndpoint`<sup>Optional</sup> <a name="ignoreMissingVirtualNetworkServiceEndpoint" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule.property.ignoreMissingVirtualNetworkServiceEndpoint"></a>

```typescript
public readonly ignoreMissingVirtualNetworkServiceEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#ignore_missing_virtual_network_service_endpoint EventhubNamespace#ignore_missing_virtual_network_service_endpoint}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#subnet_id EventhubNamespace#subnet_id}.

---

### EventhubNamespaceTimeouts <a name="EventhubNamespaceTimeouts" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.Initializer"></a>

```typescript
import { eventhubNamespace } from '@cdktf/provider-azurerm'

const eventhubNamespaceTimeouts: eventhubNamespace.EventhubNamespaceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#create EventhubNamespace#create}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#delete EventhubNamespace#delete}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#read EventhubNamespace#read}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#update EventhubNamespace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#create EventhubNamespace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#delete EventhubNamespace#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#read EventhubNamespace#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/eventhub_namespace#update EventhubNamespace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventhubNamespaceIdentityOutputReference <a name="EventhubNamespaceIdentityOutputReference" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.Initializer"></a>

```typescript
import { eventhubNamespace } from '@cdktf/provider-azurerm'

new eventhubNamespace.EventhubNamespaceIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity">EventhubNamespaceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventhubNamespaceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity">EventhubNamespaceIdentity</a>

---


### EventhubNamespaceNetworkRulesetsIpRuleList <a name="EventhubNamespaceNetworkRulesetsIpRuleList" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.Initializer"></a>

```typescript
import { eventhubNamespace } from '@cdktf/provider-azurerm'

new eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.get"></a>

```typescript
public get(index: number): EventhubNamespaceNetworkRulesetsIpRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventhubNamespaceNetworkRulesetsIpRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>[]

---


### EventhubNamespaceNetworkRulesetsIpRuleOutputReference <a name="EventhubNamespaceNetworkRulesetsIpRuleOutputReference" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer"></a>

```typescript
import { eventhubNamespace } from '@cdktf/provider-azurerm'

new eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.resetIpMask">resetIpMask</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetIpMask` <a name="resetIpMask" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.resetIpMask"></a>

```typescript
public resetIpMask(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.ipMaskInput">ipMaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.ipMask">ipMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `ipMaskInput`<sup>Optional</sup> <a name="ipMaskInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.ipMaskInput"></a>

```typescript
public readonly ipMaskInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `ipMask`<sup>Required</sup> <a name="ipMask" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.ipMask"></a>

```typescript
public readonly ipMask: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventhubNamespaceNetworkRulesetsIpRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>

---


### EventhubNamespaceNetworkRulesetsList <a name="EventhubNamespaceNetworkRulesetsList" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.Initializer"></a>

```typescript
import { eventhubNamespace } from '@cdktf/provider-azurerm'

new eventhubNamespace.EventhubNamespaceNetworkRulesetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.get"></a>

```typescript
public get(index: number): EventhubNamespaceNetworkRulesetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventhubNamespaceNetworkRulesets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>[]

---


### EventhubNamespaceNetworkRulesetsOutputReference <a name="EventhubNamespaceNetworkRulesetsOutputReference" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer"></a>

```typescript
import { eventhubNamespace } from '@cdktf/provider-azurerm'

new eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.putIpRule">putIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.putVirtualNetworkRule">putVirtualNetworkRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetDefaultAction">resetDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetIpRule">resetIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetTrustedServiceAccessEnabled">resetTrustedServiceAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetVirtualNetworkRule">resetVirtualNetworkRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpRule` <a name="putIpRule" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.putIpRule"></a>

```typescript
public putIpRule(value: IResolvable | EventhubNamespaceNetworkRulesetsIpRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.putIpRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>[]

---

##### `putVirtualNetworkRule` <a name="putVirtualNetworkRule" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.putVirtualNetworkRule"></a>

```typescript
public putVirtualNetworkRule(value: IResolvable | EventhubNamespaceNetworkRulesetsVirtualNetworkRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.putVirtualNetworkRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>[]

---

##### `resetDefaultAction` <a name="resetDefaultAction" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetDefaultAction"></a>

```typescript
public resetDefaultAction(): void
```

##### `resetIpRule` <a name="resetIpRule" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetIpRule"></a>

```typescript
public resetIpRule(): void
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetPublicNetworkAccessEnabled"></a>

```typescript
public resetPublicNetworkAccessEnabled(): void
```

##### `resetTrustedServiceAccessEnabled` <a name="resetTrustedServiceAccessEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetTrustedServiceAccessEnabled"></a>

```typescript
public resetTrustedServiceAccessEnabled(): void
```

##### `resetVirtualNetworkRule` <a name="resetVirtualNetworkRule" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetVirtualNetworkRule"></a>

```typescript
public resetVirtualNetworkRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.ipRule">ipRule</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList">EventhubNamespaceNetworkRulesetsIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.virtualNetworkRule">virtualNetworkRule</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList">EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.defaultActionInput">defaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.ipRuleInput">ipRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.trustedServiceAccessEnabledInput">trustedServiceAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.virtualNetworkRuleInput">virtualNetworkRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.defaultAction">defaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.trustedServiceAccessEnabled">trustedServiceAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipRule`<sup>Required</sup> <a name="ipRule" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.ipRule"></a>

```typescript
public readonly ipRule: EventhubNamespaceNetworkRulesetsIpRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList">EventhubNamespaceNetworkRulesetsIpRuleList</a>

---

##### `virtualNetworkRule`<sup>Required</sup> <a name="virtualNetworkRule" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.virtualNetworkRule"></a>

```typescript
public readonly virtualNetworkRule: EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList">EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList</a>

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.defaultActionInput"></a>

```typescript
public readonly defaultActionInput: string;
```

- *Type:* string

---

##### `ipRuleInput`<sup>Optional</sup> <a name="ipRuleInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.ipRuleInput"></a>

```typescript
public readonly ipRuleInput: IResolvable | EventhubNamespaceNetworkRulesetsIpRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>[]

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `trustedServiceAccessEnabledInput`<sup>Optional</sup> <a name="trustedServiceAccessEnabledInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.trustedServiceAccessEnabledInput"></a>

```typescript
public readonly trustedServiceAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `virtualNetworkRuleInput`<sup>Optional</sup> <a name="virtualNetworkRuleInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.virtualNetworkRuleInput"></a>

```typescript
public readonly virtualNetworkRuleInput: IResolvable | EventhubNamespaceNetworkRulesetsVirtualNetworkRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>[]

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.defaultAction"></a>

```typescript
public readonly defaultAction: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `trustedServiceAccessEnabled`<sup>Required</sup> <a name="trustedServiceAccessEnabled" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.trustedServiceAccessEnabled"></a>

```typescript
public readonly trustedServiceAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventhubNamespaceNetworkRulesets;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>

---


### EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList <a name="EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.Initializer"></a>

```typescript
import { eventhubNamespace } from '@cdktf/provider-azurerm'

new eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.get"></a>

```typescript
public get(index: number): EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventhubNamespaceNetworkRulesetsVirtualNetworkRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>[]

---


### EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference <a name="EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer"></a>

```typescript
import { eventhubNamespace } from '@cdktf/provider-azurerm'

new eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.resetIgnoreMissingVirtualNetworkServiceEndpoint">resetIgnoreMissingVirtualNetworkServiceEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreMissingVirtualNetworkServiceEndpoint` <a name="resetIgnoreMissingVirtualNetworkServiceEndpoint" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.resetIgnoreMissingVirtualNetworkServiceEndpoint"></a>

```typescript
public resetIgnoreMissingVirtualNetworkServiceEndpoint(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.ignoreMissingVirtualNetworkServiceEndpointInput">ignoreMissingVirtualNetworkServiceEndpointInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.ignoreMissingVirtualNetworkServiceEndpoint">ignoreMissingVirtualNetworkServiceEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ignoreMissingVirtualNetworkServiceEndpointInput`<sup>Optional</sup> <a name="ignoreMissingVirtualNetworkServiceEndpointInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.ignoreMissingVirtualNetworkServiceEndpointInput"></a>

```typescript
public readonly ignoreMissingVirtualNetworkServiceEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `ignoreMissingVirtualNetworkServiceEndpoint`<sup>Required</sup> <a name="ignoreMissingVirtualNetworkServiceEndpoint" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.ignoreMissingVirtualNetworkServiceEndpoint"></a>

```typescript
public readonly ignoreMissingVirtualNetworkServiceEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventhubNamespaceNetworkRulesetsVirtualNetworkRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>

---


### EventhubNamespaceTimeoutsOutputReference <a name="EventhubNamespaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.Initializer"></a>

```typescript
import { eventhubNamespace } from '@cdktf/provider-azurerm'

new eventhubNamespace.EventhubNamespaceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts">EventhubNamespaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventhubNamespaceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts">EventhubNamespaceTimeouts</a>

---



