# `azurerm_vmware_express_route_authorization`

Refer to the Terraform Registory for docs: [`azurerm_vmware_express_route_authorization`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vmware_express_route_authorization).

# `vmwareExpressRouteAuthorization` Submodule <a name="`vmwareExpressRouteAuthorization` Submodule" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareExpressRouteAuthorization <a name="VmwareExpressRouteAuthorization" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vmware_express_route_authorization azurerm_vmware_express_route_authorization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer"></a>

```typescript
import { vmwareExpressRouteAuthorization } from '@cdktf/provider-azurerm'

new vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization(scope: Construct, id: string, config: VmwareExpressRouteAuthorizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig">VmwareExpressRouteAuthorizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig">VmwareExpressRouteAuthorizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.putTimeouts"></a>

```typescript
public putTimeouts(value: VmwareExpressRouteAuthorizationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isConstruct"></a>

```typescript
import { vmwareExpressRouteAuthorization } from '@cdktf/provider-azurerm'

vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformElement"></a>

```typescript
import { vmwareExpressRouteAuthorization } from '@cdktf/provider-azurerm'

vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformResource"></a>

```typescript
import { vmwareExpressRouteAuthorization } from '@cdktf/provider-azurerm'

vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.expressRouteAuthorizationId">expressRouteAuthorizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.expressRouteAuthorizationKey">expressRouteAuthorizationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference">VmwareExpressRouteAuthorizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.privateCloudIdInput">privateCloudIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.privateCloudId">privateCloudId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `expressRouteAuthorizationId`<sup>Required</sup> <a name="expressRouteAuthorizationId" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.expressRouteAuthorizationId"></a>

```typescript
public readonly expressRouteAuthorizationId: string;
```

- *Type:* string

---

##### `expressRouteAuthorizationKey`<sup>Required</sup> <a name="expressRouteAuthorizationKey" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.expressRouteAuthorizationKey"></a>

```typescript
public readonly expressRouteAuthorizationKey: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.timeouts"></a>

```typescript
public readonly timeouts: VmwareExpressRouteAuthorizationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference">VmwareExpressRouteAuthorizationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateCloudIdInput`<sup>Optional</sup> <a name="privateCloudIdInput" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.privateCloudIdInput"></a>

```typescript
public readonly privateCloudIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: VmwareExpressRouteAuthorizationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateCloudId`<sup>Required</sup> <a name="privateCloudId" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.privateCloudId"></a>

```typescript
public readonly privateCloudId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareExpressRouteAuthorizationConfig <a name="VmwareExpressRouteAuthorizationConfig" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.Initializer"></a>

```typescript
import { vmwareExpressRouteAuthorization } from '@cdktf/provider-azurerm'

const vmwareExpressRouteAuthorizationConfig: vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vmware_express_route_authorization#name VmwareExpressRouteAuthorization#name}. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.privateCloudId">privateCloudId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vmware_express_route_authorization#private_cloud_id VmwareExpressRouteAuthorization#private_cloud_id}. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vmware_express_route_authorization#id VmwareExpressRouteAuthorization#id}. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vmware_express_route_authorization#name VmwareExpressRouteAuthorization#name}.

---

##### `privateCloudId`<sup>Required</sup> <a name="privateCloudId" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.privateCloudId"></a>

```typescript
public readonly privateCloudId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vmware_express_route_authorization#private_cloud_id VmwareExpressRouteAuthorization#private_cloud_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vmware_express_route_authorization#id VmwareExpressRouteAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VmwareExpressRouteAuthorizationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vmware_express_route_authorization#timeouts VmwareExpressRouteAuthorization#timeouts}

---

### VmwareExpressRouteAuthorizationTimeouts <a name="VmwareExpressRouteAuthorizationTimeouts" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.Initializer"></a>

```typescript
import { vmwareExpressRouteAuthorization } from '@cdktf/provider-azurerm'

const vmwareExpressRouteAuthorizationTimeouts: vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vmware_express_route_authorization#create VmwareExpressRouteAuthorization#create}. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vmware_express_route_authorization#delete VmwareExpressRouteAuthorization#delete}. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vmware_express_route_authorization#read VmwareExpressRouteAuthorization#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vmware_express_route_authorization#create VmwareExpressRouteAuthorization#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vmware_express_route_authorization#delete VmwareExpressRouteAuthorization#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vmware_express_route_authorization#read VmwareExpressRouteAuthorization#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwareExpressRouteAuthorizationTimeoutsOutputReference <a name="VmwareExpressRouteAuthorizationTimeoutsOutputReference" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.Initializer"></a>

```typescript
import { vmwareExpressRouteAuthorization } from '@cdktf/provider-azurerm'

new vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VmwareExpressRouteAuthorizationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a> | cdktf.IResolvable

---



