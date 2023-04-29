# `azurerm_virtual_hub_route_table`

Refer to the Terraform Registory for docs: [`azurerm_virtual_hub_route_table`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table).

# `virtualHubRouteTable` Submodule <a name="`virtualHubRouteTable` Submodule" id="@cdktf/provider-azurerm.virtualHubRouteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualHubRouteTable <a name="VirtualHubRouteTable" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table azurerm_virtual_hub_route_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.Initializer"></a>

```typescript
import { virtualHubRouteTable } from '@cdktf/provider-azurerm'

new virtualHubRouteTable.VirtualHubRouteTable(scope: Construct, id: string, config: VirtualHubRouteTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig">VirtualHubRouteTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig">VirtualHubRouteTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.putRoute">putRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.resetRoute">resetRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRoute` <a name="putRoute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.putRoute"></a>

```typescript
public putRoute(value: IResolvable | VirtualHubRouteTableRoute[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.putRoute.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRoute">VirtualHubRouteTableRoute</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.putTimeouts"></a>

```typescript
public putTimeouts(value: VirtualHubRouteTableTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeouts">VirtualHubRouteTableTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetRoute` <a name="resetRoute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.resetRoute"></a>

```typescript
public resetRoute(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.isConstruct"></a>

```typescript
import { virtualHubRouteTable } from '@cdktf/provider-azurerm'

virtualHubRouteTable.VirtualHubRouteTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.isTerraformElement"></a>

```typescript
import { virtualHubRouteTable } from '@cdktf/provider-azurerm'

virtualHubRouteTable.VirtualHubRouteTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.isTerraformResource"></a>

```typescript
import { virtualHubRouteTable } from '@cdktf/provider-azurerm'

virtualHubRouteTable.VirtualHubRouteTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.route">route</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList">VirtualHubRouteTableRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference">VirtualHubRouteTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.labelsInput">labelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.routeInput">routeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRoute">VirtualHubRouteTableRoute</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeouts">VirtualHubRouteTableTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.virtualHubIdInput">virtualHubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.virtualHubId">virtualHubId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.route"></a>

```typescript
public readonly route: VirtualHubRouteTableRouteList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList">VirtualHubRouteTableRouteList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualHubRouteTableTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference">VirtualHubRouteTableTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.labelsInput"></a>

```typescript
public readonly labelsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `routeInput`<sup>Optional</sup> <a name="routeInput" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.routeInput"></a>

```typescript
public readonly routeInput: IResolvable | VirtualHubRouteTableRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRoute">VirtualHubRouteTableRoute</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: VirtualHubRouteTableTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeouts">VirtualHubRouteTableTimeouts</a> | cdktf.IResolvable

---

##### `virtualHubIdInput`<sup>Optional</sup> <a name="virtualHubIdInput" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.virtualHubIdInput"></a>

```typescript
public readonly virtualHubIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `virtualHubId`<sup>Required</sup> <a name="virtualHubId" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.virtualHubId"></a>

```typescript
public readonly virtualHubId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualHubRouteTableConfig <a name="VirtualHubRouteTableConfig" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.Initializer"></a>

```typescript
import { virtualHubRouteTable } from '@cdktf/provider-azurerm'

const virtualHubRouteTableConfig: virtualHubRouteTable.VirtualHubRouteTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#name VirtualHubRouteTable#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.virtualHubId">virtualHubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#virtual_hub_id VirtualHubRouteTable#virtual_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#id VirtualHubRouteTable#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.labels">labels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#labels VirtualHubRouteTable#labels}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.route">route</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRoute">VirtualHubRouteTableRoute</a>[]</code> | route block. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeouts">VirtualHubRouteTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#name VirtualHubRouteTable#name}.

---

##### `virtualHubId`<sup>Required</sup> <a name="virtualHubId" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.virtualHubId"></a>

```typescript
public readonly virtualHubId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#virtual_hub_id VirtualHubRouteTable#virtual_hub_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#id VirtualHubRouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#labels VirtualHubRouteTable#labels}.

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.route"></a>

```typescript
public readonly route: IResolvable | VirtualHubRouteTableRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRoute">VirtualHubRouteTableRoute</a>[]

route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#route VirtualHubRouteTable#route}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualHubRouteTableTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeouts">VirtualHubRouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#timeouts VirtualHubRouteTable#timeouts}

---

### VirtualHubRouteTableRoute <a name="VirtualHubRouteTableRoute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRoute.Initializer"></a>

```typescript
import { virtualHubRouteTable } from '@cdktf/provider-azurerm'

const virtualHubRouteTableRoute: virtualHubRouteTable.VirtualHubRouteTableRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRoute.property.destinations">destinations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#destinations VirtualHubRouteTable#destinations}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRoute.property.destinationsType">destinationsType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#destinations_type VirtualHubRouteTable#destinations_type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRoute.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#name VirtualHubRouteTable#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRoute.property.nextHop">nextHop</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#next_hop VirtualHubRouteTable#next_hop}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRoute.property.nextHopType">nextHopType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#next_hop_type VirtualHubRouteTable#next_hop_type}. |

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRoute.property.destinations"></a>

```typescript
public readonly destinations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#destinations VirtualHubRouteTable#destinations}.

---

##### `destinationsType`<sup>Required</sup> <a name="destinationsType" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRoute.property.destinationsType"></a>

```typescript
public readonly destinationsType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#destinations_type VirtualHubRouteTable#destinations_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRoute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#name VirtualHubRouteTable#name}.

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRoute.property.nextHop"></a>

```typescript
public readonly nextHop: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#next_hop VirtualHubRouteTable#next_hop}.

---

##### `nextHopType`<sup>Optional</sup> <a name="nextHopType" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRoute.property.nextHopType"></a>

```typescript
public readonly nextHopType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#next_hop_type VirtualHubRouteTable#next_hop_type}.

---

### VirtualHubRouteTableTimeouts <a name="VirtualHubRouteTableTimeouts" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeouts.Initializer"></a>

```typescript
import { virtualHubRouteTable } from '@cdktf/provider-azurerm'

const virtualHubRouteTableTimeouts: virtualHubRouteTable.VirtualHubRouteTableTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#create VirtualHubRouteTable#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#delete VirtualHubRouteTable#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#read VirtualHubRouteTable#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#update VirtualHubRouteTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#create VirtualHubRouteTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#delete VirtualHubRouteTable#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#read VirtualHubRouteTable#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/virtual_hub_route_table#update VirtualHubRouteTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualHubRouteTableRouteList <a name="VirtualHubRouteTableRouteList" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList.Initializer"></a>

```typescript
import { virtualHubRouteTable } from '@cdktf/provider-azurerm'

new virtualHubRouteTable.VirtualHubRouteTableRouteList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList.get"></a>

```typescript
public get(index: number): VirtualHubRouteTableRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRoute">VirtualHubRouteTableRoute</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualHubRouteTableRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRoute">VirtualHubRouteTableRoute</a>[]

---


### VirtualHubRouteTableRouteOutputReference <a name="VirtualHubRouteTableRouteOutputReference" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.Initializer"></a>

```typescript
import { virtualHubRouteTable } from '@cdktf/provider-azurerm'

new virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.resetNextHopType">resetNextHopType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNextHopType` <a name="resetNextHopType" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.resetNextHopType"></a>

```typescript
public resetNextHopType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.destinationsTypeInput">destinationsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.nextHopInput">nextHopInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.nextHopTypeInput">nextHopTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.destinations">destinations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.destinationsType">destinationsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.nextHop">nextHop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.nextHopType">nextHopType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRoute">VirtualHubRouteTableRoute</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: string[];
```

- *Type:* string[]

---

##### `destinationsTypeInput`<sup>Optional</sup> <a name="destinationsTypeInput" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.destinationsTypeInput"></a>

```typescript
public readonly destinationsTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nextHopInput`<sup>Optional</sup> <a name="nextHopInput" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.nextHopInput"></a>

```typescript
public readonly nextHopInput: string;
```

- *Type:* string

---

##### `nextHopTypeInput`<sup>Optional</sup> <a name="nextHopTypeInput" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.nextHopTypeInput"></a>

```typescript
public readonly nextHopTypeInput: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.destinations"></a>

```typescript
public readonly destinations: string[];
```

- *Type:* string[]

---

##### `destinationsType`<sup>Required</sup> <a name="destinationsType" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.destinationsType"></a>

```typescript
public readonly destinationsType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.nextHop"></a>

```typescript
public readonly nextHop: string;
```

- *Type:* string

---

##### `nextHopType`<sup>Required</sup> <a name="nextHopType" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.nextHopType"></a>

```typescript
public readonly nextHopType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VirtualHubRouteTableRoute | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableRoute">VirtualHubRouteTableRoute</a> | cdktf.IResolvable

---


### VirtualHubRouteTableTimeoutsOutputReference <a name="VirtualHubRouteTableTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.Initializer"></a>

```typescript
import { virtualHubRouteTable } from '@cdktf/provider-azurerm'

new virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeouts">VirtualHubRouteTableTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VirtualHubRouteTableTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRouteTable.VirtualHubRouteTableTimeouts">VirtualHubRouteTableTimeouts</a> | cdktf.IResolvable

---



