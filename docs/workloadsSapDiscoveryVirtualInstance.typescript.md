# `workloadsSapDiscoveryVirtualInstance` Submodule <a name="`workloadsSapDiscoveryVirtualInstance` Submodule" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkloadsSapDiscoveryVirtualInstance <a name="WorkloadsSapDiscoveryVirtualInstance" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance azurerm_workloads_sap_discovery_virtual_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer"></a>

```typescript
import { workloadsSapDiscoveryVirtualInstance } from '@cdktf/provider-azurerm'

new workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance(scope: Construct, id: string, config: WorkloadsSapDiscoveryVirtualInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig">WorkloadsSapDiscoveryVirtualInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig">WorkloadsSapDiscoveryVirtualInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetManagedResourceGroupName">resetManagedResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetManagedStorageAccountName">resetManagedStorageAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putIdentity"></a>

```typescript
public putIdentity(value: WorkloadsSapDiscoveryVirtualInstanceIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: WorkloadsSapDiscoveryVirtualInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts">WorkloadsSapDiscoveryVirtualInstanceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetManagedResourceGroupName` <a name="resetManagedResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetManagedResourceGroupName"></a>

```typescript
public resetManagedResourceGroupName(): void
```

##### `resetManagedStorageAccountName` <a name="resetManagedStorageAccountName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetManagedStorageAccountName"></a>

```typescript
public resetManagedStorageAccountName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkloadsSapDiscoveryVirtualInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isConstruct"></a>

```typescript
import { workloadsSapDiscoveryVirtualInstance } from '@cdktf/provider-azurerm'

workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformElement"></a>

```typescript
import { workloadsSapDiscoveryVirtualInstance } from '@cdktf/provider-azurerm'

workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformResource"></a>

```typescript
import { workloadsSapDiscoveryVirtualInstance } from '@cdktf/provider-azurerm'

workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport"></a>

```typescript
import { workloadsSapDiscoveryVirtualInstance } from '@cdktf/provider-azurerm'

workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WorkloadsSapDiscoveryVirtualInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkloadsSapDiscoveryVirtualInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkloadsSapDiscoveryVirtualInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkloadsSapDiscoveryVirtualInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference">WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference">WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.centralServerVirtualMachineIdInput">centralServerVirtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedResourceGroupNameInput">managedResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedStorageAccountNameInput">managedStorageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.sapProductInput">sapProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts">WorkloadsSapDiscoveryVirtualInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.centralServerVirtualMachineId">centralServerVirtualMachineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedResourceGroupName">managedResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedStorageAccountName">managedStorageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.sapProduct">sapProduct</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.identity"></a>

```typescript
public readonly identity: WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference">WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.timeouts"></a>

```typescript
public readonly timeouts: WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference">WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference</a>

---

##### `centralServerVirtualMachineIdInput`<sup>Optional</sup> <a name="centralServerVirtualMachineIdInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.centralServerVirtualMachineIdInput"></a>

```typescript
public readonly centralServerVirtualMachineIdInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.identityInput"></a>

```typescript
public readonly identityInput: WorkloadsSapDiscoveryVirtualInstanceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `managedResourceGroupNameInput`<sup>Optional</sup> <a name="managedResourceGroupNameInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedResourceGroupNameInput"></a>

```typescript
public readonly managedResourceGroupNameInput: string;
```

- *Type:* string

---

##### `managedStorageAccountNameInput`<sup>Optional</sup> <a name="managedStorageAccountNameInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedStorageAccountNameInput"></a>

```typescript
public readonly managedStorageAccountNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `sapProductInput`<sup>Optional</sup> <a name="sapProductInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.sapProductInput"></a>

```typescript
public readonly sapProductInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | WorkloadsSapDiscoveryVirtualInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts">WorkloadsSapDiscoveryVirtualInstanceTimeouts</a>

---

##### `centralServerVirtualMachineId`<sup>Required</sup> <a name="centralServerVirtualMachineId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.centralServerVirtualMachineId"></a>

```typescript
public readonly centralServerVirtualMachineId: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `managedResourceGroupName`<sup>Required</sup> <a name="managedResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedResourceGroupName"></a>

```typescript
public readonly managedResourceGroupName: string;
```

- *Type:* string

---

##### `managedStorageAccountName`<sup>Required</sup> <a name="managedStorageAccountName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedStorageAccountName"></a>

```typescript
public readonly managedStorageAccountName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `sapProduct`<sup>Required</sup> <a name="sapProduct" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.sapProduct"></a>

```typescript
public readonly sapProduct: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkloadsSapDiscoveryVirtualInstanceConfig <a name="WorkloadsSapDiscoveryVirtualInstanceConfig" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.Initializer"></a>

```typescript
import { workloadsSapDiscoveryVirtualInstance } from '@cdktf/provider-azurerm'

const workloadsSapDiscoveryVirtualInstanceConfig: workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.centralServerVirtualMachineId">centralServerVirtualMachineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#central_server_virtual_machine_id WorkloadsSapDiscoveryVirtualInstance#central_server_virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.environment">environment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#environment WorkloadsSapDiscoveryVirtualInstance#environment}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#location WorkloadsSapDiscoveryVirtualInstance#location}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#name WorkloadsSapDiscoveryVirtualInstance#name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#resource_group_name WorkloadsSapDiscoveryVirtualInstance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.sapProduct">sapProduct</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#sap_product WorkloadsSapDiscoveryVirtualInstance#sap_product}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#id WorkloadsSapDiscoveryVirtualInstance#id}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.managedResourceGroupName">managedResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_resource_group_name WorkloadsSapDiscoveryVirtualInstance#managed_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.managedStorageAccountName">managedStorageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_storage_account_name WorkloadsSapDiscoveryVirtualInstance#managed_storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#tags WorkloadsSapDiscoveryVirtualInstance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts">WorkloadsSapDiscoveryVirtualInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `centralServerVirtualMachineId`<sup>Required</sup> <a name="centralServerVirtualMachineId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.centralServerVirtualMachineId"></a>

```typescript
public readonly centralServerVirtualMachineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#central_server_virtual_machine_id WorkloadsSapDiscoveryVirtualInstance#central_server_virtual_machine_id}.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#environment WorkloadsSapDiscoveryVirtualInstance#environment}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#location WorkloadsSapDiscoveryVirtualInstance#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#name WorkloadsSapDiscoveryVirtualInstance#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#resource_group_name WorkloadsSapDiscoveryVirtualInstance#resource_group_name}.

---

##### `sapProduct`<sup>Required</sup> <a name="sapProduct" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.sapProduct"></a>

```typescript
public readonly sapProduct: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#sap_product WorkloadsSapDiscoveryVirtualInstance#sap_product}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#id WorkloadsSapDiscoveryVirtualInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.identity"></a>

```typescript
public readonly identity: WorkloadsSapDiscoveryVirtualInstanceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#identity WorkloadsSapDiscoveryVirtualInstance#identity}

---

##### `managedResourceGroupName`<sup>Optional</sup> <a name="managedResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.managedResourceGroupName"></a>

```typescript
public readonly managedResourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_resource_group_name WorkloadsSapDiscoveryVirtualInstance#managed_resource_group_name}.

---

##### `managedStorageAccountName`<sup>Optional</sup> <a name="managedStorageAccountName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.managedStorageAccountName"></a>

```typescript
public readonly managedStorageAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_storage_account_name WorkloadsSapDiscoveryVirtualInstance#managed_storage_account_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#tags WorkloadsSapDiscoveryVirtualInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: WorkloadsSapDiscoveryVirtualInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts">WorkloadsSapDiscoveryVirtualInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#timeouts WorkloadsSapDiscoveryVirtualInstance#timeouts}

---

### WorkloadsSapDiscoveryVirtualInstanceIdentity <a name="WorkloadsSapDiscoveryVirtualInstanceIdentity" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity.Initializer"></a>

```typescript
import { workloadsSapDiscoveryVirtualInstance } from '@cdktf/provider-azurerm'

const workloadsSapDiscoveryVirtualInstanceIdentity: workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#identity_ids WorkloadsSapDiscoveryVirtualInstance#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#type WorkloadsSapDiscoveryVirtualInstance#type}. |

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#identity_ids WorkloadsSapDiscoveryVirtualInstance#identity_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#type WorkloadsSapDiscoveryVirtualInstance#type}.

---

### WorkloadsSapDiscoveryVirtualInstanceTimeouts <a name="WorkloadsSapDiscoveryVirtualInstanceTimeouts" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.Initializer"></a>

```typescript
import { workloadsSapDiscoveryVirtualInstance } from '@cdktf/provider-azurerm'

const workloadsSapDiscoveryVirtualInstanceTimeouts: workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#create WorkloadsSapDiscoveryVirtualInstance#create}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#delete WorkloadsSapDiscoveryVirtualInstance#delete}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#read WorkloadsSapDiscoveryVirtualInstance#read}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#update WorkloadsSapDiscoveryVirtualInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#create WorkloadsSapDiscoveryVirtualInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#delete WorkloadsSapDiscoveryVirtualInstance#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#read WorkloadsSapDiscoveryVirtualInstance#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/workloads_sap_discovery_virtual_instance#update WorkloadsSapDiscoveryVirtualInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference <a name="WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.Initializer"></a>

```typescript
import { workloadsSapDiscoveryVirtualInstance } from '@cdktf/provider-azurerm'

new workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkloadsSapDiscoveryVirtualInstanceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a>

---


### WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference <a name="WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { workloadsSapDiscoveryVirtualInstance } from '@cdktf/provider-azurerm'

new workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts">WorkloadsSapDiscoveryVirtualInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkloadsSapDiscoveryVirtualInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts">WorkloadsSapDiscoveryVirtualInstanceTimeouts</a>

---



