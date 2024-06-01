# `workloadsSapSingleNodeVirtualInstance` Submodule <a name="`workloadsSapSingleNodeVirtualInstance` Submodule" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkloadsSapSingleNodeVirtualInstance <a name="WorkloadsSapSingleNodeVirtualInstance" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance azurerm_workloads_sap_single_node_virtual_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

new workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance(scope: Construct, id: string, config: WorkloadsSapSingleNodeVirtualInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig">WorkloadsSapSingleNodeVirtualInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig">WorkloadsSapSingleNodeVirtualInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putSingleServerConfiguration">putSingleServerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetManagedResourceGroupName">resetManagedResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putIdentity"></a>

```typescript
public putIdentity(value: WorkloadsSapSingleNodeVirtualInstanceIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity">WorkloadsSapSingleNodeVirtualInstanceIdentity</a>

---

##### `putSingleServerConfiguration` <a name="putSingleServerConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putSingleServerConfiguration"></a>

```typescript
public putSingleServerConfiguration(value: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putSingleServerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: WorkloadsSapSingleNodeVirtualInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts">WorkloadsSapSingleNodeVirtualInstanceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetManagedResourceGroupName` <a name="resetManagedResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetManagedResourceGroupName"></a>

```typescript
public resetManagedResourceGroupName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkloadsSapSingleNodeVirtualInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isConstruct"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isTerraformElement"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isTerraformResource"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.generateConfigForImport"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WorkloadsSapSingleNodeVirtualInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkloadsSapSingleNodeVirtualInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkloadsSapSingleNodeVirtualInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkloadsSapSingleNodeVirtualInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference">WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.singleServerConfiguration">singleServerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference">WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.appLocationInput">appLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity">WorkloadsSapSingleNodeVirtualInstanceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.managedResourceGroupNameInput">managedResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapFqdnInput">sapFqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapProductInput">sapProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.singleServerConfigurationInput">singleServerConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts">WorkloadsSapSingleNodeVirtualInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.appLocation">appLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.managedResourceGroupName">managedResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapFqdn">sapFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapProduct">sapProduct</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.identity"></a>

```typescript
public readonly identity: WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference">WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference</a>

---

##### `singleServerConfiguration`<sup>Required</sup> <a name="singleServerConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.singleServerConfiguration"></a>

```typescript
public readonly singleServerConfiguration: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.timeouts"></a>

```typescript
public readonly timeouts: WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference">WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference</a>

---

##### `appLocationInput`<sup>Optional</sup> <a name="appLocationInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.appLocationInput"></a>

```typescript
public readonly appLocationInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.identityInput"></a>

```typescript
public readonly identityInput: WorkloadsSapSingleNodeVirtualInstanceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity">WorkloadsSapSingleNodeVirtualInstanceIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `managedResourceGroupNameInput`<sup>Optional</sup> <a name="managedResourceGroupNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.managedResourceGroupNameInput"></a>

```typescript
public readonly managedResourceGroupNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `sapFqdnInput`<sup>Optional</sup> <a name="sapFqdnInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapFqdnInput"></a>

```typescript
public readonly sapFqdnInput: string;
```

- *Type:* string

---

##### `sapProductInput`<sup>Optional</sup> <a name="sapProductInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapProductInput"></a>

```typescript
public readonly sapProductInput: string;
```

- *Type:* string

---

##### `singleServerConfigurationInput`<sup>Optional</sup> <a name="singleServerConfigurationInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.singleServerConfigurationInput"></a>

```typescript
public readonly singleServerConfigurationInput: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | WorkloadsSapSingleNodeVirtualInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts">WorkloadsSapSingleNodeVirtualInstanceTimeouts</a>

---

##### `appLocation`<sup>Required</sup> <a name="appLocation" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.appLocation"></a>

```typescript
public readonly appLocation: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `managedResourceGroupName`<sup>Required</sup> <a name="managedResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.managedResourceGroupName"></a>

```typescript
public readonly managedResourceGroupName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `sapFqdn`<sup>Required</sup> <a name="sapFqdn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapFqdn"></a>

```typescript
public readonly sapFqdn: string;
```

- *Type:* string

---

##### `sapProduct`<sup>Required</sup> <a name="sapProduct" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapProduct"></a>

```typescript
public readonly sapProduct: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkloadsSapSingleNodeVirtualInstanceConfig <a name="WorkloadsSapSingleNodeVirtualInstanceConfig" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.Initializer"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

const workloadsSapSingleNodeVirtualInstanceConfig: workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.appLocation">appLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#app_location WorkloadsSapSingleNodeVirtualInstance#app_location}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.environment">environment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#environment WorkloadsSapSingleNodeVirtualInstance#environment}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#location WorkloadsSapSingleNodeVirtualInstance#location}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#name WorkloadsSapSingleNodeVirtualInstance#name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#resource_group_name WorkloadsSapSingleNodeVirtualInstance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.sapFqdn">sapFqdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#sap_fqdn WorkloadsSapSingleNodeVirtualInstance#sap_fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.sapProduct">sapProduct</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#sap_product WorkloadsSapSingleNodeVirtualInstance#sap_product}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.singleServerConfiguration">singleServerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration</a></code> | single_server_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#id WorkloadsSapSingleNodeVirtualInstance#id}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity">WorkloadsSapSingleNodeVirtualInstanceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.managedResourceGroupName">managedResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#managed_resource_group_name WorkloadsSapSingleNodeVirtualInstance#managed_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#tags WorkloadsSapSingleNodeVirtualInstance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts">WorkloadsSapSingleNodeVirtualInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appLocation`<sup>Required</sup> <a name="appLocation" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.appLocation"></a>

```typescript
public readonly appLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#app_location WorkloadsSapSingleNodeVirtualInstance#app_location}.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#environment WorkloadsSapSingleNodeVirtualInstance#environment}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#location WorkloadsSapSingleNodeVirtualInstance#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#name WorkloadsSapSingleNodeVirtualInstance#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#resource_group_name WorkloadsSapSingleNodeVirtualInstance#resource_group_name}.

---

##### `sapFqdn`<sup>Required</sup> <a name="sapFqdn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.sapFqdn"></a>

```typescript
public readonly sapFqdn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#sap_fqdn WorkloadsSapSingleNodeVirtualInstance#sap_fqdn}.

---

##### `sapProduct`<sup>Required</sup> <a name="sapProduct" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.sapProduct"></a>

```typescript
public readonly sapProduct: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#sap_product WorkloadsSapSingleNodeVirtualInstance#sap_product}.

---

##### `singleServerConfiguration`<sup>Required</sup> <a name="singleServerConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.singleServerConfiguration"></a>

```typescript
public readonly singleServerConfiguration: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration</a>

single_server_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#single_server_configuration WorkloadsSapSingleNodeVirtualInstance#single_server_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#id WorkloadsSapSingleNodeVirtualInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.identity"></a>

```typescript
public readonly identity: WorkloadsSapSingleNodeVirtualInstanceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity">WorkloadsSapSingleNodeVirtualInstanceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#identity WorkloadsSapSingleNodeVirtualInstance#identity}

---

##### `managedResourceGroupName`<sup>Optional</sup> <a name="managedResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.managedResourceGroupName"></a>

```typescript
public readonly managedResourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#managed_resource_group_name WorkloadsSapSingleNodeVirtualInstance#managed_resource_group_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#tags WorkloadsSapSingleNodeVirtualInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: WorkloadsSapSingleNodeVirtualInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts">WorkloadsSapSingleNodeVirtualInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#timeouts WorkloadsSapSingleNodeVirtualInstance#timeouts}

---

### WorkloadsSapSingleNodeVirtualInstanceIdentity <a name="WorkloadsSapSingleNodeVirtualInstanceIdentity" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity.Initializer"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

const workloadsSapSingleNodeVirtualInstanceIdentity: workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#identity_ids WorkloadsSapSingleNodeVirtualInstance#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#type WorkloadsSapSingleNodeVirtualInstance#type}. |

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#identity_ids WorkloadsSapSingleNodeVirtualInstance#identity_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#type WorkloadsSapSingleNodeVirtualInstance#type}.

---

### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.Initializer"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

const workloadsSapSingleNodeVirtualInstanceSingleServerConfiguration: workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.appResourceGroupName">appResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#app_resource_group_name WorkloadsSapSingleNodeVirtualInstance#app_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#subnet_id WorkloadsSapSingleNodeVirtualInstance#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.virtualMachineConfiguration">virtualMachineConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration</a></code> | virtual_machine_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.databaseType">databaseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#database_type WorkloadsSapSingleNodeVirtualInstance#database_type}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.diskVolumeConfiguration">diskVolumeConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration</a>[]</code> | disk_volume_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.secondaryIpEnabled">secondaryIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#secondary_ip_enabled WorkloadsSapSingleNodeVirtualInstance#secondary_ip_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.virtualMachineResourceNames">virtualMachineResourceNames</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames</a></code> | virtual_machine_resource_names block. |

---

##### `appResourceGroupName`<sup>Required</sup> <a name="appResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.appResourceGroupName"></a>

```typescript
public readonly appResourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#app_resource_group_name WorkloadsSapSingleNodeVirtualInstance#app_resource_group_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#subnet_id WorkloadsSapSingleNodeVirtualInstance#subnet_id}.

---

##### `virtualMachineConfiguration`<sup>Required</sup> <a name="virtualMachineConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.virtualMachineConfiguration"></a>

```typescript
public readonly virtualMachineConfiguration: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration</a>

virtual_machine_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#virtual_machine_configuration WorkloadsSapSingleNodeVirtualInstance#virtual_machine_configuration}

---

##### `databaseType`<sup>Optional</sup> <a name="databaseType" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.databaseType"></a>

```typescript
public readonly databaseType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#database_type WorkloadsSapSingleNodeVirtualInstance#database_type}.

---

##### `diskVolumeConfiguration`<sup>Optional</sup> <a name="diskVolumeConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.diskVolumeConfiguration"></a>

```typescript
public readonly diskVolumeConfiguration: IResolvable | WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration</a>[]

disk_volume_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#disk_volume_configuration WorkloadsSapSingleNodeVirtualInstance#disk_volume_configuration}

---

##### `secondaryIpEnabled`<sup>Optional</sup> <a name="secondaryIpEnabled" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.secondaryIpEnabled"></a>

```typescript
public readonly secondaryIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#secondary_ip_enabled WorkloadsSapSingleNodeVirtualInstance#secondary_ip_enabled}.

---

##### `virtualMachineResourceNames`<sup>Optional</sup> <a name="virtualMachineResourceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.virtualMachineResourceNames"></a>

```typescript
public readonly virtualMachineResourceNames: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames</a>

virtual_machine_resource_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#virtual_machine_resource_names WorkloadsSapSingleNodeVirtualInstance#virtual_machine_resource_names}

---

### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.Initializer"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

const workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration: workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.numberOfDisks">numberOfDisks</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#number_of_disks WorkloadsSapSingleNodeVirtualInstance#number_of_disks}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.sizeInGb">sizeInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#size_in_gb WorkloadsSapSingleNodeVirtualInstance#size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#sku_name WorkloadsSapSingleNodeVirtualInstance#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.volumeName">volumeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#volume_name WorkloadsSapSingleNodeVirtualInstance#volume_name}. |

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.numberOfDisks"></a>

```typescript
public readonly numberOfDisks: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#number_of_disks WorkloadsSapSingleNodeVirtualInstance#number_of_disks}.

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.sizeInGb"></a>

```typescript
public readonly sizeInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#size_in_gb WorkloadsSapSingleNodeVirtualInstance#size_in_gb}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#sku_name WorkloadsSapSingleNodeVirtualInstance#sku_name}.

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#volume_name WorkloadsSapSingleNodeVirtualInstance#volume_name}.

---

### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration.Initializer"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

const workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration: workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration.property.image">image</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage</a></code> | image block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration.property.osProfile">osProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile</a></code> | os_profile block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration.property.virtualMachineSize">virtualMachineSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#virtual_machine_size WorkloadsSapSingleNodeVirtualInstance#virtual_machine_size}. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration.property.image"></a>

```typescript
public readonly image: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#image WorkloadsSapSingleNodeVirtualInstance#image}

---

##### `osProfile`<sup>Required</sup> <a name="osProfile" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration.property.osProfile"></a>

```typescript
public readonly osProfile: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile</a>

os_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#os_profile WorkloadsSapSingleNodeVirtualInstance#os_profile}

---

##### `virtualMachineSize`<sup>Required</sup> <a name="virtualMachineSize" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration.property.virtualMachineSize"></a>

```typescript
public readonly virtualMachineSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#virtual_machine_size WorkloadsSapSingleNodeVirtualInstance#virtual_machine_size}.

---

### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.Initializer"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

const workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage: workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.offer">offer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#offer WorkloadsSapSingleNodeVirtualInstance#offer}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.publisher">publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#publisher WorkloadsSapSingleNodeVirtualInstance#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.sku">sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#sku WorkloadsSapSingleNodeVirtualInstance#sku}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#version WorkloadsSapSingleNodeVirtualInstance#version}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.offer"></a>

```typescript
public readonly offer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#offer WorkloadsSapSingleNodeVirtualInstance#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#publisher WorkloadsSapSingleNodeVirtualInstance#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#sku WorkloadsSapSingleNodeVirtualInstance#sku}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#version WorkloadsSapSingleNodeVirtualInstance#version}.

---

### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile.Initializer"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

const workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile: workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile.property.adminUsername">adminUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#admin_username WorkloadsSapSingleNodeVirtualInstance#admin_username}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile.property.sshPrivateKey">sshPrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#ssh_private_key WorkloadsSapSingleNodeVirtualInstance#ssh_private_key}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile.property.sshPublicKey">sshPublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#ssh_public_key WorkloadsSapSingleNodeVirtualInstance#ssh_public_key}. |

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#admin_username WorkloadsSapSingleNodeVirtualInstance#admin_username}.

---

##### `sshPrivateKey`<sup>Required</sup> <a name="sshPrivateKey" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile.property.sshPrivateKey"></a>

```typescript
public readonly sshPrivateKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#ssh_private_key WorkloadsSapSingleNodeVirtualInstance#ssh_private_key}.

---

##### `sshPublicKey`<sup>Required</sup> <a name="sshPublicKey" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile.property.sshPublicKey"></a>

```typescript
public readonly sshPublicKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#ssh_public_key WorkloadsSapSingleNodeVirtualInstance#ssh_public_key}.

---

### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.Initializer"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

const workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames: workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.dataDisk">dataDisk</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk</a>[]</code> | data_disk block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#host_name WorkloadsSapSingleNodeVirtualInstance#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.networkInterfaceNames">networkInterfaceNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#network_interface_names WorkloadsSapSingleNodeVirtualInstance#network_interface_names}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.osDiskName">osDiskName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#os_disk_name WorkloadsSapSingleNodeVirtualInstance#os_disk_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.virtualMachineName">virtualMachineName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#virtual_machine_name WorkloadsSapSingleNodeVirtualInstance#virtual_machine_name}. |

---

##### `dataDisk`<sup>Optional</sup> <a name="dataDisk" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.dataDisk"></a>

```typescript
public readonly dataDisk: IResolvable | WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk</a>[]

data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#data_disk WorkloadsSapSingleNodeVirtualInstance#data_disk}

---

##### `hostName`<sup>Optional</sup> <a name="hostName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#host_name WorkloadsSapSingleNodeVirtualInstance#host_name}.

---

##### `networkInterfaceNames`<sup>Optional</sup> <a name="networkInterfaceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.networkInterfaceNames"></a>

```typescript
public readonly networkInterfaceNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#network_interface_names WorkloadsSapSingleNodeVirtualInstance#network_interface_names}.

---

##### `osDiskName`<sup>Optional</sup> <a name="osDiskName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.osDiskName"></a>

```typescript
public readonly osDiskName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#os_disk_name WorkloadsSapSingleNodeVirtualInstance#os_disk_name}.

---

##### `virtualMachineName`<sup>Optional</sup> <a name="virtualMachineName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.virtualMachineName"></a>

```typescript
public readonly virtualMachineName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#virtual_machine_name WorkloadsSapSingleNodeVirtualInstance#virtual_machine_name}.

---

### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk.Initializer"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

const workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk: workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk.property.names">names</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#names WorkloadsSapSingleNodeVirtualInstance#names}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk.property.volumeName">volumeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#volume_name WorkloadsSapSingleNodeVirtualInstance#volume_name}. |

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk.property.names"></a>

```typescript
public readonly names: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#names WorkloadsSapSingleNodeVirtualInstance#names}.

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#volume_name WorkloadsSapSingleNodeVirtualInstance#volume_name}.

---

### WorkloadsSapSingleNodeVirtualInstanceTimeouts <a name="WorkloadsSapSingleNodeVirtualInstanceTimeouts" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.Initializer"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

const workloadsSapSingleNodeVirtualInstanceTimeouts: workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#create WorkloadsSapSingleNodeVirtualInstance#create}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#delete WorkloadsSapSingleNodeVirtualInstance#delete}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#read WorkloadsSapSingleNodeVirtualInstance#read}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#update WorkloadsSapSingleNodeVirtualInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#create WorkloadsSapSingleNodeVirtualInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#delete WorkloadsSapSingleNodeVirtualInstance#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#read WorkloadsSapSingleNodeVirtualInstance#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/workloads_sap_single_node_virtual_instance#update WorkloadsSapSingleNodeVirtualInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.Initializer"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

new workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity">WorkloadsSapSingleNodeVirtualInstanceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkloadsSapSingleNodeVirtualInstanceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity">WorkloadsSapSingleNodeVirtualInstanceIdentity</a>

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.Initializer"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

new workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.get"></a>

```typescript
public get(index: number): WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration</a>[]

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

new workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.numberOfDisksInput">numberOfDisksInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.sizeInGbInput">sizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.volumeNameInput">volumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.numberOfDisks">numberOfDisks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.sizeInGb">sizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.volumeName">volumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numberOfDisksInput`<sup>Optional</sup> <a name="numberOfDisksInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.numberOfDisksInput"></a>

```typescript
public readonly numberOfDisksInput: number;
```

- *Type:* number

---

##### `sizeInGbInput`<sup>Optional</sup> <a name="sizeInGbInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.sizeInGbInput"></a>

```typescript
public readonly sizeInGbInput: number;
```

- *Type:* number

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.volumeNameInput"></a>

```typescript
public readonly volumeNameInput: string;
```

- *Type:* string

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.numberOfDisks"></a>

```typescript
public readonly numberOfDisks: number;
```

- *Type:* number

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.sizeInGb"></a>

```typescript
public readonly sizeInGb: number;
```

- *Type:* number

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration</a>

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.Initializer"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

new workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putDiskVolumeConfiguration">putDiskVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putVirtualMachineConfiguration">putVirtualMachineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putVirtualMachineResourceNames">putVirtualMachineResourceNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetDatabaseType">resetDatabaseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetDiskVolumeConfiguration">resetDiskVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetSecondaryIpEnabled">resetSecondaryIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetVirtualMachineResourceNames">resetVirtualMachineResourceNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDiskVolumeConfiguration` <a name="putDiskVolumeConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putDiskVolumeConfiguration"></a>

```typescript
public putDiskVolumeConfiguration(value: IResolvable | WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putDiskVolumeConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration</a>[]

---

##### `putVirtualMachineConfiguration` <a name="putVirtualMachineConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putVirtualMachineConfiguration"></a>

```typescript
public putVirtualMachineConfiguration(value: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putVirtualMachineConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration</a>

---

##### `putVirtualMachineResourceNames` <a name="putVirtualMachineResourceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putVirtualMachineResourceNames"></a>

```typescript
public putVirtualMachineResourceNames(value: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putVirtualMachineResourceNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames</a>

---

##### `resetDatabaseType` <a name="resetDatabaseType" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetDatabaseType"></a>

```typescript
public resetDatabaseType(): void
```

##### `resetDiskVolumeConfiguration` <a name="resetDiskVolumeConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetDiskVolumeConfiguration"></a>

```typescript
public resetDiskVolumeConfiguration(): void
```

##### `resetSecondaryIpEnabled` <a name="resetSecondaryIpEnabled" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetSecondaryIpEnabled"></a>

```typescript
public resetSecondaryIpEnabled(): void
```

##### `resetVirtualMachineResourceNames` <a name="resetVirtualMachineResourceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetVirtualMachineResourceNames"></a>

```typescript
public resetVirtualMachineResourceNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.diskVolumeConfiguration">diskVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineConfiguration">virtualMachineConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineResourceNames">virtualMachineResourceNames</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.appResourceGroupNameInput">appResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.databaseTypeInput">databaseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.diskVolumeConfigurationInput">diskVolumeConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.secondaryIpEnabledInput">secondaryIpEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineConfigurationInput">virtualMachineConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineResourceNamesInput">virtualMachineResourceNamesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.appResourceGroupName">appResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.databaseType">databaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.secondaryIpEnabled">secondaryIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskVolumeConfiguration`<sup>Required</sup> <a name="diskVolumeConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.diskVolumeConfiguration"></a>

```typescript
public readonly diskVolumeConfiguration: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList</a>

---

##### `virtualMachineConfiguration`<sup>Required</sup> <a name="virtualMachineConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineConfiguration"></a>

```typescript
public readonly virtualMachineConfiguration: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference</a>

---

##### `virtualMachineResourceNames`<sup>Required</sup> <a name="virtualMachineResourceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineResourceNames"></a>

```typescript
public readonly virtualMachineResourceNames: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference</a>

---

##### `appResourceGroupNameInput`<sup>Optional</sup> <a name="appResourceGroupNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.appResourceGroupNameInput"></a>

```typescript
public readonly appResourceGroupNameInput: string;
```

- *Type:* string

---

##### `databaseTypeInput`<sup>Optional</sup> <a name="databaseTypeInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.databaseTypeInput"></a>

```typescript
public readonly databaseTypeInput: string;
```

- *Type:* string

---

##### `diskVolumeConfigurationInput`<sup>Optional</sup> <a name="diskVolumeConfigurationInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.diskVolumeConfigurationInput"></a>

```typescript
public readonly diskVolumeConfigurationInput: IResolvable | WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration</a>[]

---

##### `secondaryIpEnabledInput`<sup>Optional</sup> <a name="secondaryIpEnabledInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.secondaryIpEnabledInput"></a>

```typescript
public readonly secondaryIpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `virtualMachineConfigurationInput`<sup>Optional</sup> <a name="virtualMachineConfigurationInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineConfigurationInput"></a>

```typescript
public readonly virtualMachineConfigurationInput: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration</a>

---

##### `virtualMachineResourceNamesInput`<sup>Optional</sup> <a name="virtualMachineResourceNamesInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineResourceNamesInput"></a>

```typescript
public readonly virtualMachineResourceNamesInput: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames</a>

---

##### `appResourceGroupName`<sup>Required</sup> <a name="appResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.appResourceGroupName"></a>

```typescript
public readonly appResourceGroupName: string;
```

- *Type:* string

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.databaseType"></a>

```typescript
public readonly databaseType: string;
```

- *Type:* string

---

##### `secondaryIpEnabled`<sup>Required</sup> <a name="secondaryIpEnabled" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.secondaryIpEnabled"></a>

```typescript
public readonly secondaryIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration</a>

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.Initializer"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

new workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.offerInput">offerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.publisherInput">publisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.skuInput">skuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.offer">offer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.publisher">publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `offerInput`<sup>Optional</sup> <a name="offerInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.offerInput"></a>

```typescript
public readonly offerInput: string;
```

- *Type:* string

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.publisherInput"></a>

```typescript
public readonly publisherInput: string;
```

- *Type:* string

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.skuInput"></a>

```typescript
public readonly skuInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.offer"></a>

```typescript
public readonly offer: string;
```

- *Type:* string

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage</a>

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.Initializer"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

new workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.adminUsernameInput">adminUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPrivateKeyInput">sshPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPublicKeyInput">sshPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.adminUsername">adminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPrivateKey">sshPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPublicKey">sshPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminUsernameInput`<sup>Optional</sup> <a name="adminUsernameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.adminUsernameInput"></a>

```typescript
public readonly adminUsernameInput: string;
```

- *Type:* string

---

##### `sshPrivateKeyInput`<sup>Optional</sup> <a name="sshPrivateKeyInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPrivateKeyInput"></a>

```typescript
public readonly sshPrivateKeyInput: string;
```

- *Type:* string

---

##### `sshPublicKeyInput`<sup>Optional</sup> <a name="sshPublicKeyInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPublicKeyInput"></a>

```typescript
public readonly sshPublicKeyInput: string;
```

- *Type:* string

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

---

##### `sshPrivateKey`<sup>Required</sup> <a name="sshPrivateKey" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPrivateKey"></a>

```typescript
public readonly sshPrivateKey: string;
```

- *Type:* string

---

##### `sshPublicKey`<sup>Required</sup> <a name="sshPublicKey" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPublicKey"></a>

```typescript
public readonly sshPublicKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile</a>

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.Initializer"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

new workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.putImage">putImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.putOsProfile">putOsProfile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putImage` <a name="putImage" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.putImage"></a>

```typescript
public putImage(value: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage</a>

---

##### `putOsProfile` <a name="putOsProfile" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.putOsProfile"></a>

```typescript
public putOsProfile(value: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.putOsProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.image">image</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.osProfile">osProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.imageInput">imageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.osProfileInput">osProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.virtualMachineSizeInput">virtualMachineSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.virtualMachineSize">virtualMachineSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.image"></a>

```typescript
public readonly image: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference</a>

---

##### `osProfile`<sup>Required</sup> <a name="osProfile" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.osProfile"></a>

```typescript
public readonly osProfile: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference</a>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage</a>

---

##### `osProfileInput`<sup>Optional</sup> <a name="osProfileInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.osProfileInput"></a>

```typescript
public readonly osProfileInput: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile</a>

---

##### `virtualMachineSizeInput`<sup>Optional</sup> <a name="virtualMachineSizeInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.virtualMachineSizeInput"></a>

```typescript
public readonly virtualMachineSizeInput: string;
```

- *Type:* string

---

##### `virtualMachineSize`<sup>Required</sup> <a name="virtualMachineSize" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.virtualMachineSize"></a>

```typescript
public readonly virtualMachineSize: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration</a>

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.Initializer"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

new workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.get"></a>

```typescript
public get(index: number): WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk</a>[]

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

new workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.namesInput">namesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.volumeNameInput">volumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.names">names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.volumeName">volumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namesInput`<sup>Optional</sup> <a name="namesInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.namesInput"></a>

```typescript
public readonly namesInput: string[];
```

- *Type:* string[]

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.volumeNameInput"></a>

```typescript
public readonly volumeNameInput: string;
```

- *Type:* string

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.names"></a>

```typescript
public readonly names: string[];
```

- *Type:* string[]

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk</a>

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.Initializer"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

new workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.putDataDisk">putDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetDataDisk">resetDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetHostName">resetHostName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetNetworkInterfaceNames">resetNetworkInterfaceNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetOsDiskName">resetOsDiskName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetVirtualMachineName">resetVirtualMachineName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataDisk` <a name="putDataDisk" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.putDataDisk"></a>

```typescript
public putDataDisk(value: IResolvable | WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.putDataDisk.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk</a>[]

---

##### `resetDataDisk` <a name="resetDataDisk" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetDataDisk"></a>

```typescript
public resetDataDisk(): void
```

##### `resetHostName` <a name="resetHostName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetHostName"></a>

```typescript
public resetHostName(): void
```

##### `resetNetworkInterfaceNames` <a name="resetNetworkInterfaceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetNetworkInterfaceNames"></a>

```typescript
public resetNetworkInterfaceNames(): void
```

##### `resetOsDiskName` <a name="resetOsDiskName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetOsDiskName"></a>

```typescript
public resetOsDiskName(): void
```

##### `resetVirtualMachineName` <a name="resetVirtualMachineName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetVirtualMachineName"></a>

```typescript
public resetVirtualMachineName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.dataDisk">dataDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.dataDiskInput">dataDiskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.networkInterfaceNamesInput">networkInterfaceNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.osDiskNameInput">osDiskNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.virtualMachineNameInput">virtualMachineNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.networkInterfaceNames">networkInterfaceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.osDiskName">osDiskName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.virtualMachineName">virtualMachineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataDisk`<sup>Required</sup> <a name="dataDisk" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.dataDisk"></a>

```typescript
public readonly dataDisk: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList</a>

---

##### `dataDiskInput`<sup>Optional</sup> <a name="dataDiskInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.dataDiskInput"></a>

```typescript
public readonly dataDiskInput: IResolvable | WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk</a>[]

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `networkInterfaceNamesInput`<sup>Optional</sup> <a name="networkInterfaceNamesInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.networkInterfaceNamesInput"></a>

```typescript
public readonly networkInterfaceNamesInput: string[];
```

- *Type:* string[]

---

##### `osDiskNameInput`<sup>Optional</sup> <a name="osDiskNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.osDiskNameInput"></a>

```typescript
public readonly osDiskNameInput: string;
```

- *Type:* string

---

##### `virtualMachineNameInput`<sup>Optional</sup> <a name="virtualMachineNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.virtualMachineNameInput"></a>

```typescript
public readonly virtualMachineNameInput: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `networkInterfaceNames`<sup>Required</sup> <a name="networkInterfaceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.networkInterfaceNames"></a>

```typescript
public readonly networkInterfaceNames: string[];
```

- *Type:* string[]

---

##### `osDiskName`<sup>Required</sup> <a name="osDiskName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.osDiskName"></a>

```typescript
public readonly osDiskName: string;
```

- *Type:* string

---

##### `virtualMachineName`<sup>Required</sup> <a name="virtualMachineName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.virtualMachineName"></a>

```typescript
public readonly virtualMachineName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames;
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames</a>

---


### WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { workloadsSapSingleNodeVirtualInstance } from '@cdktf/provider-azurerm'

new workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts">WorkloadsSapSingleNodeVirtualInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkloadsSapSingleNodeVirtualInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts">WorkloadsSapSingleNodeVirtualInstanceTimeouts</a>

---



